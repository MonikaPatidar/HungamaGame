import React from 'react';

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div>Too lale...</div>;
  }

  return (
    <div>
      <div>Remaining</div>
      <div>{remainingTime}</div>
      <div>seconds</div>
    </div>
  );
};

function Timer() {
  return (

      <div>
        <CountdownCircleTimer
          isPlaying
          duration={100}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 10000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      
   
  );
}

export default Timer;