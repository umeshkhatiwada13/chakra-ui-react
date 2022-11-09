import React from 'react';
import { Container, Heading, Stack, Text, Image } from '@chakra-ui/react';
import img5 from '../assets/5.png';


const PageNotFound = () => {
    return (
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading
                textTransform={'uppercase'}
                py="2"
                w={'fit-content'}
                borderBottom={'2px solid'}
                m="auto">
                Page Not Found
            </Heading>
            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                <Text
                    letterSpacing={'widest'}
                    lineHeight={'190%'}
                    p={['4', '16']}
                    textAlign={'center'}
                >
                    Sorry! No page found for given URL 
                </Text>
            </Stack>
        </Container>
    )
}

export default PageNotFound;