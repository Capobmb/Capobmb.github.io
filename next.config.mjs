import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack(config, options) {
    return config;
  },
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default withMDX(nextConfig);
