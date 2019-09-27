import React from 'react';
import {Text, View, Alert} from 'react-native';
import {Container, Content , Header, Title, Form, Textarea, Button, H2} from 'native-base';
import axios from 'axios';

export default class AddAnswer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            answer : '',
        }
    }

    submitAnswer = async () => {
        const question_id = this.props.navigation.getParam('question_id');
        const token = this.props.navigation.getParam('token');
        const username = this.props.navigation.getParam('username');
        await axios.post(`http://192.168.43.48:8000/api/answers/${question_id}/`, {
            Authorization : `Token ${token}`,
            "authorA" : username,
            "answer" : this.state.answer,
            "question_id":question_id,
        })
        Alert.alert("Your answer has been added successfully !")
        this.props.navigation.navigate('Home');
    }

    render(){
        const ques = this.props.navigation.getParam('question');
        return(
            <View>
                <Header><Title style={{paddingTop : 15}}>Add Answer</Title></Header>
                <H2 style={{marginBottom :35, marginTop : 25, paddingLeft : 10}}>{ques}</H2>
                <Form>
                    <Textarea 
                    onChangeText = {(text) => this.setState({answer : text})}
                    rowSpan={5} bordered placeholder="Your Answer" />
                </Form>

                <Button 
                style={{marginTop : 45}} 
                onPress = {this.submitAnswer}
                full><Text style={{color : "white"}}>Post Answer</Text></Button>
            </View>

        )
    }
}