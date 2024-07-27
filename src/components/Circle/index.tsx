import React from 'react';

interface CircleProps {
  size?: number;
  color?: string;
  filled?: boolean;
}

const Circle: React.FC<CircleProps> = ({ size = 12, color = "white", filled = true }) => {
  const commonClasses = `flex items-center justify-center rounded-full`;
  const filledClasses = `bg-${color}`;
  const outlinedClasses = `border-2 border-${color}`;

  return (
    <div
      className={`${commonClasses} ${filled ? filledClasses : outlinedClasses}`}
      data-testid="circle"
      style={{ width: size, height: size }}
    ></div>
  );
};

export default Circle;