import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Menu from './Menu';

const Home = () => {
  const discription =
    'I am creating a student app with the help of react native 2-way text messaging Translation into 90+ languages ; Hub.';
  return (
    <View style={mystyle.maincontainer}>
      <View style={mystyle.headertop}>
        <View style={mystyle.imageview}>
          <Image
            source={require('../assets/images/studentimage.png')}
            style={mystyle.img}
          />
        </View>
        <View style={mystyle.textview}>
          <Text style={mystyle.appname}>welcome to </Text>
          <Text style={[mystyle.appname, {color: '#34a4eb'}]}>student app</Text>
          <Text style={mystyle.discription}> {discription}</Text>
        </View>
      </View>
    
      <View style={mystyle.addmenu}>
  
        <Menu />
        
      </View>
    </View>
  );
};

const mystyle = StyleSheet.create({
  addmenu:{
    width:'100%',
    marginVertical:10
   
    
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom:4

  },
  headertop: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    
     
  },
  img: {
    height: undefined,
    width: '88%',
    aspectRatio: 1.4,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 15,
  },

  textview: {
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginVertical: 50,
  },
  appname: {
    fontSize: 40,
    textTransform: 'capitalize',
    color: 'black',
    fontFamily:'Nunito-Medium'
  },
  discription: {
    marginVertical: 30,
    lineHeight: 22,
    textTransform: 'capitalize',
    textAlign: 'left',
  },
});

export default Home;
