import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  webpack: (config) => {
    // Add a rule to handle .html files
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
    });

    return config;
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
  },
});

export default withMDX(nextConfig);
