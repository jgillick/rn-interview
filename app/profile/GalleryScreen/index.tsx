import React from 'react';

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
    Photos.get(memberId)
      .then(setPhotos)
      .catch(() => setError(true));
  }, [memberId]);

  return <Gallery memberId={memberId} photos={photos} />;
};
export default GalleryScreen;
