
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", // Azure App Service 向け設定
    env: {
        PORT: process.env.PORT || "8080", // Azure の環境変数 PORT に対応
        NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "https://tech0-gen8-step4-pos-app-38.azurewebsites.net",
    },
    outputFileTracingRoot: __dirname, // `standalone` モードのルートを明示的に指定
};

module.exports = nextConfig;