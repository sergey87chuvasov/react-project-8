import React from 'react';
import classes from './FinishQuize.module.css';

const FinishQuize = (props) => {
  return (
    <div className={classes.FinishQuize}>
      <ul>
        <li>
          <strong>1. </strong>
          How are You
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>2. </strong>
          How are You
          <i className={'fa fa-check ' + classes.success} />
        </li>
      </ul>
      <p>Правильно 4 из 10</p>
      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishQuize;
