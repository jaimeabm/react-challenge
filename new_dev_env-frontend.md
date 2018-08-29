# Setting up a new development environment for the front-end

## Requirements

### Installing NodeJS

If you’re not sure if Node.js is installed on your machine, you can open a Terminal or
Command Prompt window and type:

```
$ node -v
Output: v7.3.0
```

If is not installed, go to [NodeJS](https://nodejs.org/en/) and download the last version of software.

#### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

`sudo npm install npm@latest -g`

>Test: `Run npm -v`. The version should be higher than 2.1.8.


### Installing Dependencies

The best way to manage locally installed npm packages is to use a package.json file. If you download a package.json file from the repository, you can install all the dependencies by running the following command:

```
sudo npm install package.json
```

If you don't get the file from the repository, you will need to create a new one and execute the following commands inside of the *frontend* folder.

#### Installing webpack dependencies

In order to create a static build process with webpack, we’ll need to install a few things. Everything that we need can be installed with npm. First, we might as well install webpack globally so we can use the webpack command anywhere:

```
sudo npm install -g webpack
```

Webpack has a built-in plugin that you can use to uglify the bundle. In order to use it, you will need to install webpack locally:

```
npm install webpack --save-dev
```

Webpack is also going to work with Babel to transpile our code from JSX and ES6 to JavaScript that runs in the browser. We are going to use a few loaders along with a few presets to accomplish this task:

```
npm install babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 --save-dev
```

Our application uses React and ReactDOM. Now we are going to let webpack add them to our bundle. We’ll need to install the dependencies for React and ReactDOM locally:

```
npm install react react-dom react-addons-test-utils --save
```

In order to implement CSS bundling in your webpack configuration, you will need to install some loaders:

```
npm install style-loader css-loader postcss-loader --save-dev
```

It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified).

```
npm install --save-dev optimize-css-assets-webpack-plugin
```

Fetch is a polyfill created by the WHATWG group that allows us to easily make API calls using promises. In this section we will introduce isomorphic-fetch, a version of Fetch that works nicely with React. Let’s install isomorphic-fetch:

```
npm install isomorphic-fetch --save
```

A popular plugin to manage and clean the `/dist` folder is *clean-webpack-plugin*.

```
npm install clean-webpack-plugin --save-dev
```

We can might use the uuid library to create absolutely unique IDs:

```
npm install uuid --save
```

React Redux is a library that contains some tools to help ease the complexity involved with implicitly passing the store via context. React Redux reduces your code’s complexity and may help you build apps a bit faster. In order to use React Redux, we must first install it. It can be installed via npm:

```
npm install redux --save
npm install react-redux --save
```

We will be working with a plugin called eslint-plugin-react. This plugin will analyze our JSX and React syntax in addition to our JavaScript. Let’s install eslint globally. You can install eslint with npm:

```
npm install -g eslint
```

Before we can get started writing tests, we will need to install a testing framework. You can write tests for React and Redux with any JavaScript testing framework. We’ll use Jest, a JavaScript testing framework that was designed with React in mind:

```
npm install -g jest
```

Since we are using emerging JavaScript and React, we will need to transpile our code and our tests before they can run. Just install the babel-jest package to make that possible:

```
npm install --save-dev babel-jest
```

deep-freeze can help us make sure our state and action objects stay immutable by preventing them from changing. deep-freezing cause an error
if any code does try to mutate the state and an action:

```
npm install deep-freeze --save-dev
```

If you import SCSS (or CSS or SASS) files directly into your components, you will need to ignore these imports while testing. If you do not ignore them, they will cause the tests to fail. These files can be ignored by incorporating a module mapper that returns an empty string when .css, .scss, or .less files are imported. Let’s install jest-css-modules:

```
npm install jest-css-modules --save-dev
```

