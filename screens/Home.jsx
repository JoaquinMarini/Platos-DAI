import token from './form';
import { StyleSheet, Text, Image , View, TextInput, FlatList, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NombreDelPlato from '../components/NombreDelPlato';
import ImagenDelPlato from '../components/ImagenDelPlato';
import Detalle from '../components/Detalle';


const Home = ({ navigation }) => {

return(

<>
<ImagenDelPlato/>
<Detalle/>
</>

)
    
    
}

export default Home;