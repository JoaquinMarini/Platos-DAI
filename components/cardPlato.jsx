import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const CardPlato = (props) => {
  const navigation = useNavigation()
    return(<Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.image}} />
    <Card.Actions>
        <Button onPress={() => navigation.navigate("Detalle")}>Detalle</Button>
    </Card.Actions>
  </Card>
);

}

export default CardPlato;