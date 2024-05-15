/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Enable static exports for the App Router */
  output: "export",

  /** Set base path. This is the slug of Github repo */
  basePath: "/ashley-norman.github.io",

  /** Disable server-based image optimization */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
