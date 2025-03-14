import React, { useState } from 'react';
import style from './Comment.module.scss';
import {newDate} from '../../helpers/newDate.js'

export const Comment = ({comment}) => { 


  return (
    <section className={style.comment}>
      {comment.map((item, index) => (
        <div key={index} className={style.commentItem}>
          <p>{item.owner}</p>
          <p className={style.commentUser}>{item.user.firstname} d.{newDate(item.createdAt)}</p>
          <p className={style.commentText}>{item.comment}</p>
        </div>
      ))}
    </section>
  );
};
