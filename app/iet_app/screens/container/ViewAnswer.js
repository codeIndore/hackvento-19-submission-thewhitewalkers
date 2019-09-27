import React, {Component} from 'react';
import { Card, CardItem, Body, Left, Button, Container, Header, Icon, Thumbnail, Title, H2, Right} from 'native-base';
import { Text, FlatList, ActivityIndicator, View} from 'react-native';
import axios from 'axios';

export default class ViewAnswer extends Component{

    static navigationOptions = {
        title : 'ViewAnswer'
    };

    constructor(props){
        super(props);
        this.state = {
            loading : true,
            answer : [],
            token : '',
        }
    }

    async componentDidMount(){
        const token = this.props.navigation.getParam('tok');
        const question_id = this.props.navigation.getParam('question_id');
        
        await axios.get(`http://192.168.43.48:8000/api/answers/${question_id}/`,{
            Authorization : `Token ${token}`,
        })
        .then(res => this.setState({
            loading:false,
            answer:res.data,
            token : token,
        }))
        .catch(err => console.log(err));
    }

    render(){
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const ques = this.props.navigation.getParam('question', '');
        const ques_id = this.props.navigation.getParam('question_id', '');
        const username = this.props.navigation.getParam('username');
        if (this.state.loading){
            return(
                <View> 
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }
        return(
             
                <Container>
                    <Header><Title style={{paddingTop:15}}>Answer</Title>
                        <Right><Text 
                        onPress = {() => {
                            this.props.navigation.navigate('AddAnswer', {
                                question : ques,
                                question_id : ques_id,
                                token : this.state.token,
                                username : username,
                            })
                        }}
                        style={{color : 'white'}}>Answer</Text></Right>
                    </Header>
                
                <H2 style={{paddingLeft : 15, paddingRight : 10, marginTop : 20, marginBottom : 15}}>{ques}</H2>     
                <FlatList 
            data = {this.state.answer}
            renderItem = {({item}) => (
                    <Card>
                         <CardItem>
                            <Left>
                                <Thumbnail small source={{uri:uri}} />
                                <Body>
                                    <Text>{item.author_A}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={{fontSize:20}}>{item.answer}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon name='flame' style={{color:'orange'}} />
                                    <Text>  {item.upvote} Flames</Text>
                                </Button>
                                <Button transparent>
                                <Icon name = 'paper-plane' style={{color:'blue', fontSize:20}} />
                                    <Text>  Share</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                )}
             />
        </Container>
        );
    }
}