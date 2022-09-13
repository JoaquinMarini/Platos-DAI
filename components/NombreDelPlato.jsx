import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const NombreDelPlato = ({ navigation }) => {
    const [nombrePlatos, setNombrePlatos] = useState([])
    let ghostlist = []

    const client =  axios.create({baseURL:'https://api.spoonacular.com/recipes/complexSearch'})
    console.log("entro a guardar")
    useEffect(()=>{            
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=664dfd177f4e433c902a8f32611938fa`)
        .then(function(res){
            console.log(res.data.results)
            ghostlist = res.data.results
        })
        .catch(function(error){
            console.log(error)
            console.log("no se han traido los platos")
        })
        .then(function() {
            setNombrePlatos(ghostlist)
        })
    },[])
    return(
        <>
            {
                nombrePlatos.map(
                    (i) => (
                        <>
                            {i.title}
                        </>
                    )
                )
            }
        </>
    )
}

export default NombreDelPlato;