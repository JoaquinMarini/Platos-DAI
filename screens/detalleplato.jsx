import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {contextState} from './contextState'
import NombreDelPlato from '../components/NombreDelPlato';
import ImagenDelPlato from '../components/NombreDelPlato';
import Detalle from '../components/Detalle';
import { infoPlato } from '../services/infoPlato';
const detallePlato = ({ navigation }) => {

  const traerInformacion = async (e) => {
   await infoPlato(id) .then((response) => {

    setDetalle({detallePlato: response})
    console.log(response)

})
.catch(() => {
  console.log("detalle anda mal")
 
});
}
    
  return (
        
    <>
    <View>
            <Detalle/>
    </View>
    </>  
      
  );  

  }

  export default detallePlato;

