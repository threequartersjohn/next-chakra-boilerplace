const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withRTL } = require('@moxy/jest-config-testing-library');
const withWeb = require('@moxy/jest-config-web');

module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(),
);
