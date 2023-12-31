module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["tdmb.api"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.iconfinder.com",
        port: "",
        pathname: "/data/icons/film-making-flat/60/**",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: "",
        pathname: "**/t/p/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "**/t/p/**",
      },
    ],
  },
};
