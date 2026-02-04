# Contentful → Sanity migration guide (beatricecox.com)

This guide walks through using the official [Contentful to Sanity](https://www.sanity.io/plugins/contentful-to-sanity) plugin to migrate your Contentful space into this project’s Sanity dataset. You can either **replace** the current Sanity setup (schemas + content) with the migrated one, or use a **new dataset** and then align schemas manually.

---

## 1. What the plugin does

- Reads your **Contentful space** (content types + entries + assets).
- Generates **Sanity schema** that mirrors Contentful (document types, fields, references).
- Produces a **dataset.ndjson** file for import.
- Optionally creates a **clean Sanity project** in a folder (e.g. `./migrate`).

Your app currently uses:

- **Sanity**: `sanity.config.ts`, `src/sanity/` (schemas, queries, parsers), Next.js Studio at `/studio`.
- **Env**: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`.

You can either run the migration into a **temporary** Sanity project and then bring schema + data back here, or run it **into this repo** (see Option B below).

---

## 2. Get Contentful credentials

In [Contentful](https://app.contentful.com/):

1. **Space ID**  
   Space settings → General → Space ID.

2. **Content Delivery API token**  
   Settings → API keys → Content delivery / preview tokens → create or copy **access token**.

3. **Content Management token**  
   Settings → API keys → Content management tokens → **Generate personal token** (needed for the migration tool to read the full content model and content).

Add these to `.env` (and optionally `.env.template` for documentation):

```bash
# Contentful (for migration)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token
# Optional: delivery token if you use from-file export
# CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
```

---

## 3. Option A – Migrate into a temporary project, then bring schema back

This keeps your repo unchanged until you’re ready to switch.

### Step 1: Create a clean Sanity project (migration target)

```bash
npm create sanity@latest --template clean --create-project "beatricecox-migrate" --dataset production --output-path ./migrate
```

- Use a **new** project name if you want a separate Sanity project, or re-use your existing `NEXT_PUBLIC_SANITY_PROJECT_ID` and dataset name if you want to **replace** the current dataset (see “Using your existing project” below).
- `./migrate` will contain a minimal Sanity Studio (v3) and will receive the generated schema and `dataset.ndjson`.

### Step 2: Run the migration (generates schema + ndjson)

From the **repo root**:

```bash
npx contentful-to-sanity@latest -s $CONTENTFUL_SPACE_ID -t $CONTENTFUL_MANAGEMENT_TOKEN -a ./migrate
```

Or with values in place:

```bash
npx contentful-to-sanity@latest -s YOUR_SPACE_ID -t YOUR_MANAGEMENT_TOKEN -a ./migrate
```

- **-s** = Contentful space ID
- **-t** = Contentful management token
- **-a** = output path (same as `./migrate`)

This will:

- Generate Sanity schema from your Contentful content types (usually in `./migrate/schema/` or similar).
- Produce `./migrate/dataset.ndjson`.

### Step 3: Import the dataset

```bash
cd ./migrate && npx sanity dataset import ./dataset.ndjson
```

You can run the Studio before the import finishes; it will reflect progress.

### Step 4: Point Studio at the generated schema

Edit `./migrate/sanity.config.ts`: switch from the default `schemas` to the **generated** schema, e.g.:

```ts
// Replace
import { schemaTypes } from "./schemas";
// With (path may vary; check ./migrate after run)
import { types as schemaTypes } from "./schema";
```

Then run the Studio:

```bash
cd ./migrate && npm run dev
```

Verify content and schema in the Studio.

### Step 5: Bring migration into this repo (replace current Sanity)

When you’re happy with the migrated content and schema:

1. **Back up** your current `src/sanity/schemas/` (and any content you want to keep).
2. **Replace** `src/sanity/schemas/` with the generated schema from `./migrate` (adjust so the export is what `sanity.config.ts` expects, e.g. a single `schemaTypes` array).
3. **Update** `sanity.config.ts` to import from the new schema path.
4. **Align app code**: your GROQ queries and parsers in `src/sanity/queries/` and `src/sanity/parsers/` are written for the **current** schema (e.g. `project`, `slug`, `blocks[]`). The migrated schema will have **Contentful**-style types and field names. You will need to either:
   - **Remap** the generated schema (e.g. rename types/fields) to match your current queries, or
   - **Rewrite** queries and parsers to match the generated schema.
5. **Prisma**: Your `Project` model stores `sanityId` and ordering. After migration, either:
   - Rebuild this table from the new Sanity project IDs and order, or
   - Keep using it and update the IDs to the new Sanity `_id` values.
6. **Optional**: Remove `./migrate` after you’ve copied schema and confirmed the dataset import in your main project.

---

## 4. Option B – Use your existing Sanity project and dataset

If you want to **overwrite** the current dataset and then adopt the generated schema in this repo:

1. **Back up** existing content (export from Sanity or keep a copy of `dataset.ndjson` from a previous export).
2. Create the clean project as in Step 1 but **reuse** your existing project and dataset:

   ```bash
   npm create sanity@latest --template clean --output-path ./migrate
   ```

   Then in `./migrate/sanity.config.ts` (or `.env` in that folder) set:
   - `projectId`: your `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `dataset`: your `NEXT_PUBLIC_SANITY_DATASET` (e.g. `production`)

3. Run the migration **into** that folder, then run the import **from** `./migrate`:

   ```bash
   npx contentful-to-sanity@latest -s $CONTENTFUL_SPACE_ID -t $CONTENTFUL_MANAGEMENT_TOKEN -a ./migrate
   cd ./migrate && npx sanity dataset import ./dataset.ndjson
   ```

4. When the import targets your existing project/dataset, it will **replace** documents with the same IDs (or you can use `--replace` / `--missing`; run `npx contentful-to-sanity@latest --help` for details).

5. Then follow the same “Bring migration into this repo” steps above: replace schemas, update `sanity.config.ts`, align queries/parsers and Prisma.

---

## 5. CLI options reference

Useful flags (run `npx contentful-to-sanity@latest --help` for full list):

| Option                   | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `-s, --space`            | Contentful space ID                                    |
| `-t, --contentful-token` | Contentful management token                            |
| `-a, --output`           | Output path (e.g. `./migrate`)                         |
| `-p, --project`          | Sanity project ID (if not using create-project)        |
| `-d, --dataset`          | Sanity dataset name                                    |
| `--sanity-token`         | Sanity API token (for import)                          |
| `--replace`              | Replace documents with same IDs                        |
| `--missing`              | Skip documents that already exist                      |
| `--weak-refs`            | Use weak refs so import continues on broken references |
| `-f, --from-file`        | Use a stored Contentful export file instead of API     |

---

## 6. After migration: aligning this app with the new schema

Your app is tightly coupled to the current Sanity schema:

- **Queries** in `src/sanity/queries/` (e.g. `get-project.ts`, `get-projects-list.ts`) expect types like `project`, `slug.current`, `blocks[]`, and specific block types.
- **Parsers** in `src/sanity/parsers/` (e.g. `project.ts`) map Sanity responses to app types.
- **Prisma** `Project` table stores `sanityId` and successor ordering.

After migration you have two paths:

1. **Keep the generated Contentful schema**
   - Rewrite all GROQ queries and parsers to use the new document and field names.
   - Update Prisma usage to use new Sanity IDs and ordering (if you still use Prisma for order).

2. **Keep your current schema shape**
   - Use the migration only for **content** (entries → documents, assets → Sanity assets).
   - Manually define your current schemas (e.g. `project`, `homepage`, `aboutPage`, blocks) in the generated project or back in `src/sanity/schemas/`.
   - Write a **one-off script** that reads `dataset.ndjson` or the Contentful API and creates/updates Sanity documents that match your existing schema (and GROQ/queries/parsers). This is more work but preserves your current app code.

---

## 7. Checklist

- [ ] Contentful Space ID, management token (and optional delivery token) in `.env`
- [ ] Decide: new Sanity project + dataset vs existing project/dataset (Option A vs B)
- [ ] Create `./migrate` with `npm create sanity@latest ...`
- [ ] Run `npx contentful-to-sanity@latest -s ... -t ... -a ./migrate`
- [ ] Run `cd ./migrate && npx sanity dataset import ./dataset.ndjson`
- [ ] Point `./migrate/sanity.config.ts` at generated schema and try Studio
- [ ] Back up current `src/sanity/schemas/` and (if needed) existing dataset
- [ ] Replace or merge schemas into `src/sanity/schemas/` and update `sanity.config.ts`
- [ ] Update GROQ queries and parsers to match new schema (or keep schema and script content)
- [ ] Update Prisma usage if you rely on `sanityId` / ordering
- [ ] Test site and Studio; remove `./migrate` if no longer needed

---

## 8. Quick start (copy-paste)

```bash
# 1. Env (add to .env)
# CONTENTFUL_SPACE_ID=...
# CONTENTFUL_MANAGEMENT_TOKEN=...

# 2. Create migration target
npm create sanity@latest --template clean --create-project "beatricecox-migrate" --dataset production --output-path ./migrate

# 3. Run migration (from repo root)
npx contentful-to-sanity@latest -s $CONTENTFUL_SPACE_ID -t $CONTENTFUL_MANAGEMENT_TOKEN -a ./migrate

# 4. Import dataset
cd ./migrate && npx sanity dataset import ./dataset.ndjson

# 5. Use generated schema in ./migrate/sanity.config.ts (see Step 4 above), then:
cd ./migrate && npm run dev
```

After that, follow “Bring migration into this repo” and “Aligning this app with the new schema” above to integrate with beatricecox.com.
