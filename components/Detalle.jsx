import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { infoPlato } from '../services/infoPlato';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ActionTypes, useContextState } from "../contextState";

const DetalleDelPlato = ({ navigation }) => {
    const [detallePlatos, setDetallePlatos] = useState([])
    const {contextState, setContextState} = useContextState();
    const funcion = () =>{

    }
    let ghostlist = []

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



    console.log(detallePlatos)
    console.log(contextState)
    return(
        <Card>
            <Card.Content>
            <Title>{contextState.platoSeleccionado.id}</Title>
            </Card.Content>
            <Card.Cover source={{ uri: contextState.platoSeleccionado.image}} />
            <Card.Actions>
                <Button onPress={funcion}>Agregar al menu</Button>
            </Card.Actions>
        </Card>
    )
}

export default DetalleDelPlato;