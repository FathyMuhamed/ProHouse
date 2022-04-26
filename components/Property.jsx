import React from 'react'
import Link from 'next/link';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { BiBath } from 'react-icons/bi';
import { MdBed } from 'react-icons/md';
import { GoVerified } from 'react-icons/go';
import millify from 'millify'
import ImageCard from './ImageCard';
function Property({ property: { coverPhoto, contactName, price, rentFrequency, rooms, title, baths, agency, isVerified, externalID } }) {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap='wrap' w='350px' margin="6px" paddingTop='0px' cursor='pointer' boxShadow='md' rounded='md' overflow="hidden" >
        <Box>
          <ImageCard src={coverPhoto ? coverPhoto.url : DefaultImage} alt={contactName} w={400} h={260} />
        </Box>
        <Box w='full' p='5'>
          <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' flexDirection="column">
              <Flex alignItems='center' >
                <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                <Text fontWeight='bold' fontSize='2xl' color="brand.main">${millify(price)}</Text>
                <Text fontSize='sm' fontWeight="medium" color="brand.paragraph" >
                  {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Flex>
              <Text fontWeight='bold' fontSize='lg' color="brand.text">{contactName}</Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Text fontSize='lg' color="brand.paragraph" borderBottom="1px" borderColor="brand.color" p={1}>
            {title.length > 30 ? title.substring(0, 25) + '...' : title}
          </Text>
          <Flex alignItems='center' gap={2} w='300px' color='brand.main'>
            <MdBed size="20px" /> <Text color="brand.paragraph">{rooms} Beds</Text>
            |<BiBath size="20px" /><Text color="brand.paragraph"> {baths} Bathrooms</Text>
          </Flex>
        </Box>
      </Flex>
    </Link>
  )
}
//
export default Property