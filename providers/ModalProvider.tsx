"use client"

import AuthModal from '@/components/AuthModal';
import SubscribeModal from '@/components/SubscribeModal';
import UploadModal from '@/components/UploadModal';
import { MyUserContextProvider } from '@/hooks/useUser';
import { ProductWithPrice } from '@/types';
import React, { useEffect, useState } from 'react'

interface ModalProviderProps {
  products: ProductWithPrice[];
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  products,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <MyUserContextProvider>
        <UploadModal />
      </MyUserContextProvider>
      <MyUserContextProvider>
        <SubscribeModal products={products}/>
      </MyUserContextProvider>
    </>
  )
}

export default ModalProvider;