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

//class QuestionScreen extends React.Component {
export default class QuestionScreen extends Component {  
  constructor(){
      super();
      this.state = {text: '',
      correctAnswer: null,
      myAnswer: '',
      answerNote: '',
      buttonDisabled:true,
      radioDisabled: false}
      curOptions = [];
      curQuestion = 1;
      answerValidationText = <View style={{flex: 0.1,justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffffff'}}><Text> </Text></View>;
      buttonMe = <Button onPress={() => this.onSubmitAnswer()}
                              title="  Submit Answer  "
                              color="#B99644"
                              accessibilityLabel="Answer a question"
                              disabled = {this.state.buttonDisabled}/>;    
  }

  static navigationOptions = {
    title: 'Questions',
  };

render(){
  return (
    <View style={{backgroundColor: '#ffffff' }}>
      <ScrollView style={{backgroundColor: '#ffffff' }}>
        {this.myRender()}
      </ScrollView>    
    </View>
  );
}
  
myRender() {
    return (
              <View style={{flex: 1}}>
                  <View style={styles.questionContainer}>
                    <Text style={styles.questions}>
                       {realm.objectForPrimaryKey('AnotherQuestion', curQuestion).question}
                     </Text>
                  </View>
                  <View style={styles.optionsContainer}>
                      <RadioGroup size={0}
                                  thickness={0}
                                  color='#ffffff'
                                  highlightColor='#ccc8b9'
                                  onSelect = {(index, value) => this.onSelect(index, value)}>

                          <RadioButton value={'A'} disabled = {this.state.radioDisabled} >
                            
                            <Text style={styles.options}><Text style={{fontWeight: 'bold'}}>A. </Text>{realm.objectForPrimaryKey('AnotherQuestion', curQuestion).options[0].option}</Text>
                          </RadioButton>
                   
                          <RadioButton value={'B'} disabled = {this.state.radioDisabled}>
                            <Text style={styles.options}><Text style={{fontWeight: 'bold'}}>B. </Text>{realm.objectForPrimaryKey('AnotherQuestion', curQuestion).options[1].option}</Text>
                          </RadioButton>
                   
                          <RadioButton value={'C'} disabled = {this.state.radioDisabled}>
                            <Text style={styles.options}><Text style={{fontWeight: 'bold'}}>C. </Text>{realm.objectForPrimaryKey('AnotherQuestion', curQuestion).options[2].option}</Text>
                          </RadioButton>

                          <RadioButton value={'D'} disabled = {this.state.radioDisabled}>
                            <Text style={styles.options}><Text style={{fontWeight: 'bold'}}>D. </Text>{realm.objectForPrimaryKey('AnotherQuestion', curQuestion).options[3].option}</Text>
                          </RadioButton>
                      </RadioGroup>   
                </View>
                <View>
                    {answerValidationText}
                </View>
                <View style={styles.questionContainer}>
                     <Text style={styles.questions}>{this.state.answerNote}</Text>
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffffff', paddingBottom: 10}}>
                    {buttonMe}
                </View>
           </View>
    );
  }

  onSelect(index, value){
    this.setState({myAnswer: `${value}`, buttonDisabled : false});
    buttonMe = <Button onPress={() => this.onSubmitAnswer()}
                              title="  Submit Answer  "
                              color="#B99644"
                              disabled = {false}
                              accessibilityLabel="Answer a question"
                              />;
  }

  onSubmitAnswer (){
    if(realm.objectForPrimaryKey('AnotherQuestion', curQuestion).optionIsAnswer.optionLabel == this.state.myAnswer){
          text = `You are correct, the answer is ${this.state.myAnswer}`;
          answerValidationText = <View style={styles.answerValidationContainerCorrect}><Text style={styles.answerValidation}>{text}</Text></View>   
    } else { 
          text = `You have selected ${this.state.myAnswer}, the correct answer is ${realm.objectForPrimaryKey('AnotherQuestion', curQuestion).optionIsAnswer.optionLabel}`; 
          answerValidationText = <View style={styles.answerValidationContainerWrong}><Text style={styles.answerValidation}>{text}</Text></View> 
    }
    
    this.setState({answerNote: realm.objectForPrimaryKey('AnotherQuestion', curQuestion).explanation, radioDisabled:true});

    buttonMe = <Button onPress={() => this.NextQuestion()}
                              title="  Next Question  "
                              color="#B99644"
                              disabled = {false}
                              accessibilityLabel="Answer a question"/>;
  }

  NextQuestion (){
    if(realm.objectForPrimaryKey('AnotherQuestion', curQuestion).optionIsAnswer.optionLabel == this.state.myAnswer){
          text = `You are correct, the answer is ${this.state.myAnswer}`;
          answerValidationText = <View style={styles.answerValidationContainerCorrect}><Text style={styles.answerValidation}>{text}</Text></View>   
    } else { 
          text = `You have selected ${this.state.myAnswer}, the correct answer is ${realm.objectForPrimaryKey('AnotherQuestion', curQuestion).optionIsAnswer.optionLabel}`; 
          answerValidationText = <View style={styles.answerValidationContainerWrong}><Text style={styles.answerValidation}>{text}</Text></View> 
    }
    
    this.setState({text: '', correctAnswer: null, myAnswer: '', answerNote: '', buttonDisabled:true,radioDisabled: false});
      curOptions = [];
      answerValidationText = <View style={{flex: 0.1,justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffffff'}}><Text> </Text></View>;
      buttonMe = <Button onPress={() => this.onSubmitAnswer()}
                              title="  Submit Answer  "
                              color="#B99644"
                              accessibilityLabel="Answer a question"
                              disabled = {true}/>;

    curQuestion = curQuestion + 1;
  }
}

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
    paddingLeft: 10,
    paddingTop: 10
  },
  questions: {
    fontSize: 16,
    textAlign: 'left',
    color: '#333333',
    //marginBottom: 5,
    padding: 5,
  },
  optionsContainer: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 3,
  },
  options: {
    fontSize: 16,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 2,
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
    fontSize: 16,
    fontWeight: 'normal',
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