import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {Container,  Button, Header, Title} from 'native-base';

export default class Choose extends React.Component{
    render(){
        const username = this.props.navigation.getParam('username');
        const token = this.props.navigation.getParam('token');

        return(
            <Container>
                <Header><Title style={{paddingTop : 15}}>My Profile</Title></Header>
                <View style={styles.contactIconContainer}>
                   <Text style={styles.contactIcon}>{username[0].toUpperCase()}</Text>
                    <View style={styles.nameContainer}>
                   <Text 
                   onPress = {() => this.props.navigation.navigate('DetailProfile', {
                       username : username,
                   })}
                   style={styles.name}>{username}</Text>
                </View>
                </View>

                <Button
                style={{marginTop : 50}}
                onPress = {() => this.props.navigation.navigate('Home', {
                    username : username,
                    token : token,
                })}
                full><Text style={{color:'white'}}>QnA</Text></Button>
                
                <Button 
                style={{marginTop : 50}}
                full
                onPress = {() => this.props.navigation.navigate('SearchName')}
                ><Text style={{color:'white', alignSelf : "center"}}>See Profiles</Text></Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    contactIconContainer: {
        height: 200,
        backgroundColor: "#3F51B5",
        alignItems: "center",
        justifyContent: "center"
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
      name: {
        fontSize: 24,
        color: "#000",
        fontWeight: "900"
      },
      contactIcon: {
        fontSize: 100,
        fontWeight: "bold",
        color: "#fff"
      },
})