import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { infoPlato } from '../services/infoPlato';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ActionTypes, useContextState } from "../contextState";
import {Text} from 'react-native'

const DetalleDelPlato = ({ navigation }) => {
    const [detallePlatos, setDetallePlatos] = useState([])
    const {contextState, setContextState} = useContextState();
    const funcion = () =>{
       
            console.log("Estoy ")
            setContextState({
                type: ActionTypes.AddMenu,
                value: detallePlatos
              })
            console.log(contextState)
            navigation.navigate("Home")
        
        
    }
    let ghostlist = []

    const funcion2 =() =>{
        setContextState({
            type: ActionTypes.DeleteMenu,
            value: detallePlatos
          })
          console.log(contextState)
            navigation.navigate("Home")
    }

    const client =  axios.create({baseURL:'https://api.spoonacular.com'})
    console.log("entro a guardar")
    useEffect(()=>{            
        client.get(`recipes/${contextState.platoSeleccionado.id}/information?apiKey=664dfd177f4e433c902a8f32611938fa`)
        .then(function(res){
            console.log(res.data)
            ghostlist = res.data
            setDetallePlatos(ghostlist)
        })
        .catch(function(error){
            console.log(error)
            console.log("no se han traido los platos")
        })
    },[])

let existePlato = contextState.menu.find(item => item.id === detallePlatos.id)

if (!detallePlatos.healthScore) return <Text>Cargando...</Text>

    console.log(detallePlatos)
    console.log(contextState)
    if(detallePlatos.vegan) detallePlatos.vegan =  "SI"
    else detallePlatos.vegan =  "NO"
    return(
        <Card>
            <Card.Content>
            <Text>{contextState.platoSeleccionado.title}</Text>
            <Paragraph>
                {
`Precio: ${detallePlatos.pricePerServing}
Health score: ${detallePlatos.healthScore}
Vegano: ${detallePlatos.vegan}`
                }
            </Paragraph>
            
            </Card.Content>
            <Card.Cover source={{ uri: contextState.platoSeleccionado.image}} />
            
                {
                  existePlato ? 
                   <Card.Actions> <Button onPress={funcion2}>Eliminar del menu</Button></Card.Actions>
                
                :
                
                    <Card.Actions><Button onPress={funcion}>Agregar al menu</Button></Card.Actions>
                }
                
                
            
        </Card>
    )
}

export default DetalleDelPlato;