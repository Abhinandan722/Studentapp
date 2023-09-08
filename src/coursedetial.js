import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    
  } from 'react-native';
  import React from 'react';
  import Courses from './api/courseapi';
  
  const data={Courses}
const Coursedetial = () => {

         return (
          <View style={styles.maincontainer}>
            <View style={styles.cardcontainer}>
              {/* <View style={styles.imagecontainer}>
                <Image
                  resizeMode="cover"
                  style={styles.img}
                  source={Courses.image}
                />
              </View> */}
              <Text style={styles.title}> {data.title} djsdh</Text>
            
              <View style={styles.btnview} >
                <TouchableOpacity style={styles.btn}
                >
                  <Text style={styles.btntext}> course detial </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      };
      


const styles = StyleSheet.create({
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
export default Coursedetial