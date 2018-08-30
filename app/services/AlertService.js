import { IntentLauncherAndroid, Linking } from 'expo';
import { Alert } from 'react-native';
import { isAndroid } from '../utils/detectDevice';

class AlertService {
  showAlert(title, subTitle, buttons, options) { // eslint-disable-line
    Alert.alert(title, subTitle, buttons, options);
  }

  showAlertWithTimeout(title, subtitle, timeout) {
    setTimeout(() => this.showAlert(title, subtitle), timeout);
  }

  showAlertPermissions(permissions) {
    this.showAlert(
      'Permissions Required',
      // eslint-disable-next-line max-len
      `This app requires ${permissions} access to function properly. Please go to settings to enable manually.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Settings',
          onPress: () => (isAndroid
            ? IntentLauncherAndroid.startActivityAsync(
              IntentLauncherAndroid.ACTION_MANAGE_APPLICATIONS_SETTINGS,
            )
            : Linking.openURL('app-settings:')),
        },
      ],
    );
  }

  signOut(onPress) {
    this.showAlert(
      'Sign Out',
      'Are you sure?',
      [
        { text: 'Yes', onPress },
        { text: 'No', style: 'cancel' },
      ],
    );
  }
}

const alertService = new AlertService();

export default alertService;
