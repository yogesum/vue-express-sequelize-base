module.exports = {
  webpack: (conf) => {
    const config = conf;
    config.entry.main = './server/index.js';
    return config;
  },
};

