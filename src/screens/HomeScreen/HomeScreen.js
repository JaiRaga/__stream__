import {Dimensions, FlatList, StatusBar, Text, View} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import Post from '../../components/Post';
import posts from '../../data/posts';

import styles from './styles';

const HomeScreen = () => {
  const bottomTabHeight = useBottomTabBarHeight();
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={
          Dimensions.get('window').height -
          (StatusBar.currentHeight + bottomTabHeight)
        }
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default HomeScreen;
