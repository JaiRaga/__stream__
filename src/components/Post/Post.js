import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Post = props => {
  const [paused, setPaused] = useState(true);

  const {post} = props;

  const onPlayPausePress = () => {
    // console.warn('play/pause');
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      {/* Video player */}
      <TouchableWithoutFeedback
        onPress={onPlayPausePress}
        style={styles.videoPlayBtn}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            style={styles.video}
            onError={err => console.log(err)}
            resizeMode="cover"
            repeat={true}
            paused={paused}
          />

          <View style={styles.interactionContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: post.user.imageUri,
                  }}
                />
              </View>
              {/* Icon container */}
              <View style={styles.iconContainer}>
                <FontAwesome name="heart" size={40} color="white" />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Foundation name="comment" size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="share" size={40} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>
            {/* User info container */}
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songContainer}>
                  {/* Icon */}
                  <Entypo name="beamed-note" size={24} color="white" />
                  {/* name */}
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songImg}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
