// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  webpack: (config) => {
    // Add a rule to handle .html files
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
    });

    return config;
  },
};
