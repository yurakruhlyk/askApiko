import { Asset } from 'expo';

const loadAssets = async () => {
  await Asset.loadAsync([
    require('../../assets/images/logo.png'),
  ]);
};

export default loadAssets;
