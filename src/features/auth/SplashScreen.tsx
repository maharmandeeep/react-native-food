import { View, Text, StatusBar, Platform, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { splashStyles } from '@unistyles/authStyles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen = () => {

    const {styles} = useStyles(splashStyles)

    useEffect(() => {
      const timer= setTimeout(()=>{
        resetAndNavigate("LoginScreen")
        console.log("SplashScreen mounted");

      }, 2000);
      return ()=>{
        clearTimeout(timer);
        console.log("SplashScreen unmounted");
      }
    }, [])
  return (
    <View style={styles.container}>
      {/* <Text>SplashScreen thisi si the first</Text> */}
      <StatusBar hidden={Platform.OS !== "android"}/>
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage} />
        <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(400).duration(500)}>
          <Image source={require("@assets/images/tree.png")} style={styles.treeImage}/>

          
        </Animated.View>
        <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(500).duration(600)}>
          <CustomText variant='h5' style={styles.msgText} fontFamily='Okra-Medium' color='#fff'>From Kitchen to doorstep , Your craving , delivered</CustomText>
        </Animated.View>
    </View>
  )
}

export default SplashScreen     