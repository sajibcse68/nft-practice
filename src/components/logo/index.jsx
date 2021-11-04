import React from 'react';
import Image from 'next/image';

export const Logo = ({ src, width, height }) => {
  return <Image src={src} alt="hyype" width="117px" height="39px" />;
};
