const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: ["source.unsplash.com"],
    },
    pwa: {
        dest: "public",
        runtimeCaching,
    },
});
