import React, { Component } from 'react';
import { View, Button,Text,StyleSheet } from 'react-native';
import { DDetail } from './DDetail';
import firebase from './firebase';
import Mycomponent from './Mycomponent';
import Pagetwo from './Pagetwo';
import { Actions } from 'react-native-router-flux';
class Form extends Component {
    state = { email: '', password: '', error: '', loading: false,next:false };
    onLoginPress() {
        this.setState({ error: '', loading: true });
    
        const { email, password } = this.state;
        if(this.state.email!=""||this.state.password!=""){
       
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { 
                this.setState({ error: 'success', loading: false ,next:true}
                    
                )
                Actions.Pagetwo()
                
           
                
        })
            .catch(() => {
                //Login was not successful, let's create a new account
                      
                        this.setState({ error: 'Authentication failed.', loading: false,next:false });
                        
                    
            });
        }else{
            this.setState({ error: 'try_agian', loading: false });
        }
      
        
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return null;
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
    }
  
    render() {
        return (
            <View style={styles.container}>
                    <DDetail
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <DDetail 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                   
                    {this.renderButtonOrSpinner()}
                   
            </View>
        );
    }
}

        
const styles = StyleSheet.create({
    container: {
      
      flex: 1,
    
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});



export default Form;