import React from 'react';
import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswerList = (props) => {
  return (
    <ul className={classes.AnswerList}>
      {/*get from props array with answers to the question */}
      {props.answers.map((answer, index) => {
        return <AnswerItem key={index} answer={answer} />;
      })}
    </ul>
  );
};

export default AnswerList;
