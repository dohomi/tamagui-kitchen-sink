const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["react-native-web"]);

const nextConfig = {
    reactStrictMode: true,
    target: 'node'
};

module.exports = withPlugins(
    [withTM, [{ projectRoot: __dirname + "/../.." }]],
    nextConfig
);
