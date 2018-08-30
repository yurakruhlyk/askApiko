import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerItem, Logo } from '../../../components';
import screens from '../../../constants/screens';
import { LinkingService } from '../../../services';
import { globalStyles } from '../../../styles';

const UnauthorizedDrawer = (props) => {
  const items = [
    { label: 'Home', key: screens.Home, iconName: 'ios-chatbubbles' },
    { label: 'Search', key: screens.Search, iconName: 'ios-search' },
    { label: 'About Us', key: screens.AboutUs, iconName: 'ios-information-circle' },
    {
      label: 'Terms & Conditions',
      key: 'Terms',
      onPress: () => LinkingService.openTerms(),
      iconName: 'ios-document',
    },
    { separator: true, key: 'separator' },
    { label: 'Sign Up', key: screens.Auth, iconName: 'md-log-in' },
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

export default UnauthorizedDrawer;
