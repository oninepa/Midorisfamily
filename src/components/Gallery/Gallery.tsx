import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import styles from './Gallery.module.css';

interface Photo {
  id: number;
  imageUrl: string;
  description: string;
  userId: number;
  createdAt: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/photos');
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('사진을 불러오는데 실패했습니다:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>로딩중...</div>;

  return (
    <div className={styles.gallery}>
      <h2>최신 사진</h2>
      <div className={styles.photoGrid}>
        {photos.slice(0, 10).map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}