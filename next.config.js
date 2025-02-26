/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '/test',
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
