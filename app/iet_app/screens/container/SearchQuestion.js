import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, H3, Card, CardItem, Body} from 'native-base';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
export default class SearchQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {
            fulldata : [],
        }
    }

    async componentDidMount(){
        const data = this.props.navigation.getParam('fullData');
        this.setState({
            fulldata : data,
        })
        this.arrayholder = data;
 }

 searchFilterFunction = text => {
     const newData = this.arrayholder.filter(item => {
         const itemData = `${item.question.toUpperCase()}`;
         const textData = text.toUpperCase();

         return itemData.indexOf(textData) > -1;
     });
     this.setState({fulldata : newData})
 };

  render() {
      const {navigate} = this.props.navigation;
     return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
            onChangeText = {(text) => this.searchFilterFunction(text)}
            autoCorrect = {false}
            placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <FlatList 
        data = {this.state.fulldata}
        renderItem = {({item}) => (
            <TouchableOpacity
                     onPress = {() => navigate('ViewAnswer', {
                         question : item.question,
                         question_id : item.id,
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
    );
  }
}
  