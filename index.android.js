/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry,
          StyleSheet,
          Text,
          Button,
          View,
          TouchableWithoutFeedback,
          ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import HomeScreen from './HomeScreen';
import QuestionScreen from './QuestionScreen';

const Realm = require('realm');

const QuestionSchema = {
      name: 'Question',
      primaryKey: 'questionId',
      properties: { questionId:    'int',    // primary key
                    question: 'string',
                    explanation: 'string',
                    questionNumber: 'int',
                    options: 'Option',
                    createDate: 'date'}
};

const OptionSchema = {
      name: 'Option',
      primaryKey: 'optionId',
      properties: { optionId:    'int',    // primary key
                    questionId: 'int',
                    sequence: 'int',
                    optionLabel:'string',
                    option: 'string',
                    isAnswer: 'bool',
                    createDate: 'date'}
};

const QuestionTestSchema = {
      name: 'QuestionTest',
      primaryKey: 'questionId',
      properties: { questionId:    'int',    // primary key
                    question: 'string',
                    explanation: 'string',
                    questionNumber: 'int',
                    options: {type: 'list', objectType: 'Option', default: []},
                    createDate: 'date'}
};

const AnotherQuestionSchema = {
      name: 'AnotherQuestion',
      primaryKey: 'questionId',
      properties: { questionId:    'int',    // primary key
                    question: 'string',
                    explanation: 'string',
                    questionNumber: 'int',
                    optionIsAnswer: 'Option',
                    options: {type: 'list', objectType: 'Option', default: []},
                    createDate: 'date'}
};

let realm = new Realm({schema: [QuestionSchema, QuestionTestSchema, OptionSchema, AnotherQuestionSchema]});

const styles = StyleSheet.create({
  primaryDeep: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#00338D',
  },
  appName: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'arial',
    fontStyle: 'italic',
    textAlign: 'left',
    margin: 10,
  },
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  questionContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingLeft: 5,
  },
  questions: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333333',
    //marginBottom: 5,
    padding: 10,
  },
  optionsContainer: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  options: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  answerNoteContainer: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  answerNote: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333333',
    padding: 5,
  },
answerValidationContainerDefault: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 5,
},
answerValidationContainerWrong: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#BC0000',
    padding: 5,
  },
answerValidationContainerCorrect: {
    flex: 5,
    justifyContent: 'center',
    backgroundColor: '#009644',
    padding: 5,
  },
  answerValidation: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});

class MyAppText extends Component {
  render() {    
      return(<Text style={styles.welcome}>
        {this.props.children}
      </Text>);
  }
}

const Test = StackNavigator ({ Home: {screen: HomeScreen}, Question: {screen: QuestionScreen},});

AppRegistry.registerComponent('Test', () => Test);


