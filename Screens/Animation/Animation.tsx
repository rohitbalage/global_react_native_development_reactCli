import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing, ScrollView } from 'react-native';

const AnimationScreen: React.FC = () => {
  // Separate animation values for different animations
  const fadeAnim = useRef(new Animated.Value(0)).current; // For fade animation
  const scaleAnim = useRef(new Animated.Value(1)).current; // For scale animation
  const translateAnim = useRef(new Animated.Value(0)).current; // For translate animation
  const rotateAnim = useRef(new Animated.Value(0)).current; // For rotate animation
  const loopAnim = useRef(new Animated.Value(1)).current; // For loop animation (separate)

  const [looping, setLooping] = useState(false);

  // Fade In Animation
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Fade Out Animation
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Scale Animation
  const scaleUp = () => {
    Animated.timing(scaleAnim, {
      toValue: 1.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // Translate Animation
  const slide = () => {
    Animated.timing(translateAnim, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
  };

  // Rotate Animation
  const rotate = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => rotateAnim.setValue(0));
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Looping Animation
  const startLoop = () => {
    setLooping(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(loopAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(loopAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const stopLoop = () => {
    setLooping(false);
    loopAnim.stopAnimation(); // Stop the animation
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Animation Examples</Text>

      {/* Fade Animation */}
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.boxText}>Fade</Text>
      </Animated.View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text style={styles.buttonText}>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.buttonText}>Fade Out</Text>
        </TouchableOpacity>
      </View>

      {/* Scale Animation */}
      <Animated.View style={[styles.box, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.boxText}>Scale</Text>
      </Animated.View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={scaleUp}>
          <Text style={styles.buttonText}>Scale Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scaleDown}>
          <Text style={styles.buttonText}>Scale Down</Text>
        </TouchableOpacity>
      </View>

      {/* Translate Animation */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: translateAnim }] }]}
      >
        <Text style={styles.boxText}>Slide</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={slide}>
        <Text style={styles.buttonText}>Slide</Text>
      </TouchableOpacity>

      {/* Rotate Animation */}
      <Animated.View
        style={[styles.box, { transform: [{ rotate: rotateInterpolate }] }]}
      >
        <Text style={styles.boxText}>Rotate</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={rotate}>
        <Text style={styles.buttonText}>Rotate</Text>
      </TouchableOpacity>

      {/* Loop Animation */}
      <Animated.View style={[styles.box, { transform: [{ scale: loopAnim }] }]}>
        <Text style={styles.boxText}>Loop</Text>
      </Animated.View>
      <TouchableOpacity
        style={styles.button}
        onPress={looping ? stopLoop : startLoop}
      >
        <Text style={styles.buttonText}>
          {looping ? 'Stop Loop' : 'Start Loop'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'skyblue',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AnimationScreen;
