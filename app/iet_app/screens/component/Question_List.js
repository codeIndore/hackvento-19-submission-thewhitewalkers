import React, { Component } from "react";
import { Container, Header, Card, CardItem, Text, Body, H3, Title, Right, Icon, Button, Left } from "native-base";
import {FlatList, View,  ActivityIndicator, TouchableOpacity, Alert} from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from "axios";
import Footer from '../component/Footer';


class Question_List extends Component {

    static navigationOptions = {
        title : 'Questions'
    };

    constructor(props){
        super(props);
        this.state = {
            loading : true,
            data : [],
            token : '',
            username : '',
        };
        
    }

componentDidMount(){

    const username = this.props.navigation.getParam('username')
    this.setState({
        username : username
    })
    this.focusListener = this.props.navigation.addListener('willFocus', () => {
        this.fetchData();
    })
  }


  fetchData = async () => {
    token = this.props.navigation.getParam('token');
    
    await axios.get("http://192.168.43.48:8000/api/question/",{
        Authorization : `Token ${token}`,
    })
    .then(res => this.setState({
        loading : false, 
        data : res.data,
        token : token,
    }))
    .catch(err => console.log(err));
  }

  render(){
      const {navigate} = this.props.navigation;
      const username = this.props.navigation.getParam('username');
    if(this.state.loading === true){
        return( 
          <View> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )}
      return(
          <Container>
                <Header>
                    <Title style={{paddingTop:15, marginRight:200}}>Questions</Title>
                <Right style={{marginRight : 10}}><TouchableOpacity
                onPress = {() => navigate('SearchQuestion', {
                    fullData : this.state.data,
                })}
                >
                   <Icon name = 'search' style={{color : 'white', fontSize : 30}} /></TouchableOpacity></Right>

                <Right><TouchableOpacity
                onPress = {() => navigate('AddQuestion', {
                    username : username
                })}
                >
                   <Icon name = 'pizza' style={{color : 'white', fontSize : 30}} /></TouchableOpacity></Right>
                </Header>
          <FlatList 
            data = {this.state.data}
            renderItem = {({item}) => (
                     <TouchableOpacity
                     onPress = {() => navigate('ViewAnswer', {
                         question : item.question,
                         question_id : item.id,
                         tok : this.state.token,
                         username : username,
                     })
                    }>                  
                     <Card>
                         <CardItem header>
                             <Text>{item.author_Q}</Text>
                         </CardItem>
                         <CardItem>
                             <Body>
                                 <H3>
                                     {item.question}
                                 </H3>
                             </Body>
                         </CardItem>
                     </Card>
                </TouchableOpacity>
                )}
          />
          </Container>
      )}
}

export default withNavigation(Question_List);
