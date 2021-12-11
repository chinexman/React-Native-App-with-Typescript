/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import Fontisto from 'react-native-vector-icons/Fontisto';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import Feather from 'react-native-vector-icons/Feather';
import Entype from 'react-native-vector-icons/Entypo'
import React,{FC} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Input from './src/screens/Input'
import UserList from './src/screens/Redux/UserList';
import {Provider as ReduxProvider} from 'react-redux'
import store from './src/Redux/store'



const App:FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     <View>

       <ReduxProvider store={store}>
    <UserList />
    </ReduxProvider>
      {/* <Fontisto name="search" size={25} /> */}
      {/* <Input icon="search" placeholder="Search" 
      // onChangeText={(text)=>console.log(text)}
      /> */}
     </View>

    </SafeAreaView>
  );
};



export default App;
