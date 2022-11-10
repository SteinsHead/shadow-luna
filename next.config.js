module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        images: {
            domains: ['localhost:3001']
        }
    }
    return nextConfig
}