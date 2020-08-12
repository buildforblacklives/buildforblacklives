import React from 'react';

const LoadingSpinner = () => (
  <div className="justify-content-center d-flex mt-3 mb-3">
    <svg
      svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      version="1.0"
      width="200px"
      height="200px"
      viewBox="0 0 128 128"
      space="preserve"
    >
      <rect x="0" y="0" width="100%" height="100%" />
      <g>
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#000000"
          fillOpacity="1"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(45 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(90 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(135 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(180 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(225 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(270 64 64)"
        />
        <path
          d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z"
          fill="#878680"
          fillOpacity="0.25"
          transform="rotate(315 64 64)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64"
          calcMode="discrete"
          dur="720ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  </div>
);

export default LoadingSpinner;
