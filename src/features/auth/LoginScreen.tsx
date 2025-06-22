import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {loginStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';
import { resetAndNavigate } from '@utils/NavigationUtils';

const LoginScreen: FC = () => {
    const animatedValuess = useRef(new Animated.Value(0)).current;
    const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const {styles} = useStyles(loginStyles);

  const [Phone, setPhone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    // setLoading((prev) => !prev);
    // console.log('Phone number entered:', Phone);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to the next screen or perform login action
      console.log('Phone number entered:', Phone);
      resetAndNavigate('UserBottomTab')
    }, 2000); // Simulate a network request delay
  };

  useEffect(() => {
    if (keyboardOffsetHeight == 0) {
      Animated.timing(animatedValuess, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValuess, {
        toValue: -keyboardOffsetHeight * 0.45, // Adjust the value to control how much the view moves up
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffsetHeight]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <View style={styles.cover}>
        <Image
          source={require('@assets/images/login.png')}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode={'none'}
        showsVerticalScrollIndicator={false}
        style={{transform: [{translateY: animatedValuess}]}}
        contentContainerStyle={styles.bottomContainer}>
        <CustomText fontFamily="Okra-Bold" variant="h3" style={styles.title}>
          Welcome to the App! Please login to continue.
        </CustomText>
        <BreakerText text="Log in or sign up"></BreakerText>
        <PhoneInput value={Phone} onChangeText={setPhone}></PhoneInput>

        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={loading }
          onPress={handleLogin}
          activeOpacity={0.7}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText
              color="#fff"
              fontFamily="Okra-Medium"
              variant="h5"> Continue</CustomText>
          )}
        </TouchableOpacity>

        <BreakerText text="or"></BreakerText>
      </Animated.ScrollView>
      {keyboardOffsetHeight === 0 && ( // Only show footer when keyboard is closed
      <View style={styles.footer}>
        <CustomText>by continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms and service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    )}

    </View>
  );
};

export default LoginScreen;
