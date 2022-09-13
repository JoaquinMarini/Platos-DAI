import token from './form';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import NombreDelPlato from '../components/NombreDelPlato';
import ImagenDelPlato from '../components/ImagenDelPlato';
import { buscarPlato } from '../services/buscarPlato';


const Home = ({ navigation }) => {

    const [platoBuscado, setPlatoBuscado] = useState({
        plato:""
      });


    const [plato, setPlato] = useState({
    listaPLatos:[]
    });
  






      const Buscar = async (comidaBuscada) => {

        let longitud = comidaBuscada.length
        
        if (!comidaBuscada || longitud < 3){  
            console.log("algo hiciste mal")
         
          
        } else {
          
          await buscarPlato(comidaBuscada).then((response) => {
            
            
            console.log(response)
           

          })
          .catch(() => {
            console.log("noooo")
           
          });
        }
      }



return(

<View>

<TextInput
            
            
            placeholder="Busque un plato"
            name="Buscador"
            value={platoBuscado.plato}
            onChangeText={(comidaBuscada) => {setPlatoBuscado({plato: comidaBuscada});Buscar(comidaBuscada)}}
          
          />





</View>

)
    
    
}

export default Home;