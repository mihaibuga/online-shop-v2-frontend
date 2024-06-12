/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "mdbcdn.b-cdn.net",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "readymadeui.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
