import React from 'react';

export function ReactIcon(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="0"
        cy="0"
        r="2"
      ></circle>
      <g
        stroke={props.fill}
        strokeWidth="1"
        fill="none"
      >
        <ellipse
          rx="10"
          ry="4.5"
        ></ellipse>
        <ellipse
          rx="10"
          ry="4.5"
          transform="rotate(60)"
        ></ellipse>
        <ellipse
          rx="10"
          ry="4.5"
          transform="rotate(120)"
        ></ellipse>
      </g>
    </svg>
  );
}
