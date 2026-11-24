/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
  },
  // Old pages were merged — keep any shared/bookmarked links working.
  async redirects() {
    return [
      { source: "/projects", destination: "/programmes", permanent: true },
      { source: "/projects/:slug", destination: "/programmes", permanent: true },
      { source: "/programmes/:slug", destination: "/programmes", permanent: true },
      { source: "/reports", destination: "/impact", permanent: true },
      { source: "/gallery", destination: "/impact", permanent: true },
      { source: "/donate", destination: "/get-involved", permanent: true },
      { source: "/contact", destination: "/get-involved", permanent: true },
      { source: "/news", destination: "/programmes", permanent: true },
      { source: "/news/:slug", destination: "/programmes", permanent: true },
    ];
  },
};

export default nextConfig;
