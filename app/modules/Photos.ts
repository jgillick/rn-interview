
export interface APIPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

// Helper to construct the API endpoint URI
const createUri = (memberId: string, photoId: string = '') =>
  `http://localhost:3000/member/${memberId}/photos/${photoId}`;

const Photos = {
  /**
   * Get a list of photos.
   * @param {String} memberId
   * @yields {APIPhoto[]}
   */
  get(memberId: string) {
    const url = createUri(memberId);
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        // First item in the array is the current photo list.
        return data[0].photos;
      });
  },

  /**
   * Add a new photos
   */
  post(memberId: string, data: APIPhoto) {
    const url = createUri(memberId);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },

  /**
   * Delete a photo
   */
  delete(memberId: string, photoId: string) {
    const url = createUri(memberId, photoId);
    return fetch(url, {method: 'DELETE'}).then((res) => res.json());
  },
};
export default Photos;