import React from 'react';
import FastImage, { Source, ResizeMode } from 'react-native-fast-image';

export type Props = {
    source: Source,
    style?: any,
    resizeMode?: ResizeMode
}

const RNFastImage: React.FC<Props> = ({ source, style, resizeMode = FastImage.resizeMode.cover, ...rest }) => {
    return (
        <FastImage
            source={source}
            style={style}
            resizeMode={resizeMode}
            {...rest}
        />
    );
};

export default RNFastImage;
