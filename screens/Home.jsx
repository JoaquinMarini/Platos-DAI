import token from './form';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import NombreDelPlato from '../components/NombreDelPlato';
import ImagenDelPlato from '../components/ImagenDelPlato';
import { buscarPlato } from '../services/buscarPlato';
import CardPlato from '../components/cardPlato'
import CardPlatoMenu from '../components/cardPlatoMenu'
import { detallePlato } from '../services/infoPlato';
import { ActionTypes, useContextState } from "../contextState";


const Home = ()=> {
    const [platoBuscado, setPlatoBuscado] = useState({
        plato:""
      });
    const {contextState, setContextState} = useContextState();
    console.log(contextState)

    const [plato, setPlato] = useState({
      listaPLatos:[]
    });

    const [detalle, setDetalle] = useState({
      detallePlato:[]
    })
  

      const Buscar = async (comidaBuscada) => {

        let longitud = comidaBuscada.length
        
        if (!comidaBuscada || longitud < 3){  
            console.log("algo hiciste mal")
            setPlato([])
         
          
        } else {
          
          await buscarPlato(comidaBuscada).then((response) => {
            
            setPlato({listaPLatos: response})
            console.log(response)
           

          })
          .catch(() => {
            console.log("noooo")
           
          });
        }
      }

        const renderItem = ({ item }) => (
          <CardPlato id={item.id} title={item.title} image={item.image} />
        );
        const renderItemMenu = ({ item }) => (
          <CardPlatoMenu id={item.id} title={item.title} image={item.image} />
        );
return(
<View>

  <TextInput style={{marginTop:'10%'}}        
              
              placeholder="Busque un plato"
              name="Buscador"
              value={platoBuscado.plato}
              onChangeText={(comidaBuscada) => {setPlatoBuscado({plato: comidaBuscada});Buscar(comidaBuscada)}}
            
          />

  <FlatList
          data={plato.listaPLatos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
  <Text>Menu</Text>
  <Text>precio {contextState.price}</Text>
  <Text>healthscore {contextState.healthScore/contextState.menu.length}</Text>
  <FlatList
          data={contextState.menu}
          renderItem={renderItemMenu}
          keyExtractor={item => item.id}
        />
      
</View>

)
    

}

export default Home;