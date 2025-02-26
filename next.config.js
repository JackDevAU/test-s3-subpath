/** @type {import('next').NextConfig} */

module.exports = {
  basePath: "/test-s3-subpath",
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
