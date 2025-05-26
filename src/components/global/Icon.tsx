import { IconsFamily } from '../../types/Enum';
import React, { FC } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



interface IconProps {
  color?: string;
  size: number;
  name: string;
  iconsFamily: IconsFamily;
}

const Icon: FC<IconProps> = ({color, size, name, iconsFamily}) => {
  return (
    <>
      {iconsFamily === IconsFamily.Ionicons && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {iconsFamily === IconsFamily.MaterialIcons && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {iconsFamily === IconsFamily.MaterialCommunityIcons && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
    </>
  );
};

export default Icon;
