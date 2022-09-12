import React from 'react'
import { SimpleGrid,ChakraProvider } from '@chakra-ui/react'
import Card from './Card'

export default function Partners() {

  return (
   <SimpleGrid   id='Partners' columns={{ base: 1, md: 1, md: 2 }}   >
    <ChakraProvider> <Card  /></ChakraProvider>
    <ChakraProvider> <Card  /></ChakraProvider>
    <ChakraProvider> <Card  /></ChakraProvider>
    <ChakraProvider> <Card  /></ChakraProvider>

  </SimpleGrid>
  )


}
