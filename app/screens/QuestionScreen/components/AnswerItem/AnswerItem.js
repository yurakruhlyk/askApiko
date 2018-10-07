import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { pure } from 'recompose';
import { Ionicons } from '@expo/vector-icons';
import { RootSpinner, Touchable } from '../../../../components';
import { AuthorDetail, Votes } from '../../components';
import { colors } from '../../../../styles';
import s from './styles';

const AnswerItem = ({
  _id,
  description,
  createdAt,
  isLoading,
  isError,
  onRetrySendAnswerToQuestion,
}) => (
  <View>
    <View style={s.topContainer}>
      <View style={s.controllerPanel}>
        <View style={[
          isLoading && s.opacity,
          isError && s.opacity,
        ]}
        >
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
        <View style={s.status}>

          {
            isLoading
          &&
          <RootSpinner />
        }

          {
            isError
          &&
          <Touchable
            useOpacity
            borderless
            onPress={() => onRetrySendAnswerToQuestion(_id)}
          >
            <Ionicons
              color={colors.accent}
              size={32}
              name="md-refresh"
            />
          </Touchable>
        }

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
  _id: T.string,
  description: T.string,
  createdAt: T.string,
  isLoading: T.bool,
  isError: T.bool,
  onRetrySendAnswerToQuestion: T.func,
};

export default pure(AnswerItem);
