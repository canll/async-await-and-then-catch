import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
const UserCard = (props) => {
  return (
    <View style={styles.container}> 
        <Text>{props.username}</Text>
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightblue',
        padding:5,
        marginVertical:5,
    },

})