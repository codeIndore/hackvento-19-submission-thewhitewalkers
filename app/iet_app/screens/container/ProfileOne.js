import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker, Icon, Title, Button, Text, Input } from 'native-base';
import axios from 'axios';
import {Alert} from 'react-native';

export default class ProfileTwo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      year: 'First Year',
      branch : 'CS',
      section : 'A',
      semester : 'I',
      field : 'Web Developer',
      aboutYou : '',
    };
  }
  onValueChange1 = (value) => {
    this.setState({
      year: value
    });
  }

  onValueChange2 = (value) => {
    this.setState({
      branch : value
    });
  }

  onValueChange3 = (value) => {
    this.setState({
      section : value
    });
  }

  onValueChange4 = (value) => {
    this.setState({
      semester : value
    });
  }

  onValueChange5 = (value) => {
    this.setState({
      field : value
    });
  }


  submitRequest = async () => {
    username = this.props.navigation.getParam('username');
    email = this.props.navigation.getParam('email');
    password = this.props.navigation.getParam('password')

    await axios.post('http://192.168.43.48:8000/auth/register/', {
      username : username, 
      password : password,
      email : email,
    })

      await axios.post('http://192.168.43.48:8000/api/profile/', {
      name : username, 
      email : email,
      year : this.state.year,
      branch : this.state.branch,
      section : this.state.section,
      semester : this.state.semester,
      aboutYou : this.state.aboutYou,
      field : this.state.field,
    })

    this.props.navigation.navigate('Login')
    Alert.alert("Done")
  }

  render() {
    return (
      <Container>
        <Header><Title style={{paddingTop : 15}}>Profile</Title></Header>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Year of College"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.year}
                onValueChange={this.onValueChange1}
              >
                <Picker.Item label="First Year" value="First Year" />
                <Picker.Item label="Second Year" value="Second Year" />
                <Picker.Item label="Third Year" value="Third Year" />
                <Picker.Item label="Fourth Year" value="Fourth Year" />
              </Picker>
            </Item>

            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Branch"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.branch}
                onValueChange={this.onValueChange2}
              >
                <Picker.Item label="CS" value="CS" />
                <Picker.Item label="IT" value="IT" />
                <Picker.Item label="Mechanical" value="Mechanical" />
                <Picker.Item label="Civil" value="Civil" />
                <Picker.Item label="TC" value="TC" />
              </Picker>
            </Item>

            
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Section"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.section}
                onValueChange={this.onValueChange3}
              >
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
              </Picker>
            </Item>

            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Section"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.field}
                onValueChange={this.onValueChange5}
              >
                <Picker.Item label="Web Developer" value="Web Developer" />
                <Picker.Item label="Content Writer" value="Content Writer" />
                <Picker.Item label="Poster Designer" value="Poster Designer" />
                <Picker.Item label="Machine Learning" value="Machine Learning" />
                <Picker.Item label="App Developer" value="App Developer" />
                <Picker.Item label="Photographer" value="Photographer" />

              </Picker>
            </Item>

            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Semester"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.semester}
                onValueChange={this.onValueChange4}
              >
                <Picker.Item label="I" value="I" />
                <Picker.Item label="II" value="II" />
                <Picker.Item label="III" value="III" />
                <Picker.Item label="IV" value="IV" />
                <Picker.Item label="V" value="V" />
                <Picker.Item label="VI" value="VI" />
                <Picker.Item label="VII" value="VII" />
                <Picker.Item label="VIII" value="VIII" />
              </Picker>
            </Item>

            <Input value = {this.state.aboutYou} onChangeText ={text => this.setState({aboutYou : text})} placeholder='About You'/>

            <Button full><Text onPress = {this.submitRequest}>Submit</Text></Button>   
          </Form>
        </Content>
      </Container>
    );
  }
}