/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { 
    unoptimized: true,
    remotePatterns: [{ hostname: "localhost" }, { hostname: "randomuser.me" }]
  },
  trailingSlash: true
};

export default nextConfig;
