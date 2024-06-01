module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'visionxtechnologies.com',
          },
        ],
        destination: 'https://www.visionxtechnologies.com',
        permanent: true,
      },
    ];
  },
};
