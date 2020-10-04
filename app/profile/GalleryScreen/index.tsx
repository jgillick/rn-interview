import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Photos from '../../modules/Photos';
import Gallery from '../../photos/Gallery';

interface Props {
  memberId: string;
};

const GalleryScreen: React.FC<Props> = ({memberId}) => {
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [hasError, setError] = React.useState(false);

  // Load images
  React.useEffect(() => {
    loadImages();
  }, [memberId]);

  /**
   * Load images from the server
   */
  const loadImages = () => {
    setLoading(true);
    Photos.get(memberId)
      .then((photos) => {
        setLoading(false);
        setPhotos(photos);
      })
      .catch(() => setError(true));
  };

  /**
   * Add a new image to the gallery
   */
  const addImage = () => {
    Photos.post(memberId, {})
      .then(() => loadImages())
      .catch(() => setError(true));
  };

  /**
   * Remove an image
   */
  const photoDeleteHandler = (photoId) => {
    Photos.delete(memberId, photoId)
      .then(() => loadImages())
      .catch(() => setError(true));
  };

  return (
    <View>
      <TouchableHighlight onPress={addImage} style={styles.addButton}>
        <Text accessibilityRole="button" accessibilityLabel="Add">
          Add Image
        </Text>
      </TouchableHighlight>
      <View style={styles.gallery}>
        <Gallery
          memberId={memberId}
          photos={photos}
          photoDeleteHandler={photoDeleteHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gallery: {
    height: 800,
  },
  addButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
});

export default GalleryScreen;
