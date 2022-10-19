import React, {useState,useEffect} from 'react';
import {View, Text, Button, FlatList,ActivityIndicator} from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard';
console.log('hd');
const App = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setloading] = useState(true);

  async function fetchData() {
    // setloading(true)
    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/users',
    // );
    // setloading(false)
    // setUserList(response.data);

    axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
      setloading(false);
      setUserList(response.data);
      
    })
  }
  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );useEffect(() => {
    fetchData()
  
  }, [])
  

  return (
    <View>
      { loading ? (<ActivityIndicator size="large"/>)
      :(<FlatList data={userList} renderItem={renderUser} />)
      
    }
      {/* <Button title="data" onPress={fetchData} /> */}
    </View>
  );
};

export default App;
