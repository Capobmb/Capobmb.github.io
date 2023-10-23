const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

module.exports = withMDX(nextConfig);
