import { Share } from 'react-native';

class ShareService {
  share(title, message) { // eslint-disable-line
    Share.share({
      title,
      message,
    });
  }
}

const shareService = new ShareService();

export default shareService;
