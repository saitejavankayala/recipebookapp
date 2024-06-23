import React, { Children } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import RNText from "./RNText";

export type Props = {
    styleText?: any;
    style?: any;
    numberOfLines?: number;
    activeOpacity?: number;
    onPress?: () => void;
    disabled?: boolean;
    buttonText: string

};

const RNButton: React.FC<Props> = (props: Props) => {
    const { buttonText, style, onPress, styleText } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={onPress}
            {...props}
            style={[styles.button, style]}
        >
            <RNText style={[styles.buttonText, styleText]}>{buttonText}</RNText>
        </TouchableOpacity>
    );
};

export default RNButton;
