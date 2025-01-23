import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapsGeolocationScreen: React.FC = () => {
  // Markers data
  const markers = [
    {
      title: 'Detroit',
      coordinates: { latitude: 42.3314, longitude: -83.0458 },
    },
    {
      title: 'Cleveland',
      coordinates: { latitude: 41.4993, longitude: -81.6944 },
    },
    {
      title: 'Washington DC',
      coordinates: { latitude: 38.9072, longitude: -77.0369 },
    },
    {
      title: 'New York',
      coordinates: { latitude: 40.7128, longitude: -74.006 },
    },
    {
      title: 'Baltimore',
      coordinates: { latitude: 39.2904, longitude: -76.6122 },
    },
    {
      title: 'Philadelphia',
      coordinates: { latitude: 39.9526, longitude: -75.1652 },
    },
  ];

  return (
    <View style={styles.container}>
      {/* Google Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.7128,
          longitude: -75.1652,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        {/* Render Markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
            description={`${marker.title} Marker`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Makes the map fill the entire screen
  },
});

export default MapsGeolocationScreen;
