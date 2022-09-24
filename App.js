/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Switch,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const onSwitchChanged = val => {
    setIsEnabled(val);
  }
  return (
    <SafeAreaView>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="#aaaaaa"
        hidden={false}
      ></StatusBar>
      <View style={{width: 150, height: 50, backgroundColor: 'cyan'}}>
        <Text>GODKING ONE</Text>
      </View>
      <Switch
        trackColor={{ false: "red", true: "purple" }}
        thumbColor={isEnabled ? "red" : "green"}
        ios_backgroundColor="grey"
        onValueChange={onSwitchChanged}
        value={isEnabled}
      />
    </SafeAreaView>
    
  );
};

export default App;
