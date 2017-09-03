import React from 'react';
import { StyleSheet, Text, View, ListView, Image,TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';
import firebase from './firebase'

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  Milk: t.String,       // a required string
  KiwiJuice: t.String,
  AppleJuice: t.String,
  Coconutjuice:t.String,         // a required string 
  Shop: t.String        // a string
});
var options = {}; // optional rendering options (see documentation)

export default class Mycomponent extends React.Component {

    sendData = (infor) =>{
         firebase.database().ref('king').push(infor).
            then((data) => {
                dispatch({ type: "FULFILLED" })
                console.log("add to Firebase success")                
            }).
            catch((err) => {
                dispatch({ type: "REJECTED" })
                console.log("add to Firebase failed")
            });
    }
    onPress = () =>{
         // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value); // value here is an instance of Person
            this.sendData(value);
        }
    }

    
   
     render() {
        return (
           <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Add Booking</Text>
        </TouchableHighlight>
      </View>
        )
    }


}

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});