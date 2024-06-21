# Skeleton Loader UI

To use the Skeleton Loader UI component we need to install `skeleton-loader-vue` package with our vue2 projects.

## Installation

Copy `SkeletonLoader` folder in your vue2 project and install `skeleton-loader-vue`.

```bash
npm install skeleton-loader-vue
```

## Usage

```python
import SkeletonLoader from './SkeletonLoader/index.vue';

<SkeletonLoader type="content-style-1"/>
```
We can use different type of Skeleton Loader UI to pass the type value in `SkeletonLoader` component which is mention in `child-elements/index.js` for e.g. `card | list-card | navbar | footer | img-box` etc.
