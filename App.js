import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createAppContainer, createStackNavigator } from "react-navigation"
import { SafeAreaView } from "react-navigation";
import mainReducer from "./src/store/reducers/MainReducer";
import JobsListScreen from './src/containers/JobsListScreen/index';
import JobDetailsScreen from './src/containers/JobDetailsScreen/index';
import BLEDevicesScreen from './src/containers/BLEDevicesScreen/index';

const MainNavigator = createAppContainer(
  createStackNavigator({
    JobsListScreen: {
      screen: JobsListScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Job List',
      }),
    },
    JobDetailsScreen: {
      screen: JobDetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Job Skills',
      }),
    },
    BLEDevicesScreen: {
      screen: BLEDevicesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'BLE Devices',
      }),
    }
  })
)

const store = createStore(mainReducer, applyMiddleware(ReduxThunk));
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
