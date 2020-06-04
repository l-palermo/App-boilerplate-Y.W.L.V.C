# App-boilerplate-Y.W.DO.T.

This boilerplate use the following core tools.

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

To install yarn:
<br>
`curl -o- -L https://yarnpkg.com/install.sh | bash`

---

WEBPACK

> I decide to go with Webpack because I want to explore some of the new V5 features and consolidate my understanding of it.
Webpack is still the most solid bundler. It might lack in speed and bundle size but seems that V5 allows a better tree-shaking plus other improvements. The configuration is very customisable, there are lots of plugins and more can be created as needed.

The bundler choice as every other choice depends on the purpose of the app. In this case, the purpose is learning what bundling means an what are the steps required to bundle the source code in one file the CSS in another, how to make this accessible by the browser and create a stable built with which safely deploy the app.

Webpack requires to specify transpilers such as Babel and post-CSS. This need might have bad and good sides like more config work but also brings attention to what each dependency brings to the table and what we need to run it. Transpiler like babel/polyfill might result very expensive, so this is an opportunity to make better choices. Out of the box bundler just apply the needed transpiler.

The other two bundler contenders are Rollup and Snowpack that seem very interesting tools and I'll implement my knowledge of them in the next boilerplates.

> Snowpack seems to be an amazing tool for development allowing lots of functionalities out of the box (jsx, ccs-modules, CSS, assets, project-relative imports) and some others like hot-reloading with the help of specific plugins. The most is an important feature is leveraging EMS imports and remove unnecessary building works for the dev workflow. For production built it uses webpack or parcel plugins. Overall seems a very cool tool to approach.
The question is:
How configurable is the webpack plugin? Is it worth it having two building tools? On the other end, webpack-web-server is also pretty straight forward even if not as fast.

Rollup seems similar to webpack with some pros and cons.