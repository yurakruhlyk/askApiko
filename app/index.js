import React from 'react';
import { View, UIManager, StatusBar } from 'react-native';
import { SplashScreen } from 'expo';
import { Provider } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import store from './store';
import { globalStyles } from './styles';
import { appOperations } from './modules/app';
import { loadAssets, loadFonts } from './utils';
import { isAndroid } from './utils/detectDevice';
import Navigator from './navigation';

if (isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => (
  <Provider store={store}>
    <View style={globalStyles.fillAll}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </View>
  </Provider>
);

const enhance = compose(
  withHandlers({
    asyncJob: () => async () => {
      await Promise.all([
        loadAssets(),
        loadFonts(),
        store.dispatch(appOperations.initialization()),
      ]);
    },
  }),
  lifecycle({
    async componentDidMount() {
      SplashScreen.preventAutoHide();

      try {
        await this.props.asyncJob();
      } catch (err) {
        console.log(err.message);
      } finally {
        SplashScreen.hide();
      }
    },
  })
);

export default enhance(App);
