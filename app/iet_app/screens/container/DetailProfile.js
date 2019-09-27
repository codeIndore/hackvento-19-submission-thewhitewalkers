import React from 'react';
import {Text, View, ActivityIndicator, Alert, StyleSheet, ScrollView} from 'react-native';
import {Button, Header, Content, Card, CardItem, Title, Container, Body, H3} from 'native-base';
import axios from 'axios';

export default class DetailProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            loading : true,
        }
    }

    async componentDidMount(){
        const username = this.props.navigation.getParam('username');
        await axios.get(
            `http://192.168.43.48:8000/api/profile/${username}`
        )
        .then(res => this.setState({
            data : res.data,
            loading : false
        }))
    }

    render(){
        if (this.state.loading === true){
        return(
                <View> 
                  <ActivityIndicator size="large" color="#0c9"/>
                </View>
        )}

        return(
            <ScrollView style={styles.container}>
           
                <Header><Title style={{paddingTop : 15}}>Profile Details</Title></Header>
                <View style={styles.contactIconContainer}>
                    {this.state.data.map(data => <Text style={styles.contactIcon}>{data.name[0].toUpperCase()}</Text>)}
                    <View style={styles.nameContainer}>
                    {this.state.data.map(data =><Text style={styles.name}>{data.name}</Text>)}
                </View>
                </View>
    
        <Content padder>
          <Card>
            <CardItem bordered>
                <Text style={styles.infoText}>Name</Text>
            </CardItem>
            <CardItem bordered>
                {this.state.data.map(data => <Text style={styles.infoText}>{data.name}</Text>)}
            </CardItem>
          </Card>

           <Card>
            <CardItem bordered>
                <Text style={styles.infoText}>Branch</Text>
            </CardItem>
            <CardItem header bordered>
                {this.state.data.map(data => <Text style={styles.infoText}>{data.branch}-{data.section}</Text>)}
            </CardItem>
          </Card>

            <Card>
            <CardItem bordered>
                <Text style={styles.infoText}>Semester</Text>
            </CardItem>
            <CardItem header bordered>
                {this.state.data.map(data => <Text style={styles.infoText}>{data.semester} sem</Text>)}
            </CardItem> 
            </Card>

            <Card>
            <CardItem bordered>
                <Text style={styles.infoText}>About Me</Text>
            </CardItem>
            <CardItem bordered>
              {this.state.data.map(data => <Text style={styles.infoText}>{data.aboutYou}</Text>)}
            </CardItem>
            </Card>

            <Card>
            <CardItem bordered>
                <Text style={styles.infoText}>Email</Text>
            </CardItem>
            <CardItem  bordered>
              {this.state.data.map(data => <Text style={styles.infoText}>{data.email}</Text>)}
            </CardItem>
          </Card>
          <View style={{height : 100}}></View>
        </Content>
        
        </ScrollView>
        )
    }
    

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff"
      },
    infoText: {
        fontSize: 18,
        fontWeight: "300"
      },
      contactIcon: {
        fontSize: 100,
        fontWeight: "bold",
        color: "#fff"
      },
      contactIconContainer: {
        height: 200,
        backgroundColor: "#3F51B5",
        alignItems: "center",
        justifyContent: "center"
      },
      name: {
        fontSize: 24,
        color: "#000",
        fontWeight: "900"
      },
      nameContainer: {
        width: "100%",
        height: 70,
        padding: 10,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        position: "absolute",
        bottom: 0
      },
})
