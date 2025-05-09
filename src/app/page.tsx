'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: number;
  imageUrl: string;
  description: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  createdAt: string;
}

interface Comment {
  id: number;
  content: string;
  author: string;
  createdAt: string;
}

export default function Home() {
  const [recentPhotos, setRecentPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // 실제 구현에서는 API를 통해 최신 사진을 가져옵니다
    fetchRecentPhotos();
  }, []);

  const fetchRecentPhotos = async () => {
    try {
      // 임시 데이터 - 실제로는 API에서 가져와야 합니다
      const photos = [/* 여기에 실제 데이터가 들어갑니다 */];
      setRecentPhotos(photos);
    } catch (error) {
      console.error('사진을 불러오는데 실패했습니다:', error);
    }
  };

  return (
    <div className="home-container">
      <h2 className="recent-photos-title">최근 추가된 사진 | Photos récentes</h2>
      <div className="recent-photos-grid">
        {recentPhotos.slice(0, 6).map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="photo-wrapper">
              <Image
                src={photo.imageUrl}
                alt="고양이 사진"
                width={400}
                height={400}
                objectFit="cover"
                className="flower-frame"
              />
            </div>
            <div className="photo-info">
              <div className="photo-actions">
                <button className="like-button">❤️ {photo.likes}</button>
                <button className="dislike-button">👎 {photo.dislikes}</button>
              </div>
              <div className="comments-preview">
                {photo.comments.length > 0 && (
                  <p>댓글 {photo.comments.length}개</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/gallery" className="view-more-button">
        더 많은 사진 보기 | Voir plus de photos
      </Link>
    </div>
  );
}
