'use client';

import Image from "next/image"

const Logo: React.FC = (): JSX.Element => {
  return (
    <Image 
      alt="Airbnb logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src='/images/logo.png'
    />
  )
}

export default Logo