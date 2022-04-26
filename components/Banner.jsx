import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import ImageCard from './ImageCard';

const Banner = ({ purpose, imgUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <ImageCard src={imgUrl} alt={purpose} w={500} h={500} />
        <Box p={5}>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3xl" fontWeight="bold">{title1}<br /> {title2}</Text>
            <Text color="gray.700" fontSize="lg" paddingY={3}>{desc1} <br /> {desc2}</Text>
            <Button fontSize="lg" color="white" bg="blue.300" bgGradient='linear(to-r,  #005c97, #363795)'
                fontWeight='extrabold'>
                <Link href={linkName}>
                    {buttonText}
                </Link>
            </Button>
        </Box>
    </Flex>
)

export default Banner;