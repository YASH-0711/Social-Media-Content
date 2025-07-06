import React from 'react';
import  './Event.css';

const Event = ({ title }) => {
  return (
    <div className={'eventItem'}>
      <span className={'eventIcon'}>📅</span>
      {title}
    </div>
  );
};

export default Event;