import React ,{FC,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { View, Text } from 'react-native'
import { RootState } from '../../Redux/store'
import { fetchUsers } from '../../Redux/userListSlice';

const UserList: FC = () => {
    const dispatch = useDispatch();
    const screenState = useSelector((state: RootState)=>state.userList)
    
    useEffect(() => {
        
      dispatch(fetchUsers({page:1}))
    }, []);

    return (
        <View>
         {screenState.loading && <Text>LOADING</Text>}
         {screenState.error && <Text>Error</Text>}
         {!screenState.loading && !screenState.error && <Text>Default</Text>}
         <Text>{JSON.stringify(screenState.users)}</Text>
          </View>
    )
}

export default UserList
