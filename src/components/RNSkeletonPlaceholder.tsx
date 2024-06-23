import React from 'react';
import { View, Animated, Easing } from 'react-native';
import styles from './styles';

const SkeletonPlaceholder = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <View>
      <View style={styles.skeletonCard}>
      <View style={styles.skeletonInfo}>
          <View style={styles.skeletonTitleContainer}>
            <Animated.View style={[styles.skeletonTitle, { transform: [{ translateX }] }]} />
          </View>
          <View style={styles.skeletonDescriptionContainer}>
            <Animated.View style={[styles.skeletonDescription, { transform: [{ translateX }] }]} />
          </View>
        </View>
        <View style={styles.skeletonThumbnail} />
       
      </View>
    </View>
  );
};

export default SkeletonPlaceholder;
