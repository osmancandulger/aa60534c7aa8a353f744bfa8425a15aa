const env: any = {
  local: {
    API_URL: "https://teknasyon.netlify.app/.netlify/functions/products",
    API_AUTH: {
      key: "X-Access-Token",
      value: "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",
    },
  },
  development: {
    API_URL: "https://teknasyon.netlify.app/.netlify/functions/products",
    API_AUTH: {
      key: "X-Access-Token",
      value: "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",
    },
  },
  production: {
    API_URL: "https://teknasyon.netlify.app/.netlify/functions/products",
    API_AUTH: {
      key: "X-Access-Token",
      value: "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",
    },
  },
};
export default env.local;
