const { useGatsbyNode } = require('gatsby-plugin-ts-config');
module.exports = useGatsbyNode(() => require('./src/app/lib/GatsbyNode'));
