import React, { Component } from 'react';
import { H2, Card, CardItem, Header, Container, Content, Form, Picker, Button, Title} from 'native-base';
import axios from 'axios';
import {ActivityIndicator, View, FlatList, TouchableOpacity, Text} from 'react-native';


export default class SearchName extends Component{

  constructor(props){
    super(props);
    this.state = {
      profile : [],
      selected : 'Web Development'
    }
  }

  async componentDidMount(){
    await axios.get(`http://192.168.43.48:8000/api/profile/Web Developer/`)
    .then(res => this.setState({
      profile : res.data, 
    }) )
    .catch(err => console.log(err));
  }

  handleRequest = async () =>{
    await axios.get(`http://192.168.43.48:8000/api/profile/${this.state.selected}/`)
    .then(res => this.setState({
      profile : res.data, 
    }) )
    .catch(err => console.log(err));
  }

  onValueChange = (value) => {
    this.setState({
      selected: value
    });
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
    <Container>
      <Header><Title>Search</Title></Header>
      <Content>
        <Form>
          <Picker
            full
            mode="dropdown"
            style={{ width: 380 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Web Developer" value="Web Developer" />
            <Picker.Item label="Content Writer" value="Content Writer" />
            <Picker.Item label="Poster Designer" value="Poster Designer" />
            <Picker.Item label="Machine Learning" value="Machine Learning" />
            <Picker.Item label="App Developer" value="App Developer" />
            <Picker.Item label="Photographer" value="Photographer" />

          </Picker>
         
        </Form>
        <Button  onPress = {() => this.handleRequest()} full><Text
          
          style={{color:'#fff'}}>Submit</Text></Button>
        
        <FlatList
        data={this.state.profile}
        renderItem = {({item}) => (
          <TouchableOpacity
          >
            <CardItem header>
              <Button 
                 onPress = {() => navigate('DetailProfile', {
                  username : item.name
                })}
              transparent><H2>{item.name}</H2></Button>
            </CardItem>
          </TouchableOpacity>
        )}
        />
      </Content>
  </Container>
    )}
}