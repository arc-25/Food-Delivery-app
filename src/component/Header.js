import React from "react";
import {View,StyleSheet,Text} from 'react-native';
 const Header = (props)=>{
    console.log(props);
    return (
         <View style={styles.container}> 
            <Text style={styles.labelStyle}> Label </Text>
        </View>
    );
 };
 const styles =StyleSheet.create({
    container:{
        width:500,
        height:90,
        backgroundColor:'purple',
        justifyContent:'center',  //alignment of label text in the center
        alignItems:'center',
    },
    labelStyle:{
        fontSize:24,
        fontWeight:'700',
    }
 });
  export default Header;