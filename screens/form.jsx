import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';

import axios from 'axios';
//import {contextState} from './contextState'
import { useNavigation } from '@react-navigation/native';

const Form = ({ navigation }) => {

const client =  axios.create({baseURL:'http://challenge-react.alkemy.org/'})


    const [email, onChangeEmail] = React.useState("challenge@alkemy.org");
    const [password, onChangePassword] = React.useState("react");  

    const validar = () =>{
      console.log("entro a validar")
      if(!email || !password){
        console.log("la quedo en validar")
        return email,password;
      } else{
        console.log("salio de validar")
      }     
      return undefined
    }
       /* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Alert</Alert.Heading>
        <p>
          Alert
        </p>
      </Alert>

      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );*/

    const guardar = async () => {
      console.log("entro a guardar")
      let campo = validar()
      if (!campo) {
        let obj = {
          "email": email,
          "password": password
        };
        console.log(obj)
        let token= await client.post('http://challenge-react.alkemy.org', obj)        
        .then(response => response.data)
        console.log("llego al axios")
        console.log(token);
        navigation.navigate('Home')
        console.log("termino la funcion")
       // token = contextState;
      }
      
    }

  return (
        
    <>
    <View>
              
              <TextInput  placeholder="Usuario"   onChangeText={onChangeEmail} value={email} />              
              <TextInput  placeholder="password"   onChangeText={onChangePassword} value={password} />
      
            <Button onPress={guardar} title="SIGUIENTE" />
            
           {/*   
            <NombreDelPlato/>
            <ImagenDelPlato/>
  */}
      </View>
    </>  
      
  );  

  }

  export default Form;

