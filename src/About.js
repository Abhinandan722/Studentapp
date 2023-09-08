import {StyleSheet, Text, View, Image, TouchableOpacity,Linking} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={mystyle.maincontainer}>
      <View style={mystyle.abhinadanview}>
        <Text style={mystyle.name}>abhinandan patel</Text>
        <Text style={mystyle.developer}> i am a react native developer</Text>
      </View >
      <View   style={mystyle.imgview}>
        <Image  
         style={mystyle.img}
         source={require("../assets/images/webdevelopment.jpg")}
        />
      </View>
      <View style={mystyle.Aboutmeview}>
        <Text style={mystyle.about}>about me</Text>
        <Text style={mystyle.description}>Lorem Ipsum is simply dummy
         text of the printing and typesetting industry. Lorem Ipsum
         took a galley of type and scrambled it to make a type specimen book.</Text>
      </View>
      <View style={mystyle.addlink}>
        <Text style={mystyle.addlinktext}> follow me on social network</Text>
        <View style={mystyle.social}>
          <TouchableOpacity
           onPress={()=>Linking.openURL("https://www.instagram.com/abhinandan___thakur/")}>
           
            <Image
            style={mystyle.icon} source={require("../assets/images/instagram.png")}/> 
            </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>Linking.openURL("https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile")}> 
            <Image  style={mystyle.icon} source={require("../assets/images/youtube.png")}/>
             </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>Linking.openURL("https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile")}> 
            <Image style={mystyle.icon} source={require("../assets/images/linkedin.png")}/> 
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const mystyle = StyleSheet.create({

  maincontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    marginBottom:30
  },
  name:{
    fontSize:35,
    color:'black',
    textTransform:'capitalize'
  },
  developer:{
    fontSize:20,
    textTransform:'capitalize',
    fontFamily:'Nunito-Medium'
  },
  img:{
    width:150,
    height:150,
    borderRadius:100
    
  },
  abhinadanview:{


  },
  Aboutmeview:{
    
    backgroundColor:'#4c5bad'
  }
  ,  about:{
    fontSize:30,
    alignSelf:'center',
    textTransform:'capitalize',
    color:'white',
    margin:10,
    fontFamily:'Nunito-Medium'
  },
  description:{
    fontSize:17,
    alignSelf:'center',
    lineHeight:25,
    textTransform:'capitalize',
    paddingHorizontal:15,
    margin:12,
    color:'white',

  },
  addlinktext:{ 
    fontSize:26,
    color:'black',
    margin:10,
    fontFamily:'Nunito-Medium'

  },
  icon:{
    width:60,
    height:60
  },
  social:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }

});
