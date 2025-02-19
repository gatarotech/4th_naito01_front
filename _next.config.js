
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", // Azure App Service に適した設定
};

module.exports = nextConfig;