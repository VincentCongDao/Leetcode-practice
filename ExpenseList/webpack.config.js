const webpack = require("webpack");
require("dotenv").config();

module.exports = {
	// your webpack config settings
	plugins: [
		new webpack.EnvironmentPlugin(["REACT_APP_API_KEY"]), // List environment variables you want to include
	],
};
