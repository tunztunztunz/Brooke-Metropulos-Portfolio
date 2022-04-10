const { redirect } = require("next/dist/next-server/server/api-utils");

module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'localhost'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      }
    ]
  }
};
