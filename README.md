# App-boilerplate-Y.W.DO.T.

This `React` application boilerplate use the following core tools.

YARN

> Yarn is an alternative command-line client to npm to handle the npmjs.com online repository.
Some features made Yarn the outstanding choice compared to npm for some times. In v6, npm has included most of these features but they require some settings.

* Multiple registries - reads and installs packages from both npmjs.com and Bower, to ensure a CI continuity if one of the repositories goes down. Npm has it available with settings.

* Parallel downloads - uses parallel workers to download packages, to maximize resource utilization and reducing builds time. Npm has improved its download speed considerably.

* Caching: caches every package it downloads, so it never needs to download it again. This allows reinstall packages offline. Npm has included this feature.

* Lock file: A dedicated lock file that keeps dependencies locked to a specific version. Npm has a package-lock.json that does the same thing.

Yarn still has some useful feature on its hand:

* Selective version resolution - allows defining custom package versions inside the various dependencies through the resolutions field in the package.json file.

* Automatic retries - network requests are retried upon failure reducing red builds.

* Easy-to-read CLI output

* Unified installation structure independent from installation order

* Elimination of duplicates via resolving mismatched versions of dependencies to a single version

* Workspace - useful feature for monorepos concepts that allows keeping each project' dependencies contained plus a single lock file.

* Interactive upgrade - interactive space to upgrade packages.

Overall Yarn still is the fastest and safest package manager.

Install yarn:
<br>
`curl -o- -L https://yarnpkg.com/install.sh | bash`

---

WEBPACK

> Webpack is a `static` module bundler for modern JavaScript applications. When webpack processes the application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. To do that uses an entry point, a file that is at the top of your app tree. Webpack uses this file to begin building out its internal dependency graph, figuring out automatically other modules and libraries that entry point depends on. 

I decide to go with Webpack because I want to explore some of the new V5 features and consolidate my understanding of it.
Webpack is still the most solid bundler. The configuration is very customisable, there are lots of plugins and more can be created as needed.

What I like about webpack and similar building tools is that I can directly see what loaders and plugins my code depends on, this allows me to consider more carefully the dependencies I decide to add to the code base. This means more controll over the final built.

Webpack has also some downsides.
Dead code elimination or tree-shaking is not as efficient, the bundle size can still be large if compared with other contenders.
Code splitting requires some thoughts and settings. It allows 3 approaches for this: define multiple entry point, CommonChunckPlugin, Dynamic imports. The contenders do this automatically but for learning purposes is good to give it somo thoughts.

Install webpack:
<br>
`yarn add webpack webpack-cli webpack-dev-server -D`
<br>
Useful plugins:
<br>
`CommonsChunkPlugin`, `UglifyJSPlugin`, `CleanWebpackPlugin`, `HotModuleReplacementPlugin`, `HtmlWebpackPlugin`, `MiniCssExtractPlugin`, `HtmlWebpackLinkTypePlugin`

---

BABEL, REACT

Babel seems to be the most common option to transpile `jsx` into vanilla `js`. To add react to the app a transpiler is necessary and needs to be included in the webpack config. A transpiler allows developer to write easier to read code and therefore easier to maintaine and scale.

> On top of installing babel and react, I have modified the folder structure allowed for multiple entry point and added two plugins to the webpack config: `HtmlWebpackPlugin`, `CleanWebpackPlugin`.

Install:
- `yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader`, `yarn add react react-dom`

---


