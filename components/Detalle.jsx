import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DetalleDelPlato = ({ navigation }) => {
    const [detallePlatos, setDetallePlatos] = useState([])
    let ghostlist = []

    const client =  axios.create({baseURL:'https://api.spoonacular.com'})
    console.log("entro a guardar")
    useEffect(()=>{            
        client.get(`/recipes/1/information`)
        .then(function(res){
            console.log(res.data.results)
            ghostlist = res.data.results
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
    return(
        <>
            {
                detallePlatos.map(
                    (i) => (
                        <>
                            <p>{i.title}</p>
                        </>
                    )
                )
            }
        </>
    )
}

export default ImagenDelPlato;