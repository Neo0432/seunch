module.exports = {
  jsxRuntime: "automatic",
  index: false,
  native: false,
  typescript: true,
  outDir: "src/shared/assets/icons/components",
  filenameCase: "kebab",
  template: require("./svgr-template.cjs"),
  prettier: false,
  // prettierConfig: {
  //   parser: "typescript",
  //   arrowParens: "always",
  //   bracketSameLine: false,
  //   bracketSpacing: true,
  //   singleQuote: true,
  //   trailingComma: "all",
  //   printWidth: 110,
  // },
  svgoConfig: {
    plugins: [
      {
        name: "removeViewBox",
        active: false,
      },
      {
        name: "removeXMLNS",
        active: true,
      },
    ],
  },
};
