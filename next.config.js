/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["cloudinary", "graphql-request"],
    components: {
      NavBar,
    },
  },
 
};

const withNavBar = () => {
  return (
    next({
      // other config options
      components: {
        NavBar,
      },
    })
  );
};

module.exports = withNavBar;

module.exports = nextConfig;
