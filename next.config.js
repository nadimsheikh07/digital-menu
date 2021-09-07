const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
        dest: "pwa",
        register: true,
        skipWaiting: true,
    },
});