import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { BiBath } from 'react-icons/bi';
import { MdBed } from 'react-icons/md';
import { GoVerified } from 'react-icons/go';
import millify from 'millify'

import { fetchApi, baseUrl } from '../../utils/fetchApi'
import ImageScrollBar from '../../components/ImageScrollBar';

export default function propertyDetails({ propertyDetails: { price,contactName, rentFrequency, rooms, title, baths, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) {
    return (
        <Box maxWidth="1000px" margin="auto" p="4">
            {photos && <ImageScrollBar data={photos} />}
            <Box w='full' p='6'>
                <Flex paddingTop='2' alignItems='center'>
                    <Flex alignItems='center' flexDirection="row">
                            <Text marginRight={2} color="brand.main" fontWeight='bold' fontSize='lg'>{contactName}</Text>
                            <Text fontWeight='bold' fontSize='2xl' color="brand.main">${millify(price)}</Text>
                            <Text p={1} fontSize='sm' fontWeight="medium" color="brand.paragraph" >
                                {rentFrequency && `/${rentFrequency}`}
                            </Text>
                    </Flex>
                    <Spacer />
                    <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                </Flex>
                <Flex alignItems='center' gap={2} w='300px' color='brand.main'>
                    <MdBed size="20px" /> <Text color="brand.paragraph">{rooms} Beds</Text>
                    |<BiBath size="20px" /><Text color="brand.paragraph"> {baths} Bathrooms</Text>
                </Flex>
            </Box>
            <Box marginTop='2'>
                <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
                <Text lineHeight='2' color='gray.600'>{description}</Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Type</Text>
                    <Text fontWeight='bold'>{type}</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                        <Text>Furnishing Status</Text>
                        <Text fontWeight='bold'>{furnishingStatus}</Text>
                    </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                <Flex flexWrap='wrap'>
                    {amenities?.map((item) => (
                        item?.amenities?.map((amenity) => (
                            <Text key={amenity.text} fontWeight='bold' color='brand.main' fontSize='l' p='2' bg='brand.color' m='1' borderRadius='5'>
                                {amenity.text}
                            </Text>
                        ))
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}



export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        }
    };
}

