import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const CardPlato = (props) => {
  const navigation = useNavigation()
    return(<Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.image}} />
    <Card.Actions>
      <Button onClick={navigation.navigate("detallePlato")}>Detalle</Button>
    </Card.Actions>
  </Card>
);

}

export default CardPlato;