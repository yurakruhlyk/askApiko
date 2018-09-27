import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { pure } from 'recompose';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../../../../components';
import { AuthorDetail, Votes } from '../../components';
import { colors } from '../../../../styles';
import s from './styles';

const AnswerItem = ({ description, createdAt }) => (
  <View>
    <View style={s.topContainer}>
      <View style={s.controllerPanel}>
        <Votes negative count={51} />
        <View>
          <Touchable useOpacity borderless onPress={() => {}}>
            <View>
              <Ionicons
                color={colors.answerItem.icon}
                size={28}
                name="md-checkmark-circle-outline"
              />
            </View>
          </Touchable>
        </View>
      </View>
      <View style={s.messageContainer}>
        <Text style={s.messageText}>
          {description}
        </Text>
      </View>
    </View>
    <AuthorDetail date={createdAt} />
  </View>
);

AnswerItem.propTypes = {
  description: T.string,
  createdAt: T.string,
};

export default pure(AnswerItem);
