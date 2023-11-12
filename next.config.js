module.exports = {
  ignoreBuildErrors: true,
  images: {
    domains: ["www.themoviedb.org"],
  },
  env: {
    NEXT_GOOLE_ID:
      "512096674039-7aa36ggo30q9j2te9l3njdcqc6bbflim.apps.googleusercontent.com",
    NEXT_GOOLE_SECRET: "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",
    NEXT_GOOLE_CALLBACK_URL: "http://localhost:3000/api/auth/callback/github",
  },
};
