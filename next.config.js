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
    ],
  },
};
