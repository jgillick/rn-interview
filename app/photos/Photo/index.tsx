import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import {APIPhoto} from '../../modules/Photos';

interface Props {
  memberId: string;
  photo: APIPhoto;
}

const Photo: React.FC<Props> = ({photo}) => {
  console.log(photo.url);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: photo.url}}
        resizeMode={'cover'}
      />
      <TouchableHighlight style={styles.delete}>
        <Text accessibilityRole="button" accessibilityLabel="Delete">❌</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
  },
  delete: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 30,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Photo;
