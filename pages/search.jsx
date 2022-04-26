import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters';
import Property from './../components/Property';
import { fetchApi, baseUrl } from '../utils/fetchApi'

export default function Search({ properties }) {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter();
    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="brand.color"
                borderBottom="1px"
                borderColor="gray.200"
                p={2}
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                fontSize="bg"
                borderRadius="md"
                color="brand.main"
                onClick={() => setSearchFilters(prev => !prev)}
            >
                <Text>Search Property By Filters</Text>
                <Icon as={BsFilter} paddingLeft={2} w={7} />
            </Flex>
            {searchFilters && <SearchFilters />}

            <Text fontWeight="bold" marginLeft="25px" p={4} fontSize="2xl">
            Search Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap" justifyContent="center">
                {properties.map(property => <Property property={property} key={property.id} />)}
            </Flex>
            {
                properties.length === 0 && (
                    <Flex justifyContent="center" alignItem="center" flexDirection="row">
                        <Text marginTop="3px" fontSize="3xl">
                            No Result Found
                        </Text>
                    </Flex>
                )
            }
        </Box>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits
        }
    };
}