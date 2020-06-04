# App-boilerplate-Y.W.DO.T.

This boilerplate use the following core tools.

YARN

> Yarn is an alternative command-line client to npm to handle the npmjs.com online repository.
Some features made Yarn the outstanding choice compared to npm for some times. In v6, npm has included most of these features but they requires some settings.

* Multiple registry - reads and installs packages from both npmjs.com and Bower, to ensure a CI continuity if one of repositories goes down. Npm has it available with settings.

* Parallel downloads - uses parallel workers to download packages, to maximize resource utilization and reducing builds time. Npm has improved its download speed considerably.

* Caching: caches every package it downloads, so it never needs to download it again. This allows reinstall packages offline. Npm has included this feature.

* Lock file: A dedicated lock file that keeps dependencies locked to specific version. Npm has a package-lock.json that does the same thing.

Yarn still has some useful feature on its hands:

* Selective version resolution - allows to define custom package versions inside the various dependencies through the resolutions field in the package.json file.

* Automatic retries - network requests are retried upon failure reduncing red builds.

* Easy-to-read CLI output

* Unified installation structure independent from installation order

* Elimination of duplicates via resolving mismatched versions of dependencies to a single version

* Workspace - useful feature for monorepos concepts that allows to keep each project'dependencies contained plus a single lock file.

* Interactive upgrade - interactive space to upgrade packages.

Overall Yarn still is the fastest and safest package manager.
