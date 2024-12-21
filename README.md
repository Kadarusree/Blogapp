Required React Navigation Installation Update
1. React Navigation v4 Installation
1. Install React Navigation

npm install react-navigation@4.4.4 --legacy-peer-deps

or

yarn add react-navigation

2. Install Dependencies

npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

4. Find the babel.config.js file and add the following line to the return:

    plugins: ["react-native-reanimated/plugin"],

Updated babel.config.js:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

2. Update Imports
Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
Errors?
If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)

Then, run npm install --legacy-peer-deps and then npm start.

React Navigation v4 Docs:
https://reactnavigation.org/docs/4.x/getting-started
