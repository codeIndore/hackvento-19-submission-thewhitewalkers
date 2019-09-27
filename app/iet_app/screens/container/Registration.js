import React from 'react';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import axios from 'axios';
import { Text } from 'react-native';
import { thisExpression } from '@babel/types';

export default class FormExample extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            email : "",
        }
    }

    registerRequest = () => {
        this.props.navigation.navigate('ProfileOne', {
          username : this.state.username,
          email : this.state.email,
          password : this.state.password,
        });
    }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" 
              onChangeText = {(text) => {
                    this.setState({username : text})
              }}
              />
            </Item>
            <Item last>
              <Input placeholder="Password" 
                onChangeText = {(text) => {
                    this.setState({password:text})
                }}
              />
            </Item>
            <Item last>
              <Input placeholder="Your College Id"
              onChangeText = {(text) => {
                  this.setState({email : text})
              }}
              />
            </Item>
            <Button full onPress = {this.registerRequest}><Text style={{color : 'white'}}>Register</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}