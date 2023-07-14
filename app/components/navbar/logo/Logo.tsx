'use client';

import Image from "next/image"
import { useRouter } from "next/navigation";

const Logo: React.FC = (): JSX.Element => {
  const router = useRouter()

  return (
    <Image 
      onClick={() => router.push('/')}
      alt="Airbnb logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src='/images/logo.png'
    />
  )
}

export default Logo