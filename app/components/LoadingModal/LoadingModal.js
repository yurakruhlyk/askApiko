import React from 'react';
import T from 'prop-types';
import { View, Text, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../styles';
import s from './styles';

const LoadingModal = ({
  loadingText,
  isVisible,
}) => (
  <Modal
    style={s.modal}
    backdropOpacity={0.4}
    isVisible={isVisible}
    animationIn="zoomIn"
    animationOut="zoomOut"
  >
    <View style={s.container}>
      <ActivityIndicator size="large" color={colors.loadingIndicator} />
      {!!loadingText && <Text style={s.text}>{loadingText}</Text>}
    </View>
  </Modal>
);

LoadingModal.propTypes = {
  isVisible: T.bool,
  loadingText: T.string,
};

export default LoadingModal;
