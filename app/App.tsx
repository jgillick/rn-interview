/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import GalleryScreen from './profile/GalleryScreen';

declare const global: {HermesInternal: null | {}};

////////////////////////////////////////////////////////////////////////////////
// INTERVIEW NOTES: START WITH THIS COMPONENT FOR YOUR IMPLEMENTATION
////////////////////////////////////////////////////////////////////////////////
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.galleryView}>
          <GalleryScreen memberId={'1'} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  galleryView: {
    marginTop: 50,
  },
});

export default App;
