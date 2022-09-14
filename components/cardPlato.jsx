import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CardPlato = (props) => (
  <Card>
    <Card.Content>
      <Title>{props.title}</Title>
    </Card.Content>
    <Card.Cover source={{ uri: props.image}} />
  </Card>
);

export default CardPlato;