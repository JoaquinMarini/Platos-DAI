import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ActionTypes, useContextState } from "../contextState";


const CardPlato = (props) => {
  const {contextState, setContextState} = useContextState();
  const platoSeleccionado = ()=>{
    setContextState({
      type: ActionTypes.SetPlatoSeleccionado,
      value: props
    })
    navigation.navigate("Detalle")
  }
  const navigation = useNavigation()
    return(<Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.image}} />
    <Card.Actions>
        <Button onPress={platoSeleccionado}>Detalle</Button>
    </Card.Actions>
  </Card>
);

}

export default CardPlato;