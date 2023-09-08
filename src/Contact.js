import { StyleSheet, Text, TextInput, View,TouchableOpacity ,Alert} from 'react-native'
import React,{useState} from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native'

const Contact = ({navigation}) => {
const[agree,SetAgree]=useState(false)
const[name,SetName]=useState('')
const[phone,SetPhone]=useState('')
const[email,SetEmail]=useState('')
const[dis,SetDis]=useState('')
console.log(name)
const submit=()=>{
  if(name==''||email==''||phone==''||dis==''){
 Alert.alert(' please fill all box')
  }
  else{
    Alert.alert(`Thank You ${name}`)
 navigation.navigate('home')
  }
}
  return (
    <View style={mystyle.maincontainer}>
      <Text style={mystyle.levelup}>level up  your knowledge</Text>
      <Text style={mystyle.reachanytime}>you can reach us anytime via abhi@nandan.com </Text>
<View style={mystyle.form}>

  <Text style={mystyle.label}>inter your name </Text>
  <TextInput 
   style={mystyle.Textinput}
   placeholder='Enter your name'
   value={name}
   onChangeText={(text)=>SetName(text)}
   />
    <Text style={mystyle.label}>inter your email </Text>
  <TextInput 
   style={mystyle.Textinput}
   placeholder='Enter your email'
   value={phone}
   onChangeText={(text)=>SetPhone(text)}
   />
    <Text style={mystyle.label}>inter your number </Text>
  <TextInput 
   style={mystyle.Textinput}
   placeholder='Enter your phone number'
   value={email}
   onChangeText={(text)=>SetEmail(text)}
   />
    <Text style={mystyle.label}>how can we help you ?</Text>
  <TextInput 
   style={mystyle.Textinput}
   placeholder='tell us about your self'
   value={dis}
   onChangeText={(text)=>SetDis(text)}
   multiline={true}
   numberOfLines={5}
   />
</View>
<View style={mystyle.checkcandition}>
       <CheckBox
    value={agree}
    onValueChange={() => SetAgree(!agree)}
    //color={agree?"#4630EB":undefined} 
  />
      <Text style={mystyle.termandcan}> you can agree all the  term and candition</Text>
    </View>
<TouchableOpacity 
  disabled={!agree}
onPress={()=>submit()}
style={[mystyle.btn,
{
  backgroundColor: agree ? "#4630EB" : "grey" ,
}]}>
  <Text style={mystyle.btntext}> SEND</Text>

</TouchableOpacity>
    </View>
  )
}

export default Contact

const mystyle = StyleSheet.create({
 maincontainer:{
  flex:1,
  width:'90%',
  alignSelf:'center',
 },
 levelup:{
  color:'black',
  fontSize:20,
  textTransform:'capitalize',
  marginTop:15,
  fontWeight:'600'
 },
 reachanytime:{
  color:'grey',
  fontSize:17,
  textTransform:'capitalize',
  marginVertical:20

 },
 form:{
 
 },
 label:{
  fontSize:19,
  color:'black',
  fontWeight:'500'
,marginVertical:5
 },
 Textinput:{
  borderWidth:2,
  color:'blue',
  lineHeight:30,
  letterSpacing:1.4,
  borderRadius:5
 },
 checkcandition:{
  flexDirection:'row',gap:10,
  marginVertical:15
 },
 btn:{
  backgroundColor:'red',
  width:'90%',
  height:40,
  alignSelf:'center',
  justifyContent:'center'
  ,borderRadius:100
 },
 btntext:{
  fontSize:20,
  alignSelf:'center',
  color:'white'
 }
 

})