import React from 'react';
import {StyleSheet} from 'react-native';
import {DraggableGrid} from 'react-native-draggable-grid';

import {APIPhoto} from '../../modules/Photos';
import Photo from '../Photo';

interface Props {
  memberId: string;
  photos: APIPhoto[];
  photoDeleteHandler: Function;
};

interface DragableItem {
  key: string,
  data: APIPhoto;
}

const Gallery: React.FC<Props> = ({photos, memberId, photoDeleteHandler}) => {
  // Return a single photo component for the draggable grid
  const renderPhoto = ({data}: DragableItem) => (
    <Photo
      key={data.id}
      photo={data}
      memberId={memberId}
      photoDeleteHandler={photoDeleteHandler}
    />
  );

  // Create draggable grid item data
  const draggableData: DragableItem[] = photos.map((photo) => ({
    key: photo.id,
    data: photo,
  }));

  return (
    <DraggableGrid
      numColumns={3}
      renderItem={renderPhoto}
      data={draggableData}
      style={styles.grid}
      onItemPress={() => console.log('pressed')}
      onDragRelease={() => console.log('released')}
    />
  );
};

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  },
  grid: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default Gallery;