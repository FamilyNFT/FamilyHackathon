/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/:path*", // Proxy to Backend
      },
    ];
  },
  // reactStrictMode: true,
};
