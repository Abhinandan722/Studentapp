import react, {useEffect}from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Introstudentapp=()=>{
    const navigation=useNavigation();
     useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('home')
         
         
    },3000)
     },[])
return(

    <View style={mystyle.main}>
        <Text style={mystyle.student}> Education</Text>
        <Text style={[mystyle.student,mystyle.app]}>App</Text>
        <View style={mystyle}>
             <Text></Text></View>
    </View>
);
}
const mystyle=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        ,flexDirection:'row'
    },
    student:{
        fontSize:50,
        fontWeight:'800',
        color:'red',
    letterSpacing:3
    },
    app:{
        fontSize:40
        ,marginHorizontal:4,
        fontWeight:'600',
        color:'black'

    }
})
export default Introstudentapp;