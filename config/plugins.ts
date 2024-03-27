// ~/strapi-aws-s3/backend/config/plugins.js

module.exports = ({ env }) => ({
  meilisearch: {
    config: {
      host: env("MEILISEARCH_HOST", "http://localhost:7700"),
      apiKey: env("MEILI_MASTER_KEY", ""),
      blogPost: {},
    },
  },
});
