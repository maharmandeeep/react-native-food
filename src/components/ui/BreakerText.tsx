import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {loginStyles} from '@unistyles/authStyles';
import {useStyles} from 'react-native-unistyles';
import CustomText from '@components/global/CustomText';

interface BreakerTextProps {
  text: string;
}

const BreakerText: FC<BreakerTextProps> = ({text}) => {
  // This component is used to break the text into multiple lines
  const {styles} = useStyles(loginStyles);
  return (
    <View style={styles.breakerContainer}>
      <View style={styles.horizontalLine}></View>
      <CustomText
        fontSize={12}
        style={styles.breakerText}
        fontFamily="Okra-Medium">
        {text}
      </CustomText>
      {/* <View style={styles.horizontalLine}></View> */}
    </View>
  );
};

export default BreakerText;
