import React, {FC,useState,useEffect} from 'react'
import { View, Text,TextInput,FlatList } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {Fruit, Fruits} from './data'
import Item from './Item'
interface Props {
     icon : string;
     placeholder? : string;
     onChangeText : (text : string)=> void;
}

const Input: FC<Props> = (props) => {
  const [search, setSearch]= useState<string>("")
  const [fruits, setFruits]=useState<Fruit[] | null>(null)
  
  
    useEffect(() => {
        return () => {
      setFruits(Fruits)
        }
    })


    return (
        <View>
        <View>
     <Fontisto name = {props.icon} size={25} color ="#555"/>
            <Text></Text>
        </View>
        <View>
            <TextInput placeholderTextColor="#555" 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            />
            
        </View>
        <FlatList
        data={fruits}
        renderItem={({item})=><Item id={item.id}  name={item.name} price={item.price}/>}

        />
        </View>
    )
}

export default Input
