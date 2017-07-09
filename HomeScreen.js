
import React, { Component } from 'react';
import {  AppRegistry,
          StyleSheet,
          Text,
          Button,
          View,
          TouchableWithoutFeedback} from 'react-native';
import { StackNavigator } from 'react-navigation';

//class HomeScreen extends React.Component {
export default class HomeScreen extends Component {  

  static navigationOptions =  {	title: 'Home',};
  
  render() {
  	const { navigate } = this.props.navigation;
     
       return (<View style={{flex: 1}}>
            	    <View style={styles.container}>
            	       <Text style={styles.welcome}>
            	         Count of AnotherQuestion in Realm: {realm.objects('AnotherQuestion').length}
            	       </Text>
            	       <Text style={styles.welcome}>
            	         Count of Options in Realm: {realm.objects('Option').length}
            	       </Text>
                       <Text style={styles.welcome}>
            	         Count of QuestionTests in Realm: {realm.objects('QuestionTest').length}
            	       </Text>
                       <View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffffff', padding: 20}}>
                            <Button  onPress={() => this.onPressLearnMore()}
                                        title="Update Database"
                                        color="#e74c3c"
                                        accessibilityLabel="Answer a question"/>
                        </View>
              			<View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#ffffff', padding: 20}}>
                              <Button onPress={() => navigate('Question')}
                    			  title="Question"
                    			  color="#B99644"
                    			  accessibilityLabel="Answer a question"/>
                    </View>
            	    </View>
        	     </View>
		);
 }

onPressLearnMore (){

    realm.write(() => {
        
        let allQuestionTests = realm.objects('AnotherQuestion');
        realm.delete(allQuestionTests);

        let allOptions = realm.objects('Option');
        realm.delete(allOptions);

        console.log("Deleted Successfully")

        /*realm.create('Option', {optionId:    1,
                                  questionId: 1,
                                  sequence: 0,
                                  optionLabel:'A',
                                  option: 'Critical path diagrams',
                                  isAnswer: false,
                                  createDate: new Date(2000, 1, 1)});
        realm.create('Option', {optionId:    2,
                                  questionId: 1,
                                  sequence: 1,
                                  optionLabel:'B',
                                  option: 'Program evaluation review technique (PERT) diagrams',
                                  isAnswer: false,
                                  createDate: new Date(2000, 1, 1)});
        realm.create('Option', {optionId:    3,
                                  questionId: 1,
                                  sequence: 2,
                                  optionLabel:'C',
                                  option: 'Function point analysis (FPA)',
                                  isAnswer: true,
                                  createDate: new Date(2000, 1, 1)});
        realm.create('Option', {optionId:    4,
                                  questionId: 1,
                                  sequence: 3,
                                  optionLabel:'D',
                                  option: 'Gantt charts',
                                  isAnswer: false,
                                  createDate: new Date(2000, 1, 1)});

        realm.create('AnotherQuestion', {questionId: 1, 
                                    question: 'Which of the following is MOST relevant to an IS auditor evaluating how the project manager has monitored the progress of the project?', 
                                    explanation: 'A Critical path diagrams are used to determine the critical path for the project that represents the shortest possible time required for completing the project. PERT diagrams are a critical path method (CPM) technique in which three estimates (as opposed to one) of timelines required to complete activities are used to determine the critical path.FPA is a technique used to determine the size of a development task, based on the number of function points. Gantt charts help to identify activities that have been completed early or late through comparison to a baseline. Progress of the entire project can be read from the Gantt chart to determine whether the project is behind, ahead of or on schedule.', 
                                    questionNumber: 1,
                                    optionIsAnswer: realm.objectForPrimaryKey('Option', 3),
                                    options: [realm.objectForPrimaryKey('Option', 1),
                                              realm.objectForPrimaryKey('Option', 2),
                                              realm.objectForPrimaryKey('Option', 3),
                                              realm.objectForPrimaryKey('Option', 4)], 
                                    createDate: new Date(2000, 1, 1)});*/

       realm.create('Option', {optionId: 1,questionId: 1,sequence: 0,optionLabel:'A', option: 'Critical path diagrams', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 2,questionId: 1,sequence: 1,optionLabel:'B', option: 'Program evaluation review technique (PERT) diagrams', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 3,questionId: 1,sequence: 2,optionLabel:'C', option: 'Function point analysis (FPA)', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 4,questionId: 1,sequence: 3,optionLabel:'D', option: 'Gantt charts', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 1, question: 'Which of the following is MOST relevant to an IS auditor evaluating how the project manager has monitored the progress of the project?', explanation: 'A. Critical path diagrams are used to determine the critical path for the project that represents the shortest possible time required for completing the project. B. PERT diagrams are a critical path method (CPM) technique in which three estimates (as opposed to one) of timelines required to complete activities are used to determine the critical path. C. FPA is a technique used to determine the size of a development task, based on the number of function points. D. Gantt charts help to identify activities that have been completed early or late through comparison to a baseline. Progress of the entire project can be read from the Gantt chart to determine whether the project is behind, ahead of or on schedule.', questionNumber: 1, optionIsAnswer: realm.objectForPrimaryKey('Option', 4),options: [realm.objectForPrimaryKey('Option', 1), realm.objectForPrimaryKey('Option', 2), realm.objectForPrimaryKey('Option', 3), realm.objectForPrimaryKey('Option', 4)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 5,questionId: 2,sequence: 0,optionLabel:'A', option: 'parent bank is authorized to serve as a service provider.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 6,questionId: 2,sequence: 1,optionLabel:'B', option: 'subsidiary can join as a co-owner of this payment system.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 7,questionId: 2,sequence: 2,optionLabel:'C', option: 'technical platforms between the two companies are interoperable.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 8,questionId: 2,sequence: 3,optionLabel:'D', option: 'security features are in place to segregate subsidiary trades.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 2, question: 'An IS auditor is reviewing a project to implement a payment system between a parent bank and a subsidiary. The IS auditor should FIRST verify that the:', explanation: 'Even between parent and subsidiary companies, contractual agreement(s) should be in place to conduct shared services. This is particularly important in highly regulated organizations such as banking. Unless granted to serve as a service provider, it may not be legal for the bank to extend business to the subsidiary companies. Technical aspects should always be considered; however, this can be initiated after confirming that the parent bank can serve as a service provider. Security aspects are another important factor; however, this should be considered after confirming that the parent bank can serve as a service provider. The ownership of the payment system is not as important as the legal authorization to operate the system.', questionNumber: 2, optionIsAnswer: realm.objectForPrimaryKey('Option', 5),options: [realm.objectForPrimaryKey('Option', 5), realm.objectForPrimaryKey('Option', 6), realm.objectForPrimaryKey('Option', 7), realm.objectForPrimaryKey('Option', 8)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 9,questionId: 3,sequence: 0,optionLabel:'A', option: 'probability of the outage.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 10,questionId: 3,sequence: 1,optionLabel:'B', option: 'B. type of outage.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 11,questionId: 3,sequence: 2,optionLabel:'C', option: 'duration of the outage.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 12,questionId: 3,sequence: 3,optionLabel:'D', option: 'cause of the outage.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 3, question: 'The activation of an enterprise\'s business continuity plan should be based on predetermined criteria that address the:', explanation: 'The initiation of a business continuity plan (action) should primarily be based on the maximum period for which a business function can be disrupted before the disruption threatens the achievement of organizational objectives.', questionNumber: 3, optionIsAnswer: realm.objectForPrimaryKey('Option', 11),options: [realm.objectForPrimaryKey('Option', 9), realm.objectForPrimaryKey('Option', 10), realm.objectForPrimaryKey('Option', 11), realm.objectForPrimaryKey('Option', 12)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 13,questionId: 4,sequence: 0,optionLabel:'A', option: 'Implement integrity constraints in the database.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 14,questionId: 4,sequence: 1,optionLabel:'B', option: 'B. Log all table update transactions.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 15,questionId: 4,sequence: 2,optionLabel:'C', option: 'C. Implement before-and-after image reporting.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 16,questionId: 4,sequence: 3,optionLabel:'D', option: 'Use tracing and tagging.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 4, question: 'An IS auditor finds out-of-range data in some tables of a database. Which of the following controls should the IS auditor recommend to avoid this situation?', explanation: 'Implementing integrity constraints in the database is a preventive control, because data are checked against predefined tables or rules preventing any undefined data from being entered. Logging all table update transactions and implementing before-and-after image reporting are detective controls that would not help avoid the situation. Tracing and tagging are used to test application systems and controls, and could not prevent out-of-range data.', questionNumber: 4, optionIsAnswer: realm.objectForPrimaryKey('Option', 13),options: [realm.objectForPrimaryKey('Option', 13), realm.objectForPrimaryKey('Option', 14), realm.objectForPrimaryKey('Option', 15), realm.objectForPrimaryKey('Option', 16)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 17,questionId: 5,sequence: 0,optionLabel:'A', option: 'Establish performance baselines.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 18,questionId: 5,sequence: 1,optionLabel:'B', option: 'Gather performance data.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 19,questionId: 5,sequence: 2,optionLabel:'C', option: 'Minimize errors.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 20,questionId: 5,sequence: 3,optionLabel:'D', option: 'Optimize performance.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 5, question: 'Which of the following is the PRIMARY objective of an IT performance measurement process?', explanation: 'An IT performance measurement process can be used to optimize performance, measure and manage products/services, assure accountability and make budget decisions. Minimizing errors is an aspect of performance, but not the primary objective of performance management. Gathering performance data is a phase of the IT measurement process and would be used to evaluate the performance against previously established performance baselines.', questionNumber: 5, optionIsAnswer: realm.objectForPrimaryKey('Option', 20),options: [realm.objectForPrimaryKey('Option', 17), realm.objectForPrimaryKey('Option', 18), realm.objectForPrimaryKey('Option', 19), realm.objectForPrimaryKey('Option', 20)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 21,questionId: 6,sequence: 0,optionLabel:'A', option: 'To provide assurance to stakeholders that business operations will continue in the event of disaster', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 22,questionId: 6,sequence: 1,optionLabel:'B', option: 'To establish an alternate site for IT services to meet predefined recovery time objectives (RTOs)', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 23,questionId: 6,sequence: 2,optionLabel:'C', option: 'To manage risk while recovering from an event that adversely affected operations', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 24,questionId: 6,sequence: 3,optionLabel:'D', option: 'To meet the regulatory compliance requirements in the event of natural disaster', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 6, question: 'Which of the following is the PRIMARY objective of the business continuity plan (BCP) process?', explanation: 'A. The BCP in itself does not provide assurance of continuing operations; however, it helps the organization to respond to disruptions to critical business processes. B. Establishment of an alternate site is more relevant to disaster recovery than the BCP. C. The BCP process primarily focuses on managing and mitigating risk during recovery of operations due to an event that affected operations. D. The regulatory compliance requirements may help establish the RTO requirements.', questionNumber: 6, optionIsAnswer: realm.objectForPrimaryKey('Option', 23),options: [realm.objectForPrimaryKey('Option', 21), realm.objectForPrimaryKey('Option', 22), realm.objectForPrimaryKey('Option', 23), realm.objectForPrimaryKey('Option', 24)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 25,questionId: 7,sequence: 0,optionLabel:'A', option: 'confidentiality and integrity.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 26,questionId: 7,sequence: 1,optionLabel:'B', option: 'integrity and nonrepudiation.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 27,questionId: 7,sequence: 2,optionLabel:'C', option: 'security and nonrepudiation.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 28,questionId: 7,sequence: 3,optionLabel:'D', option: 'confidentiality and nonrepudiation.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 7, question: 'Applying a digital signature to data traveling in a network provides:', explanation: 'The process of applying a mathematical algorithm to the data that travel in the network and placing the results of this operation with the hash data is used for controlling data integrity, since any unauthorized modification to this data would result in a different hash. The application of a digital signature would accomplish the nonrepudiation of the delivery of the message. The term security is a broad concept and not a specific one. In addition to a hash and a digital signature, confidentiality is applied when an encryption process exists.', questionNumber: 7, optionIsAnswer: realm.objectForPrimaryKey('Option', 26),options: [realm.objectForPrimaryKey('Option', 25), realm.objectForPrimaryKey('Option', 26), realm.objectForPrimaryKey('Option', 27), realm.objectForPrimaryKey('Option', 28)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 29,questionId: 8,sequence: 0,optionLabel:'A', option: 'User management', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 30,questionId: 8,sequence: 1,optionLabel:'B', option: 'Project steering committee', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 31,questionId: 8,sequence: 2,optionLabel:'C', option: 'Senior management', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 32,questionId: 8,sequence: 3,optionLabel:'D', option: 'Quality assurance staff', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 8, question: 'Who should review and approve system deliverables as they are defined and accomplished to ensure the successful completion and implementation of a new business system application?', explanation: 'User management assumes ownership of the project and resulting system, allocates qualified representatives to the team, and actively participates in system requirements definition, acceptance testing and user training. User management should review and approve system deliverables as they are defined and accomplished or implemented. A project steering committee provides overall direction, ensures appropriate representation of the major stakeholders in the project\'s outcome, reviews project progress regularly and holds emergency meetings when required. A project steering committee is ultimately responsible for all deliverables, project costs and schedules. Senior management demonstrates commitment to the project and approves the necessary resources to complete the project. This commitment from senior management helps ensure involvement by those who are needed to complete the project. Quality assurance staff review results and deliverables within each phase, and at the end of each phase confirm compliance with requirements. The timing of reviews depends on the system development life cycle, the impact of potential deviation methodology used, the structure and magnitude of the system and the impact of potential deviation.', questionNumber: 8, optionIsAnswer: realm.objectForPrimaryKey('Option', 29),options: [realm.objectForPrimaryKey('Option', 29), realm.objectForPrimaryKey('Option', 30), realm.objectForPrimaryKey('Option', 31), realm.objectForPrimaryKey('Option', 32)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 33,questionId: 9,sequence: 0,optionLabel:'A', option: 'the business continuity plan (BCP).', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 34,questionId: 9,sequence: 1,optionLabel:'B', option: 'a user training program.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 35,questionId: 9,sequence: 2,optionLabel:'C', option: 'a test and exercise plan.', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 36,questionId: 9,sequence: 3,optionLabel:'D', option: 'a business continuity strategy.', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 9, question: 'An organization completed a business impact analysis (BIA) as part of business continuity planning. The NEXT step in the process is to develop:', explanation: 'A business continuity strategy is the next phase because it identifies the best way to recover. The criticality of the business process, the cost, the time required to recover and security must be considered during this phase. The recovery strategy and plan development precede the test plan. Training can only be developed once the BCP is in place. A strategy must be determined before the BCP is developed.', questionNumber: 9, optionIsAnswer: realm.objectForPrimaryKey('Option', 36),options: [realm.objectForPrimaryKey('Option', 33), realm.objectForPrimaryKey('Option', 34), realm.objectForPrimaryKey('Option', 35), realm.objectForPrimaryKey('Option', 36)], createDate: new Date(2017, 1, 1)});
realm.create('Option', {optionId: 37,questionId: 10,sequence: 0,optionLabel:'A', option: 'Electromagnetic interference (EMI)', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 38,questionId: 10,sequence: 1,optionLabel:'B', option: 'Attenuation', isAnswer: true, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 39,questionId: 10,sequence: 2,optionLabel:'C', option: 'Cross-talk', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('Option', {optionId: 40,questionId: 10,sequence: 3,optionLabel:'D', option: 'Dispersion', isAnswer: false, createDate: new Date(2017, 1, 1)});realm.create('AnotherQuestion', {questionId: 10, question: 'An installed Ethernet cable run in an unshielded twisted pair (UTP) network is more than 100 meters long. Which of the following could be caused by the length of the cable?', explanation: 'Attenuation is the weakening of signals during transmission. When the signal becomes weak, it begins to read a 1 for a 0, and the user may experience communication problems. UTP faces attenuation around 100 meters. EMI is caused by outside electromagnetic waves affecting the desired signals, which is not the case here. Cross-talk has nothing to do with the length of the UTP cable.', questionNumber: 10, optionIsAnswer: realm.objectForPrimaryKey('Option', 38),options: [realm.objectForPrimaryKey('Option', 37), realm.objectForPrimaryKey('Option', 38), realm.objectForPrimaryKey('Option', 39), realm.objectForPrimaryKey('Option', 40)], createDate: new Date(2017, 1, 1)});
       
  });
		
    this.forceUpdate();
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
});

