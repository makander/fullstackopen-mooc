import React from 'react';

const Notification = ({ message, person, status }) => {
  if (message === null) {
    return null;
  } else {
    return (
      <div className={status}>
        {person} {message}
      </div>
    );
  }
};

export default Notification;
