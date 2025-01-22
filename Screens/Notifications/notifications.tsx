import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const NotificationScreen: React.FC = () => {
  const [notification, setNotification] = useState({
    visible: false,
    type: '',
    message: '',
  });

  const slideAnim = useRef(new Animated.Value(-100)).current; // Use useRef to persist animation value

  // Function to show a notification
  const showNotification = (type: string, message: string) => {
    setNotification({ visible: true, type, message });
    Animated.timing(slideAnim, {
      toValue: 0, // Slide into view
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  // Function to hide a notification
  const hideNotification = () => {
    Animated.timing(slideAnim, {
      toValue: -100, // Slide out of view
      duration: 300,
      useNativeDriver: true,
    }).start(() => setNotification({ ...notification, visible: false }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>In-App Notifications</Text>

      {/* Success Notification Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => showNotification('success', 'Operation Successful!')}
      >
        <Text style={styles.buttonText}>Show Success Notification</Text>
      </TouchableOpacity>

      {/* Error Notification Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => showNotification('error', 'An Error Occurred!')}
      >
        <Text style={styles.buttonText}>Show Error Notification</Text>
      </TouchableOpacity>

      {/* Warning Notification Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'orange' }]}
        onPress={() => showNotification('warning', 'This is a Warning!')}
      >
        <Text style={styles.buttonText}>Show Warning Notification</Text>
      </TouchableOpacity>

      {/* Info Notification Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => showNotification('info', 'This is an Info Message!')}
      >
        <Text style={styles.buttonText}>Show Info Notification</Text>
      </TouchableOpacity>

      {/* Notification Bar */}
      <Animated.View
        style={[
          styles.notification,
          notification.visible ? styles[notification.type] : null, // Apply dynamic style based on type
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.notificationText}>{notification.message}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 15,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
  warning: {
    backgroundColor: 'orange',
  },
  info: {
    backgroundColor: 'blue',
  },
});

export default NotificationScreen;
