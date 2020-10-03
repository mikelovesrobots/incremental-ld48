"use strict"

const path = require("path")

const src = path.join(__dirname, "src")
const nodeModules = path.join(__dirname, "node_modules")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      modules: [src, nodeModules],
    },
  })
}
