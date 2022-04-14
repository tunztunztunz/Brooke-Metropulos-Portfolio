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
      },
      {
        source: '/contact',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      },
      {
        source: '/about',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      },
      {
        source: '/illustration',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      },
      {
        source: '/animation',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      },
      {
        source: '/design',
        destination: "https://www.bmetropulos.com/",
        permanent: false
      }
    ]
  }
};
