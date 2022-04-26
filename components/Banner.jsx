import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import {FiSearch} from 'react-icons/fi'
import ImageCard from './ImageCard';

const Banner = ({ purpose, imgUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <ImageCard src={imgUrl} alt={purpose} w={650} h={500} />
        <Box p={5}>
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="4xl" fontWeight="bold" color="brand.main">{title1}<br /> {title2}</Text>
            <Text color="brand.paragraph" fontSize="lg" paddingY={3}>{desc1} <br /> {desc2}</Text>
            <Button fontSize="lg" color="white" paddingY="1.5rem" fontWeight='extrabold' bg="brand.main" >
                <Link href={linkName} passHref >
                    <Flex alignItems="center" gap={2}>
                    {buttonText}  <FiSearch size="1.2rem" />
                    </Flex>
                </Link>
            </Button>
        </Box>
    </Flex>
)

export default Banner;