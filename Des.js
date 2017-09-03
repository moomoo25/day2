import React,{Component} from 'react';
import { StyleSheet, Text, View,ListView,Image,TouchableHighlight,WebView } from 'react-native';

import { Actions } from 'react-native-router-flux';


const Des =(props)=>{

      
    return(
        <TouchableHighlight > 
    <View style={styles.container}>
         <Text style={styles.label}>{props.shop}</Text>
<View style={styles.content}>

        <Text >น้ำแอปเปิ้ล : {props.aj}</Text>
        <Text>น้ำมะพร้าว : {props.cj}</Text>
        <Text>น้ำกีวี่ : {props.aa}</Text>
        <Text>นมเย็น : {props.milk}</Text>
        </View>
  
        </View>
        </TouchableHighlight > 
)}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1bd6c9",
        height:200,
        width:200,
        flexDirection:'column',
        borderColor: '#ffffff',
    borderWidth:5,
    alignItems:'center'
    },
    label:{
        fontSize:33,
        alignItems:'center'
    },
   
})
export default Des;