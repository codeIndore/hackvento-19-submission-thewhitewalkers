import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Title, Button} from 'native-base';
import {Text} from 'react-native';
export default class ProfileTwo extends Component {
  render() {
    return (
      <Container>
        <Header><Title style={{paddingTop : 15}}>Profile-I</Title></Header>
        <Content>
          <Form>
            <Item fixedLabel style={{marginTop : 20}}>
              <Label>Linked Profile</Label>
              <Input />
            </Item>
            <Item fixedLabel last style={{marginTop : 20}}>
              <Label>Github Profile</Label>
              <Input />
            </Item>
            <Item fixedLabel last style={{marginTop : 20}}>
              <Label>Insta Profile</Label>
              <Input />
            </Item>
            
            <Button full style={{marginTop : 45}}
                onPress = {() => this.props.navigation.navigate('Home')}
            ><Text style={{color:'white'}}>Next</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}