import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import BlogCreation from "./src/screens/BlogCreation";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show : ShowScreen,
    Create: BlogCreation,
    Edit : EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Index",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
