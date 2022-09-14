import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {contextState} from './contextState'
import NombreDelPlato from '../components/NombreDelPlato';
import ImagenDelPlato from '../components/NombreDelPlato';

const detallePlato = ({ navigation }) => {


  await detallePlato(id) .then((response) => {

  setDetalle({detallePlato: response})
  console.log(response)

})
.catch(() => {
  console.log("detalle anda mal")
 
});

    
  return (
        
    <>
    <View>
             {
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>NombreDelPlato</Card.Title>
        <ImagenDelPlato/>
        <Card.Text>
          <NombreDelPlato/>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
    
             }  
              
      </View>
    </>  
      
  );  

  }

  export default Form;

