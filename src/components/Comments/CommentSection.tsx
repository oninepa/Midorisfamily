'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from './CommentSection.module.css';

interface Comment {
  id: number;
  content: string;
  userId: number;
  username: string;
  createdAt: string;
}

interface CommentSectionProps {
  photoId: number;
  initialComments: Comment[];
}

export default function CommentSection({ photoId, initialComments }: CommentSectionProps) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) {
      alert('댓글을 작성하려면 로그인이 필요합니다.');
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photoId,
          content: newComment,
        }),
      });

      if (response.ok) {
        const newCommentData = await response.json();
        setComments([...comments, newCommentData]);
        setNewComment('');
      }
    } catch (error) {
      console.error('댓글 작성 실패:', error);
      alert('댓글 작성에 실패했습니다.');
    }
  };

  return (
    <div className={styles.commentSection}>
      <h3>댓글</h3>
      {session ? (
        <form onSubmit={handleSubmit} className={styles.commentForm}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 작성해주세요"
            className={styles.commentInput}
          />
          <button type="submit" className={styles.submitButton}>
            작성
          </button>
        </form>
      ) : (
        <p className={styles.loginMessage}>댓글을 작성하려면 로그인해주세요.</p>
      )}
      
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <strong>{comment.username}</strong>
            <p>{comment.content}</p>
            <small>{new Date(comment.createdAt).toLocaleDateString('ko-KR')}</small>
          </div>
        ))}
      </div>
    </div>
  );
}