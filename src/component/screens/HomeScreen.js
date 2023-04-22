import React from "react";
import { StyleSheet ,View,Text,StatusBar} from 'react-native';
import Header from "../Header";

const HomeScreen =()=>{
    return (
    <View style={styles.container}>
        <Header/>
      <Text>hello worlfd1</Text>
      <StatusBar barStyle='dark-content' />
    </View>

    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
  });
  
export default HomeScreen;