import React from 'react';

const Button = ({ className, src, alt }) => {
  return <input type="image" className={className} src={src} alt={alt} />;
};

export default Button;
