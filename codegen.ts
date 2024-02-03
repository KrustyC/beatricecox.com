import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "src/types/new-generated/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
