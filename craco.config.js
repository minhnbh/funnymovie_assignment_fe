const { CracoAliasPlugin } = require("react-app-alias");

/** @type { import('@craco/types').CracoConfig } */
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        tsconfig: "./tsconfig.json",
      },
    },
  ],
  devServer: {
    port: 3000,
  },
};
