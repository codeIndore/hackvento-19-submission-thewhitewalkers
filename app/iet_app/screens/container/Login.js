import React from 'react';
import { Container, Header, Content, Form, Item, Input, Title , Button, Toast} from 'native-base';
import {Text, Alert, AyncStorage} from 'react-native';
import axios from 'axios';


export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }

    requestLogin = async () => {
        var token = '';
        await axios.post(`http://192.168.43.48:8000/auth/login/`, {
            'username' : this.state.username,
            'password' : this.state.password
        })
        .then(response => {
            token = response.data.token;
        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        })
        .catch(err => console.log(err));

        if (token === ''){
          Alert.alert("Invalid Credentials !")
        }

        else{
          this.props.navigation.navigate('Choose', {
            token : token,
            username : this.state.username,
        });
        }
       }

  render() {
    return (
      <Container>
        <Header><Title style={{paddingTop : 15}}>Login</Title></Header>
        <Content>
          <Form>
            <Item>
              <Input 
                onChangeText = {(text) => {
                    this.setState({username : text})
                }}
              placeholder="Username" />
            </Item>
            <Item  style={{marginTop : 15}} last>
              <Input 
              onChangeText = {(text) => {
                  this.setState({password : text})
              }}
              placeholder="Password" />
            </Item>

            <Button 
            onPress = {() => this.requestLogin()}
            full style={{marginTop : 35}}><Text style={{color:'white'}}>Login</Text></Button>

            <Button full style={{marginTop : 25}}
            onPress = {() => this.props.navigation.navigate('Registration')}
            ><Text style={{color : 'white'}}>Register</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}