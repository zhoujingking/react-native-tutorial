import React, { useEffect, useRef, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Animated
} from 'react-native';

import { v4 as uuid } from 'uuid';
import { TabView, SceneMap } from 'react-native-tab-view';

const getList = () => {
  return [
    {
      id: uuid(),
    },
    {
      id: uuid(),
    },
    {
      id: uuid(),
    },
    {
      id: uuid(),
    },
    {
      id: uuid(),
    }
  ]
}




const HomeScreen = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(getList());
  }, []);
  const onLoadMore = () => {
    setList(pre => pre.concat(getList()))
  };

  const heightAni = useRef(new Animated.Value(50)).current;
  const onScroll = ({nativeEvent}) => {
    const { contentOffset } = nativeEvent;
    if (contentOffset.y <= 10) {
      Animated.timing(heightAni, {
        toValue: 50,
        duration: 100,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(heightAni, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }).start();
    }
  }

  const FirstRoute = () => (
    <FlatList
      data={list}
      renderItem={(item) => <Text>item</Text>}
      onEndReached={onLoadMore}
      onScroll={onScroll}
    >
    </FlatList> 
  );
  
  const SecondRoute = () => (
    <FlatList
      data={list}
      renderItem={(item) => <Text>item</Text>}
      onEndReached={onLoadMore}
      onScroll={onScroll}
    >
    </FlatList> 
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        height: 32,
        alignItems: 'center',
        backgroundColor: 'cyan'
      }}>
        <Text>Search Text Box, need to be fixed at top</Text>
      </View>
      <Animated.View style={{ height: heightAni, backgroundColor: 'grey' }}>
        <Text>Topic Arear</Text>
      </Animated.View>
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
