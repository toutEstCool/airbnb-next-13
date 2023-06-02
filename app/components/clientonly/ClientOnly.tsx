'use client';

import React, { useEffect } from 'react'
import { IPropsClientOnly } from './IProps'

const ClientOnly: React.FC<IPropsClientOnly> = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null;
  }
  return (
    <>
    {children}
    </>
  )
}

export default ClientOnly