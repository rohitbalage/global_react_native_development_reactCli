import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Sound from 'react-native-sound';
import Video from 'react-native-video';

const MediaHandlingScreen: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Audio Playback
  const playAudio = () => {
    const sound = new Sound(
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      '',
      (error) => {
        if (error) {
          Alert.alert('Error', 'Failed to load audio');
          return;
        }
        sound.play(() => {
          sound.release(); // Release the audio resource when done
        });
      }
    );
  };

  // Video Playback
  const onVideoEnd = () => {
    setIsVideoPlaying(false);
    Alert.alert('Video', 'Playback Finished');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Media Handling</Text>

      {/* Audio Playback */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Audio Playback</Text>
        <TouchableOpacity style={styles.button} onPress={playAudio}>
          <Text style={styles.buttonText}>Play Audio</Text>
        </TouchableOpacity>
      </View>

      {/* Video Playback */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Video Playback</Text>
        <Video
          source={{
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          }}
          style={styles.video}
          controls={true}
          paused={!isVideoPlaying}
          onEnd={onVideoEnd}
        />
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsVideoPlaying(true)}
          >
            <Text style={styles.buttonText}>Play Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsVideoPlaying(false)}
          >
            <Text style={styles.buttonText}>Pause Video</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default MediaHandlingScreen;
