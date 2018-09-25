import { NavigationActions, StackActions } from 'react-navigation';
// import screens from '../constants/screens';

class NavigationService {
  constructor() {
    this._navigation = null;
  }

  init(navigation) {
    if (this._navigation) {
      return;
    }

    this._navigation = navigation;
  }

  getState() {
    return this._navigation.state;
  }

  resetToScreen(screen) {
    this.resetToStack({ routeName: screen });
  }

  resetToStack({ routeName, action, params }) {
    this._navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            action,
            params,
          }),
        ],
      })
    );
  }

  navigate(route) {
    this._navigation.dispatch(
      typeof route === 'string'
        ? NavigationActions.navigate({ routeName: route })
        : NavigationActions.navigate(route)
    );
  }

  navigateDeep(actions) {
    this._navigation.dispatch(
      actions.reduce(
        (prevAction, action) =>
          NavigationActions.navigate({
            routeName: action.routeName || action,
            params: action.params,
            action: prevAction,
          }),
        undefined
      )
    );
  }

  push(route) {
    this._navigation.dispatch(StackActions.push(route));
  }

  pop(n) {
    this._navigation.dispatch(StackActions.pop({ n }));
  }

  popToTop() {
    this._navigation.dispatch(StackActions.popToTop());
  }

  goBack() {
    this._navigation.dispatch(NavigationActions.back());
  }
}

const navigationService = new NavigationService();

export default navigationService;
