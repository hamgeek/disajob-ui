// app/providers.tsx
'use client'

import { useDisability } from '@/store'
import { Box, ChakraProvider } from '@chakra-ui/react'


export function Providers({ children }) {

  const grayscale = useDisability((state) => state.grayscale);

  return <ChakraProvider>
    <Box filter={grayscale === 'on'? 'grayscale(1)':'none'}>
      {children}
    </Box>
  </ChakraProvider>
}