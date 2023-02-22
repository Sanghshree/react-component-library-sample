const Rectangle = ({ width, height }) => {
  return (
    <svg
      width={width || 28}
      height={height || 29}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="28" height="28" fill="#D9D9D9" />
    </svg>
  );
};

export default Rectangle;
