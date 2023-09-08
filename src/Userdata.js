import { StyleSheet, Text, View,FlatList ,Image, ActivityIndicator} from 'react-native'
import React ,{useEffect,useState}from 'react'

const Userdata = () => {
  const[item,SetItem]=useState([])
  const apidata= async()=>{
    try{
    const url="https://thapatechnical.github.io/userapi/users.json"
    let result=await fetch(url)
    result=await result.json()
    SetItem(result)
    }
  catch(error){
    console.warn(error)
    }

  }
  useEffect(()=>{
     apidata();
  },[])

  return (
    <View style={mystyle.maincontainer}>
    <Text style={mystyle.listname}> list of students</Text>
    <FlatList 
    style={{backgroundColor:'red'}}    showsHorizontalScrollIndicator={false}
  horizontal={true}
  keyExtractor={item => item.id}
     data={item}
     renderItem={({item})=>
     <View style={mystyle.maincard}>
      <View style={mystyle.imgview}>
         <Image style={mystyle.img}
         resizeMode="cover"
         source={{uri:item.image}}/>
      </View>
      <View style={mystyle.alltextview}>
        <View style={mystyle.biodataview}> 
          <Text style={mystyle.biodata}>Bio-Data</Text>            
            <Text style={mystyle.id}>{`#0${item.id}`}</Text>         
        </View>
        <View style={mystyle.viewtext}>
        <Text style={mystyle.detial}> name : {item.name}</Text>
        <Text style={mystyle.detial}> email : {item.email}</Text>
        <Text style={mystyle.detial}> mobile : {item.mobile}</Text>
        </View>
      </View>

     </View>

     }/>

    
    </View>
  )
}

export default Userdata

const mystyle = StyleSheet.create({

  maincontainer:{
  
    alignItems:'center'
    ,padding:5,
  },
  maincard:{
    width:255,
    alignItems:'center',height:"auto",
    margin:30,backgroundColor:'white'
    
  },
  listname:{
    fontSize:35,
    textTransform:'capitalize',
    fontFamily:'Nunito-Medium',
    color:'#9111ed'
  },
  imgview:{
 width:'90%',
    height:220,
    marginBottom:20
  
},
  img:{
    width:'100%',
    height:'100%',marginVertical:10
  
 
},
alltextview:{
backgroundColor:'black',
  width:'100%',
  backgroundColor:'black',
  paddingBottom:10,
  padding:5
  
},
biodataview:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:8,
  alignItems:'center'
},
biodata:{
  fontSize:25,
  fontFamily:"Nunito-Medium",
  color:'white'
},
id:{
  fontSize:20,
  color:'white'
},
viewtext:{
  width:'100%',
  marginVertical:10,
  
gap:5,
textAlign:'left',
},
detial:{
  textTransform:'capitalize',
  textAlign:'left',
  fontSize:15,
  color:'white'

}
})




//student section