import React from 'react';
import style from './Comment.module.scss';
import {newDate} from '../../helpers/newDate.js'

export const Comment = ({ comment }) => { 
  if (!comment || comment.length === 0) {
    return <p className={style.error}></p>;
  }

  return (
    <section className={style.comment}>
      {comment.map((item, index) => (
        <div key={index} className={style.commentItem}>
          <p className={style.commentUser}>{item.user.firstname} d.{newDate(item.createdAt)}</p>
          <p className={style.commentText}>{item.comment}</p>
        </div>
      ))}
    </section>
  );
};
