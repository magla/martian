import useConsoleLog from 'hooks/useConsoleLog';
import * as React from 'react';

const componentName = 'Logo';

const Logo = () => {
  useConsoleLog(componentName);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="40"
      height="40"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#e25033"
        stroke="none"
      >
        <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0 -2560z m2380 815 l0 -265 180 0 180 0 0 265 0 265 755 0 755 0 0 -1080 0 -1080 -282 2 -283 3 -3 808 -2 807 -185 0 -185 0 0 -810 0 -810 -285 0 -285 0 -2 543 -3 542 -175 0 -175 0 -3 -542 -2 -543 -285 0 -285 0 0 810 0 810 -185 0 -185 0 -2 -807 -3 -808 -282 -3 -283 -2 0 1080 0 1080 755 0 755 0 0 -265z" />
      </g>
    </svg>
  );
};

export default Logo;
