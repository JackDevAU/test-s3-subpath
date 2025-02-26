/** @type {import('next').NextConfig} */

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
}
