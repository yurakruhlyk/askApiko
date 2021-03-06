import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import { Button, Input } from '../../../../components';
import s from './styles';

const AnswersListFooter = ({
  isAuthorized,
  navigateToSignUp,
  onChangeMessage,
  message,
  sendAnswerToQuestion,
  isValidMessage,
}) => (
  <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={64}>
    <View style={s.footer}>
      {
        isAuthorized
          ?
            <View>
              <Input
                placeholder="Type your answer here…"
                style={s.input}
                onChange={onChangeMessage}
                value={message}
                multiline
              />
              <View style={s.buttonContainer}>
                <Button
                  title="Submit Answer"
                  onPress={sendAnswerToQuestion}
                  disabled={!isValidMessage}
                />
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
  onChangeMessage: T.func,
  message: T.string,
  sendAnswerToQuestion: T.func,
  isValidMessage: T.bool,
};

export default AnswersListFooter;
