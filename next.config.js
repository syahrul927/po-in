// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */

module.exports = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                hostname: "*",
            },
        ],
    },
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
});
