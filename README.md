# App-boilerplate-Y.W.L.DO.C.

This `React` application boilerplate uses the following core tools.

Istruction:

-   clone the repo and run `yarn install` 'yarn run start'

YARN

> Yarn is an alternative command-line client to npm to handle the npmjs.com online repository.
> Some features made Yarn the outstanding choice compared to npm for some times. In v6, npm has included most of these features but they require some settings.

-   Multiple registries - reads and installs packages from both npmjs.com and Bower, to ensure a CI continuity if one of the repositories goes down. Npm has it available with settings.

-   Parallel downloads - uses parallel workers to download packages, to maximize resource utilization and reducing builds time. Npm has improved its download speed considerably.

-   Caching: caches every package it downloads, so it never needs to download it again. This allows reinstall packages offline. Npm has included this feature.

-   Lock file: A dedicated lock file that keeps dependencies locked to a specific version. Npm has a package-lock.json that does the same thing.

Yarn still has some useful feature on its hand:

-   Selective version resolution - allows defining custom package versions inside the various dependencies through the resolutions field in the package.json file.

-   Automatic retries - network requests are retried upon failure reducing red builds.

-   Easy-to-read CLI output

-   Unified installation structure independent from installation order

-   Elimination of duplicates via resolving mismatched versions of dependencies to a single version

-   Workspace - useful feature for monorepos concepts that allows keeping each project' dependencies contained plus a single lock file.

-   Interactive upgrade - interactive space to upgrade packages.

Overall Yarn still is the fastest and safest package manager.

Install yarn:

-   `curl -o- -L https://yarnpkg.com/install.sh | bash`

---

WEBPACK

> Webpack is a `static` module bundler for modern JavaScript applications. When webpack processes the application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. To do that uses an entry point, a file that is at the top of your app tree. Webpack uses this file to begin building out its internal dependency graph, figuring out automatically other modules and libraries that entry point depends on.

I decide to go with Webpack because I want to explore some of the new V5 features and consolidate my understanding of it.
Webpack is still the most solid bundler. The configuration is very customisable, there are lots of plugins and more can be created as needed.

What I like about webpack and similar building tools is that I can directly see what loaders and plugins my code depends on, this allows me to consider more carefully the dependencies I decide to add to the code base. This means more control over the final built.

Webpack has also some downsides.
Dead code elimination or tree-shaking is not as efficient, the bundle size can still be large if compared with other contenders.
Code splitting requires some thoughts and settings. It allows 3 approaches for this: define multiple entry points, CommonChunckPlugin, Dynamic imports. The contenders do this automatically but for learning's purposes are good to give it some thoughts.

Install webpack:

-   `yarn add webpack webpack-cli webpack-dev-server -D`

Useful plugins:
<br>
`CommonsChunkPlugin`, `UglifyJSPlugin`, `CleanWebpackPlugin`, `HotModuleReplacementPlugin`, `HtmlWebpackPlugin`, `MiniCssExtractPlugin`, `HtmlWebpackLinkTypePlugin`

---

BABEL, REACT

Babel seems to be the most common option to transpile `jsx` into vanilla `js`. To add react to the app a transpiler is necessary and needs to be included in the webpack config. A transpiler allows the developer to write easier to read code and therefore easier to maintain and scale.

> On top of installing babel and react, I have modified the folder structure allowed for multiple entry points and added two plugins to the webpack config: `HtmlWebpackPlugin`, `CleanWebpackPlugin`.

Install:

-   `yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-loader`
-   `yarn add react react-dom`

---

JEST, REACT TESTING LIBRARY

> Why? I want to learn something new and so far I mostly used Jest and Enzyme when testing React apps.

React testing library has a more user-based approach to testing because it renders the component in the actual dom, therefore, allows the devs to write a test that simulates more closely what would be the user experience. Enzyme instead follows the concept of unit testing and therefore in isolation from the actual dom, so it is very useful to test the actual implementation of the component and assumes that as consequence the user will have the correct experience.

Just by looking at the Testing library query selector, it is clear how the user experience is the focal point and I think also help the developer focusing more on accessibility.

---

PRECOMMIT HOOKS

> Pre-commit hooks are very useful tools that help developers to make sure the work they commit or merge is 'not' introducing bugs.

As pre-commit tools I have chosen `pre-commit` that is very easy to initiate, just need a small config in the package.json with the commands we want to run before committing the changes. The alternative to pre-commit is `Husky`. I have used `husky` in another repo and this is also very easy to config. `Husky` is more popular and has more config options.

Install:

-   `yarn add -D pre-commit`

---

ESLINT, STYLELINT

> Linters are cool but, those with the (--fix) function are even better.

This is what a linter should do for me:

