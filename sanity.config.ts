'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { env } from '@/lib/env'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from './src/lib/sanity/schemas'
import { structure } from './src/lib/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the './src/lib/sanity/schemas' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION }),
  ],
})
