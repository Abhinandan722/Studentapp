import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';
import React,{useState} from 'react';
import Courses from './api/courseapi';

const Course = ({navigation}) => {
 const joinbtn=()=>{
  SetClose('none')
  Alert.alert(`Than You for join`)
  SetDetialbtn('flex')


 }
 const detialbtnn=()=>{
  SetClose('flex')
  SetDetialbtn('none')



 }

  const[close,SetClose]=useState('none')
  const[detialbtn,SetDetialbtn]=useState('flex')
  const Coursecard = ({item}) => {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.cardcontainer}>
          <View style={styles.imagecontainer}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={item.image}
            />
          </View>
          <Text style={styles.title}> {item.title} </Text>
          <Text style={styles.discription}> {item.description} </Text>
          <View style={styles.btnview} >
          <View style={[styles.detial,{display:close}]}>
          <View style={{flexDirection:'row',justifyContent:'space-between',gap:20}}>
          <Text style={[styles.course,{color:'red',fontSize:19}]}> {item.Course1} </Text>   
          <Text style={[styles.course,{color:'red',fontSize:19}]}> {item.Course2} </Text>
          <Text style={[styles.course,{color:'red',fontSize:15}]}> {item.Course3} </Text> 
          </View>
           
   <Text style={[styles.btn,styles.price,{height:'40%',width:150,marginTop:6}]}> Price:     {item.price}</Text>
   
           <TouchableOpacity style={[styles.btn,{height:'50%',width:'100%',marginTop:6}]}
            onPress={()=>joinbtn()}>
              <Text style={styles.btntext}> Join Now </Text>
            </TouchableOpacity> 
            
                </View>
            <TouchableOpacity style={[styles.btn,{display:detialbtn}]}
            onPress={()=>detialbtnn()}>
              <Text style={styles.btntext}> course detial </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={Courses}
      renderItem={Coursecard}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  price:{
      fontFamily:'Nunito-SemiBold',
      backgroundColor:'black',
      borderRadius:5,
      color:'white'
      ,
      textAlign:'center',
      fontSize:20,
      width:100,
      padding:3
    
  },
course:{
  lineHeight:20,
  textAlign:'left',
  textTransform:'capitalize',
  fontFamily:'JosefinSans-Bold'
},
  detial:{
paddingVertical:10,
  },
  closee:{alignSelf:'center',
    width:100,    
    height:30,
    backgroundColor:'#72c3fc',
    borderRadius:4, justifyContent:'center',
    alignItems:'center',
    fontFamily:'Nunito-SemiBold'
    ,color:'black'
  }

  ,
  maincontainer:{flex:1,marginBottom:'4%'},
  cardcontainer:{
    alignSelf:'center',
    width:'90%',
    height:600,
    marginTop:50,
    display:'flex',
    justifyContent:'center',padding:20,
    elevation:10,
    backgroundColor:'white',
    shadowColor:'black',
        
  
  },imagecontainer:{
    marginBottom:'10%',
    width:'100%',
    height:'35%',
   

  },
img:{
  width:'100%',
  height:'100%',
  
},
title:{
  alignSelf:'center'
  ,marginVertical:"10%",
  fontSize:30,color:'black',
  fontWeight:'600',
  textTransform:"uppercase",
  fontFamily:'Nunito-SemiBold'
}
,
discription:{
  
  lineHeight:20,
  textAlign:'left',
  textTransform:'capitalize',
  fontFamily:'JosefinSans-Bold'
  
},
btnview:{
  width:'100%',
  
  height:'12%',
  justifyContent:'center',
  alignItems:'center',marginTop:30
},
btn:{
  width:'70%',
  height:'99%',
  backgroundColor:'#72c3fc',
  borderRadius:4, justifyContent:'center',
  alignItems:'center'
}
,btntext:{
  fontSize:25,
  textTransform:"capitalize",color:'white',
  fontFamily:"JosefinSans-SemiBoldItalic",

}


});
