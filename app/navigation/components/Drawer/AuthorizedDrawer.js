import React from 'react';
import T from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, Logo } from '../../../components';
import { authOperations } from '../../../modules/auth';
import { LinkingService, AlertService } from '../../../services';
import screens from '../../../constants/screens';
import { globalStyles } from '../../../styles';

const AuthorizedDrawer = (props) => {
  const items = [
    { label: 'Home', key: screens.Home, iconName: 'ios-chatbubbles' },
    { label: 'Search', key: screens.Search, iconName: 'ios-search' },
    { label: 'Create Question', key: screens.CreateQuestion, iconName: 'ios-add-circle' },
    { label: 'Profile', key: screens.Profile, iconName: 'ios-person' },
    { separator: true, key: 'separator' },
    { label: 'About Us', key: screens.AboutUs, iconName: 'ios-information-circle' },
    {
      label: 'Terms & Conditions',
      key: 'Terms',
      onPress: () => LinkingService.openTerms(),
      iconName: 'ios-document',
    },
    { separator: true, key: 'separator' },
    {
      label: 'Sign Out',
      key: 'SignOut',
      onPress: () => AlertService.signOut(props.signOut),
      iconName: 'md-log-in',
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView
        style={globalStyles.fillAll}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Logo borderBottom drawer />

        {items.map((item, index) => (
          <DrawerItem
            key={`${item.key}-${index}`} // eslint-disable-line
            {...props}
            item={item}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

AuthorizedDrawer.propTypes = {
  navigation: T.shape({
    navigate: T.func,
  }),
  signOut: T.func,
};

const mapDispatchToProps = {
  logout: authOperations.logout,
};

const enhancer = compose(
  connect(null, mapDispatchToProps),

  withHandlers({
    signOut: props => () => props.logout(),
  })
);

export default enhancer(AuthorizedDrawer);
