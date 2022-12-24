# Redux Visualization

## Overview

🔗 First you can examine the project in [live](https://redux-visualization.vercel.app/).

If you're new to [Redux](https://redux.js.org/introduction/getting-started), **redux-visualization** is prepared for you to visualize Redux structure. You can use it as functionally as you want later, but for now I'm keeping it as simple as possible so you can easily understand the logic.

## Usage

1. Install the Redux library:

npm:

```
$ npm install --save react-redux
$ npm install --save-dev redux-devtools
```

yarn:

```
$ yarn add react-redux
$ yarn add @reduxjs/toolkit
```

2. Define application's state: `message` in Parent component
3. Define action types and action creators: in `reducers/action`
4. Define reducer: in `reducers`
5. Create the store: in `store`
6. Provide store to App component: in `index.js`

Child1 and its children use "useDispatch()" and send the corresponding transaction to the corresponding reducer. Reducer updates the state at the end of the action according to the incoming action.
So while it is possible to update the message when clicking on child1 and its children, it is not possible for child2 nor its children. Do not hesitate to apply it yourself, you will be able to see the difference by trying it.

## Clone & Download

Press `.` to review editor version.

```
$ git clone https://github.com/eminebozdag/redux-visualization.git
$ cd redux-visualization

$ yarn install
$ yarn start
```
