import {Text, View} from 'react-native';
import React from 'react';
import Post from "../../components/Post"
import posts from "../../data/posts"

import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      <Post post={posts[0]} />
    </View>
  );
};

export default HomeScreen;
