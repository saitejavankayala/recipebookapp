import React from "react";
import { TextInput, TextInputProps } from "react-native";
import colors from "../utility/colors";

export type Props = TextInputProps & {
  isMultiline?: boolean;
  placeHolder?: string;
  inputValue?: string;
};

const RNTextInput: React.FC<Props> = ({
  numberOfLines,
  isMultiline = false,
  placeHolder,
  inputValue,
  onChangeText,
  editable = true,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  ...rest
}) => {
  return (
    <TextInput
      editable={editable}
      keyboardType={keyboardType}
      placeholder={placeHolder}
      value={inputValue}
      onChangeText={onChangeText}
      multiline={isMultiline}
      secureTextEntry={secureTextEntry}
      style={style}
      placeholderTextColor={colors.BLACK_COLOR}
      numberOfLines={numberOfLines}
      {...rest}
    />
  );
};

export default RNTextInput;
