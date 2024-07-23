module.exports = {
  "petstore-file": {
    input: "./generated/lib/openapi/openapi.yaml",
    output: {
      target: "./src/petstore.ts",
      client: "react-query",
      mock: true,
      biome: true
    },
  },
};