Enzyme is a testing utility for React components designed at Airbnb. Enzyme requires react-addons-test-utils, a set of tools that can be used to render and interact with components during a test. Additionally, react-dom is required, but we’ll assume that you already have react-dom installed. Enzyme makes it easier to render a component and traverse the rendered output. Enzyme is not a testing or assertion framework. It handles the task of rendering React components for testing and provides the necessary tools for traversing child elements, verifying props, verifying state, simulating events, and querying the DOM.

```
npm install enzyme react-addons-test-utils --save-dev
```

Snapshot testing allows us to move quickly, but if we move too fast, we could end up writing flaky tests, or tests that pass when they should fail. Taking snapshots of HTML
strings will work for testing, but it is hard for us to verify that the snapshot is actually correct. Let’s improve our snapshot by saving the output as JSX.
For this, we’ll need to install the enzyme-to-json module:

```
npm install enzyme-to-json --save-dev
```

Let’s install react-router-dom, the package that we need to incorporate the router into our browser-based application:

```
npm install react-router-dom --save
```

This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles.

```
npm install html-webpack-plugin --save-dev
```

A modern alternative to CSS resets

```
npm install --save normalize.css --save-dev
```

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development

```
sudo npm install bootstrap@3 --save-dev
```

The file-loader instructs webpack to emit the required object as file and to return its public URL and thhe url-loader works like the file-loader, but can return a DataURL if the file is smaller than a byte limit.

```
sudo npm install file-loader, url-loader --save-dev
```

This Webpack loader inlines SVG as module. If you use Adobe suite or Sketch to export SVGs, you will get auto-generated, unneeded crusts. This loader removes it for you, too.

```
sudo npm install svg-inline-loader --save-dev
```

Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.

```
sudo npm i --save-dev @fortawesome/fontawesome
sudo npm i --save-dev @fortawesome/fontawesome-free-solid
sudo npm i --save-dev @fortawesome/fontawesome-free-regular
sudo npm i --save-dev @fortawesome/fontawesome-free-brands
```

jQuery is a fast, small, and feature-rich JavaScript library.

```
sudo npm install jquery --save-dev
```

Image loader module for webpack, we first need to install *yarn*, to install yarn:

```
$ sudo curl -o- -L https://yarnpkg.com/install.sh | bash
```

then install the failed or missing package:

```
$ sudo yarn add image-webpack-loader --dev/-D
$ sudo yarn add file-loader --dev/-D
```

### Configuring the Webpack.config.js

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles.

The output bundle file is still simply a text file, so reducing the amount of text in this file will reduce the file size and cause it to load faster over HTTP. Some things that can be done to reduce the file size include removing all whitespace, reducing variable names to a single character, and removing any lines of code that the interpreter will never reach. Reducing the size of your JavaScript file with these tricks is referred to as minifying or uglifying your code. Webpack has a built-in plugin that you can use to uglify the bundle. In order to use it, you will need to install webpack locally `npm install webpack --save-dev`

#### Entry & Output configuration

- Import the *webpack* for reducing the size of your JavaScript files.
- Import the *path* for working with file and directory paths.

```
var webpack = require("webpack")
var path = require('path')
```

- All the configuration settings should be inside of the `module.exports` object.

```
module.exports = {
};
```

- The first setting to enter is the *entry* point. An entry point indicates which module webpack should use to begin building out its internal dependency graph. After entering the entry point, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). Don't forget to update the location of the index.js file.

```
module.exports = {
  entry: "./src/index.js",
};
```

- The output property tells webpack where to emit the bundles it creates and how to name these files. You can configure this part of the process by specifying an output field in your configuration. In the example below, we use the output.filename and the output.path properties to tell webpack the name of our bundle and where we want it to be emitted to.
```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/webpack.bundle.js'
  }
```

- The publicPath configuration option can be quite useful in a variety of scenarios. It allows you to specify the base path for all the assets within your application.

```
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist','assets'),
        filename: 'webpack.bundle.js',
        publicPath: "assets"
    }
};
```

