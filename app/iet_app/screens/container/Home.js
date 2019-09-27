import React from 'react';
import {Container} from 'native-base';
import Question_List from '../component/Question_List';

export default class Home extends React.Component{
    
    render(){
        return(
            <Container>
             <Question_List />
             </Container>
            
        );
    }
}