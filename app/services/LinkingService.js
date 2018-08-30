import { Linking, Alert } from 'react-native';
import i18n from '../i18n';
import { TERMS_LINK, PRIVACY_LINK } from '../constants/urls';

class LinkingService {
  openUrl(url) {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          return this._showErrorAlert();
        }

        return Linking.openURL(url);
      })
      .catch(() => this._showErrorAlert());
  }

  openTerms() {
    this.openUrl(TERMS_LINK);
  }

  openPrivacy() {
    this.openUrl(PRIVACY_LINK);
  }

  _showErrorAlert() { // eslint-disable-line
    Alert.alert(
      i18n.t('errors.somethingWrong'),
      i18n.t('errors.openLinkError'),
    );
  }
}

const linkingService = new LinkingService();

export default linkingService;