-   support ESNext features
-   be highly configurable (this can be discussed)
-   have good documentation or to be popular enough to find info on the web
-   show what rule the error refers to
-   have a good collection of plugins/addons to support specific libraries and frameworks
-   auto-correct function

These are all the things that ESLint does for me but I wanted to check other tools just for a quick comparison.
I read about `JSLint`, `JSHint`, `StandardJS` and they all have different feature but none of them fully fills my requirements.

`JSLint` is not configurable and highly opinionated so easy to get started with. On the cons the docs are not great, I didn't manage to find good discussions on the web either, requires ESLint plugin to support `.jsx`.

`Standard JS` it doesn't require config so, as JSLint, it is easy to start with but you need to be happy with the type of style it enforces. Moreover, looking at the dependencies it uses ESLint under the wood so why shall I not just staying with ESLint?

So `ESLint` is the winner, it provides all the functionalities listed above.
With ESLint just run `eslint --init` answer question about my style and I get `.eslintrc.json` file with some basic config I can customise as I please family easily.

I have configured ESLint to use Prettier as code formatter, this is because Prettier is an opinionated code formatter that doesn't require many settings and leaves ESLint to operate on a more syntactic level.

On the CSS side, I chose `Stylelint` because has good docs and lots of config options. However, the last VSCode Stylelint plugin version didn't function with my version of VSCode so I had to install the previous one `0.83.0`.

Install:

-   `yarn add -D eslint eslint-plugin-react`
-   `yarn add -D stylelint stylelint-config-standard`

---

LINARIA

Styling is a hot topic, the question is `CSS-Module` or `CSS in JS`?

I honestly feel comfortable working with CSS modules, post CSS has lots of plugins that allow us to do almost everything we want with CSS resolving issues like scoping and class naming. I have already used CSS-Modules on another project so for the purpose of this exercise I go for `CSS in JS`.

Most of the `CSS in JS` libraries have runtime downsides because they need to load, parse and execute JS before applying the style.
After reading several review's articles on `CSS in JS` libraries, where `Styled components` seemed to be the winner I came across this new tool `LINARIA`.
Linaria let writing CSS in JS with zero runtime and uses a similar API of libraries like `Styled Components` by having built-in features like scoping, nesting and vendor prefixing.

Linaria allows two types of tags, `styled` and `css`.

The `CSS` tag add allows using imported variables and functions for logic inside the CSS code that will be evaluated at build time.
Downsides the class name is a random alphanumeric code.

```javascript
import { css } from 'linaria';

const reactLogo = css`
    width: 30rem;
    height: 30rem;
`;

const ReactLogo = ({ logoImage }) => <img className={reactLogo} src={logoImage} alt="react logo" />;
```

The `Styled` tag, this approach is much better than the css tag.

```javascript
import { styled } from 'linaria/react';

const ImageLarge = styled.img`
    height: 9rem;
    width: ${(props) => (props.alt === 'yarn logo' ? `9rem` : `auto`)};
`;

const ToolLogos = () => (
    <>
        <ImageLarge src={yarn} alt="yarn logo" />
        <ImageLarge src={webpack} alt="webpack logo" />
    </>
);
```

So far I have enjoyed writing styled-components with Linaria, makes the code much clearer without the need of using additional `.jsx` tags for styling. With Linaria, each styled element turns into a UI component and it naturally drives reusability. However I still need to get my head around it, how
to test it and adopt it in a more complex scenario.
Class names cannot be fully customised but probably there is no need to have a clean class name. With this type of syntax, we can pass functions to css attributes and return the value we want depending on the props. More investigation needs to be done on this.

One downside, the docs are good but quite small, no many plugins and there are no many discussions on the web on common issues.

---

CIRCLE CI

The choice of a CI/CD tool is lead in particular by-product and team requirements. Choosing the wrong tool might affect productivity, speed and data security.
The CI/CD landscape is vast, therefore after doing some reading I decided to focus on Circle CI and Travis by the time I have happily used Github Actions on another project.

Both Travis and Circle runs the runs in the cloud and has an easy setup. They both link easily to common cloud repositories like GitHub or BitBucket and are easily configurable even if Circle CI has a much more readable YAML file and better docs and adding CI/CD to your project is very easy. Circle CI creates a new branch with a basic config with a couple of clicks.

Circle CI has high compatibility to many DB types, caching tool and coding language. Moreover, Circle CI has the ability to restart from failing to allow the user to decide whether to start the whole build process over or to continue the job from the point of failure.

The UI is very easy to use and has a fairly quick build time.

---

VERCEL

Vercel is a super easy to use hosting provider, it quickly connects to your repo and only needs you to specify the output folder path and the build command then takes care of everything else and update the deployment build every time a branch is merged to master.

However, these functionalities are common to may hosting provider so why did I choose Vercel.

I wanted to a 'free' deployment/hosting provider with a really easy to use interface and that can easily scale without additional settings.
