import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card() {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.800')}
          border={'4px'}
          borderColor={'#FFCC00' }
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://th.bing.com/th/id/R.181891eaac1d085d057069e40098a004?rik=wp%2fvDFautuZTdw&pid=ImgRaw&r=0'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
               محمد عبده
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              اخر لقب
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام كلام  كلام كلام  كلام كلام كلام
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#FFCC00'}  
                fontWeight={'400'}>
                اسم جمل
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FFCC00'}  
                fontWeight={'400'}>
                اسم جمل
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FFCC00'}  
                fontWeight={'400'}>
                اسم جمل
              </Badge>
            </Stack>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
          <Button
              fontSize={'m'}
              fontWeight={1000}
              color={'white'}
              href={'#'}
              bg={'#FFCC00'}     
              _hover={{
                bg: 'white',
                border:'2px',
                borderColor:'#FFCC00' ,  
                 color:'#FFCC00'
              }}>
              راسلني
            </Button>
              <Button
              as={'a'}
              fontSize={'m'}
              fontWeight={1000}
              color={useColorModeValue('#3E3E3E', 'white')}
              variant={'link'}
              href={'#'}>
              ملف الشخصي
            </Button>
     
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }