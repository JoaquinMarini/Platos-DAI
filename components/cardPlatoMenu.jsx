import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ActionTypes, useContextState } from "../contextState";
import { useEffect, useState } from 'react';
import axios from 'axios';


const CardPlato = (props) => {
  const {contextState, setContextState} = useContextState();
  const [detallePlatos, setDetallePlatos] = useState([])
  let ghostlist=[]
  const client =  axios.create({baseURL:'https://api.spoonacular.com'})
    console.log("entro a guardar")
    useEffect(()=>{            
        client.get(`recipes/${contextState.platoSeleccionado.id}/information?apiKey=664dfd177f4e433c902a8f32611938fa`)
        .then(function(res){
            console.log(res.data)
            ghostlist = res.data
        })
        .catch(function(error){
            console.log(error)
            console.log("no se han traido los platos")
        })
        .then(function() {
            setDetallePlatos(ghostlist)
        })
    },[])
  const platoSeleccionado = ()=>{
    setContextState({
      type: ActionTypes.DeleteMenu,
      value: detallePlatos
    })
  }
  const navigation = useNavigation()
    return(<Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.image}} />
    <Card.Actions>
        <Button onPress={platoSeleccionado}>Eliminar del menu</Button>
    </Card.Actions>
  </Card>
);

}

export default CardPlato;