import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import{useNavigation} from'@react-navigation/native'
 import About from './About';
import Contact from './Contact';
import Course from './Course';
import Userdata from './Userdata';
const Menu = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.mainview}>
      {/* <Text>{navigation.navigate('home')}</Text> */}
      <TouchableOpacity
       style={styles.btn}
       onPress={()=>navigation.navigate(Course)}>
        <Image 
        style={styles.icon}
        source={require("../assets/images/training.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.btn}
       onPress={()=>navigation.navigate(Userdata)}>
          <Image 
        style={styles.icon}
        source={require("../assets/images/student.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.btn}
       onPress={()=>navigation.navigate(About)}>
          <Image 
        style={styles.icon}
        source={require("../assets/images/profile.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
       style={styles.btn}
       onPress={()=>navigation.navigate(Contact)}>
          <Image 
        style={styles.icon}
        source={require("../assets/images/contact.png")}
        />
      </TouchableOpacity>

    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    mainview:{
  flexDirection:'row',
  marginVertical:10
  
  ,justifyContent:"space-evenly"
    },icon:{
     width:'100%',
     height:60,
    
     aspectRatio:1
          
    }
})