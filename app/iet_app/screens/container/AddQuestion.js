import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Title, Button, Text} from 'native-base';
import axios from 'axios';
import {Alert} from 'react-native';

export default class InlineLabelExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            question : 'Dummy Question',
        }
    }

     submitRequest = async () => {
       const token = this.props.navigation.getParam('token');
       const username = this.props.navigation.getParam('username');

       axios.post('http://192.168.43.48:8000/api/question/',{
            Authorization : `Token ${token}`,
           'question' : this.state.question,
           'author_Q' : username,
       })
       Alert.alert('Your Question is been added and waiting for an answer')
    }

  render() {
    return (
      <Container>
        <Header>
            <Title style={{paddingTop:15, marginRight:200}}>Ask Question</Title>
        </Header>
        <Content>
          <Form style={{marginTop : 10}}>
            <Item inlineLabel>
              <Label>Question</Label>
              <Input onChangeText = {text => this.setState({question : text})} />
            </Item>
            <Button full style={{marginTop : 35}} onPress = {() => this.submitRequest()}><Text>Ask Question</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}