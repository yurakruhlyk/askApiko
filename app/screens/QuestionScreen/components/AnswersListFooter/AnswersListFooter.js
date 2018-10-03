import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import T from 'prop-types';
import { Button, Input } from '../../../../components';
import s from './styles';

const AnswersListFooter = ({
  isAuthorized,
  navigateToSignUp,
  onChangeMessage,
  sendAnswerToQuestion,
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
                multiline
              />
              <View style={s.buttonContainer}>
                <Button
                  title="Submit Answer"
                  onPress={sendAnswerToQuestion}
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
  sendAnswerToQuestion: T.func,
};

export default AnswersListFooter;