- Setting the devtool property to '#source-map' tells webpack that you want to use
source mapping. If the *devtool* property is added, then a *sourceMapFilename* is required. Webpack will associate the bundle with the source map during the export. The next time you run webpack, you will see that two output files are generated and added to the assets folder: the original bundle.js and bundle.map. The source map is going to let us debug using our original source files. In the Sources tab of your browser’s developer tools, you should find a folder named webpack://

```
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist', ' assets'),
        filename: 'webpack.bundle.js',
        publicPath: "assets",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
};
```
#### Loaders configuration

Loaders are transformations that are applied on the source code of a module. They allow you to pre-process files as you import or “load” them. Thus, loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like import CSS files directly from your JavaScript modules!

- **module.rules** allows you to specify several loaders within your webpack configuration. This is a concise way to display loaders, and helps to maintain clean code. It also offers you a full overview of each respective loader. The next set of instructions for webpack consists of a list of loaders to run on specified modules. The rules field is an array because there are many types of loaders that you can incorporate with webpack.

```
        ...
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: []
    }
};
```

- Start by incorporating the babel loader, in the example below, we are only incorporating babel. Each loader is a JavaScript object. The test field is a regular expression that matches the file path of each module that the loader should operate on. In this case, we are
running the babel-loader on all imported JavaScript files except those found in the
node_modules folder.

```
rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },
        ]
```

- Also, include the *style-loader* that add CSS to the DOM by injecting a *< style >* tag and the *css-loader* interprets *@import* and *url()* like *import/require()* and will resolve them. PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/).

```
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}]
            },
```

- Chain the sass-loader with the css-loader and the style-loader to immediately apply all styles to the DOM.

```
            {
                test: /\.scss/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [require('autoprefixer')]
                    }}, 'sass-loader']
            }
```

#### Plugins configuration

Plugins are the backbone of webpack. webpack itself is built on the same plugin system that you use in your webpack configuration! They also serve the purpose of doing anything else that a loader cannot do.

Since plugins can take arguments/options, you must pass a new instance to the plugins property in your webpack configuration. Depending on how you are using webpack, there are multiple ways to use plugins.

- Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project. This plugin will clean up the folder. Don't forget to import the module at the beginning of the file.

```
var CleanWebpackPlugin = require('clean-webpack-plugin');
```

```
new CleanWebpackPlugin(['dist'])
```

- The DefinePlugin allows you to create global constants which can be configured at compile time. This can be very useful for allowing different behaviour between development builds and release builds. For example, you might use a global constant to determine whether logging takes place; perhaps you perform logging in your development build but not in the release build. That’s the sort of scenario the DefinePlugin facilitates.

```
            new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("1.0"),
            BROWSER_SUPPORTS_HTML5: true
        })
```

> Remember that you only need to do this for production builds. You shouldn’t apply UglifyJsPlugin or DefinePlugin with 'production' value in development because they will hide useful React warnings, and make the builds much slower.

- Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode. You can pass an object containing UglifyJS options. 
-- compress (boolean|object): options for UglifyJS compression.
-- mangle (boolean|object): options for UglifyJS variable name mangling, which is enabled by default (but is not).
-- sourceMap (boolean): use SourceMaps to map error message locations to modules.
-- warnings: (boolean): Setting warnings to false will remove any console warnings from the exported bundle.

```
            new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: true,
            mangle: false
        })
```

> Remember that you only need to do this for production builds. You shouldn’t apply UglifyJsPlugin or DefinePlugin with 'production' value in development because they will hide useful React warnings, and make the builds much slower.

- Optimize CSS Assets Webpack Plugin: It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified). Since extract-text-webpack-plugin only bundles (merges) text chunks, if its used to bundle CSS, the bundle might have duplicate entries (chunks can be duplicate free but when merged, duplicate CSS can be created). Don't forget to import the module at the beginning of the file.

```
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
```

```
            new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
```


