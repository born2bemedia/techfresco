"use client";
import React, { useState, useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Percent = ({ percentageMax, prefix = "" }) => {
  const [percentage, setPercentage] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setPercentage(progress);
        if (progress >= percentageMax) clearInterval(interval);
      }, 10);
    }
  };

  return (
    <VisibilitySensor
      onChange={onVisibilityChange}
      partialVisibility={true}
      offset={{ top: 10, bottom: 10 }}
    >
      <div className="percent">
        {prefix}{percentage}%
      </div>
    </VisibilitySensor>
  );
};

export default Percent;
