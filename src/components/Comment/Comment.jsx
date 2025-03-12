import React from 'react';
import style from './Comment.module.scss';
import {newDate} from '../../helpers/newDate.js'

export const Comment = ({ comments }) => { 
  if (!comments || comments.length === 0) {
    return <p className={style.error}>No comments available.</p>;
  }

  return (
    <section className={style.comment}>
      {comments.map((item, index) => (
        <div key={index} className={style.commentItem}>
          <p>{item.user.firstname} (sælger) d.{newDate(item.createdAt)}</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </section>
  );
};
