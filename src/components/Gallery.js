import React, { useState, useEffect } from 'react';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  
  return (
    <div className="gallery-container">
      <h2>최신 사진</h2>
      <div className="photo-grid">
        {photos.slice(0, 10).map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.description} />
            <div className="photo-info">
              <p>{photo.description}</p>
              <CommentSection photoId={photo.id} />
            </div>
          </div>
        ))}
      </div>
      <button className="upload-btn">사진 업로드</button>
    </div>
  );
}

export default Gallery;