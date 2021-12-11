import React, {FC,useState,useEffect} from 'react'
import { View, Text,TextInput,FlatList,TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import PlusCirle from 'react-native-vector-icons/AntDesign'

import {Fruit, Fruits} from './data'
import Item from './Item'
interface Props {
     icon : string;
     placeholder? : string;
    //  onChangeText : (text : string)=> void;
}

const Input: FC<Props> = (props) => {
    console.log(props)
  const [search, setSearch]= useState<string>("")
  const [fruits, setFruits]=useState<Fruit[] | null>(null)
  const [inputShown, setInputShown] = useState<boolean>(false)
  const [newFruit, setNewfruit] = useState<Fruit | null>(null)

//   console.log(Fruits.pop())
//   console.log(Fruits.pop())

//   console.log(Fruits.pop())


    useEffect(() => {
        return (() => {
      setFruits(Fruits.sort((a:Fruit, b:Fruit)=>{
          return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      })
      );
        })();
    },[])

   const handleSearch = (text:string) =>{
       const fruits : Fruit []= Fruits.filter((fruit)=>fruit.name.includes(text))
       setFruits(fruits);
    }
const handleAdd = ()=>{
    if(newFruit !==null && fruits!==null){
        setFruits([...fruits,newFruit])
    }else if(newFruit !==null && fruits==null){
        setFruits([newFruit])
    }

}
    

    return (
        <View
        // style={{
        //     flex:0.1,
        //     justifyContent:"center",
        //     alignItems:"flex-start"
        // }}
        >
       
         <View>
             <Fontisto name="search" size={25}/>
            <TextInput 
            
            //  icon={props.icon} 
            placeholder={props.placeholder}
            onChangeText={(text)=>handleSearch(text)}
            />
            
        </View> 
        <FlatList
        data={fruits}
        renderItem={({item})=><Item id={item.id}  name={item.name} price={item.price}/>}

        />


      <View >
           
      <TouchableOpacity
          style={{
              alignSelf : "center",
              backgroundColor : "rgba(81,135,200,1)",
              padding: 10,
              paddingHorizontal:20,
              borderRadius:6,
             marginVertical : 10,
             display: inputShown==false?"flex":"none"
          }}

          onPress={()=>setInputShown(true)}
          >
         <Text style={{color:"white", fontWeight: "600"}}>Add</Text>

          </TouchableOpacity> 
      </View>
        <View 
        style={{
             display:inputShown ===true? "flex" :"none",
            marginBottom:10}}
        > 
        <PlusCirle name="pluscircleo" size={25}/>
        <TextInput 
            
            placeholder="Fruit Name"
            onChangeText={(text)=>{
                if(newFruit !==null){
                    setNewfruit({...newFruit,name:text})
                }else{
                    setNewfruit({id:Date.now(),name:text,price:0})
                }
            }}
            />
            <PlusCirle name="pluscircleo" size={25}/>
        <TextInput 
            
            placeholder="Fruit price"
            onChangeText={(text)=>{
                if(newFruit !==null){
                    setNewfruit({...newFruit,price:+text})
                }else{
                    setNewfruit({id:Date.now(),name:"",price:+text})
                }
            }}
            />
            
          <TouchableOpacity
          style={{
              alignSelf : "center",
              backgroundColor : "rgba(81,135,200,1)",
              padding: 10,
              paddingHorizontal:20,
              borderRadius:6,
            //   marginVertical : 10
          }}

          onPress={handleAdd}
          >
         <Text style={{color:"white", fontWeight: "600"}}>Add</Text>

          </TouchableOpacity>
        </View>
        </View>
    )
}

export default Input
