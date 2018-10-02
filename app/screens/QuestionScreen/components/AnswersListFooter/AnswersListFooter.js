import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import { Button, Input } from '../../../../components';
import s from './styles';

const AnswersListFooter = ({ isAuthorized, navigateToSignUp }) => (
  <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
    <View style={s.footer}>
      {
        isAuthorized
          ?
            <View>
              <Input
                placeholder="Type your answer here…"
                style={s.input}
                multiline
              />
              <View style={s.buttonContainer}>
                <Button title="Submit Answer" />
              </View>
            </View>
          :
            <View>
              <View style={s.buttonContainer}>
                <Button
                  title="Sign Up to Submit Answer"
                  onPress={navigateToSignUp}
                />
              </View>
            </View>
      }
    </View>
  </KeyboardAvoidingView>
);

AnswersListFooter.propTypes = {
  isAuthorized: T.bool,
  navigateToSignUp: T.func,
};

export default AnswersListFooter;
