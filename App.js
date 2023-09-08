import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from './src/Homepage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Introstudentapp from './src/intro'
import About from './src/About'
import Contact from './src/Contact'
import Course from './src/Course'
import Userdata from './src/Userdata'
import Coursedetial from './src/coursedetial'


const App = () => {
    const stack=createNativeStackNavigator();
    return(
        
 <NavigationContainer>
    <stack.Navigator>

    <stack.Screen
          options={{headerShown:false}}
          
          
          name='intro' component={Introstudentapp}/>
        <stack.Screen
          options={{headerShown:false}}
          name='home' component={Home}/>
          {/* this is menu */}
          <stack.Screen
          options={{headerTitleAlign:'center',headerTitleStyle:{fontSize:35,fontFamily:'Nunito-Bold'}}}
          name='About' component={About}/>
           <stack.Screen
          options={{headerTitleAlign:'center',headerTitleStyle:{fontSize:35,fontFamily:'Nunito-Bold'}}}
          name='Contact' component={Contact}/>
           <stack.Screen
          options={{headerTitleAlign:'center',headerTitleStyle:{fontSize:35,fontFamily:'Nunito-Bold'}}}
          name='Course' component={Course}/>
           <stack.Screen
          options={{headerTitleAlign:'center',headerTitle:'Student',headerTitleStyle:{fontSize:35,fontFamily:'Nunito-Bold'}}}
          name='Userdata' component={Userdata}/>
            <stack.Screen
          options={{headerTitleAlign:'center',headerTitle:'Course detial',headerTitleStyle:{fontSize:35,fontFamily:'Nunito-Bold'}}}
          name='coursedetial' component={Coursedetial}/>
           {/* this is menu */}
    </stack.Navigator>
 </NavigationContainer>
            


    );

}

export default App;

