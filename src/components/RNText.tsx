import React from "react";
import { Text } from "react-native";

export type Props = {
  children: any;
  style?: any;
  onPress?: () => void;
  numberOfLines?: number;
  ellipsizeMode?:string;
};

const RNText: React.FC<Props> = (props) => {
  const { children, numberOfLines, style, onPress,ellipsizeMode } = props;

  return (
    <Text allowFontScaling={false} numberOfLines={numberOfLines} onPress={onPress} style={style} ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
};

export default RNText;
