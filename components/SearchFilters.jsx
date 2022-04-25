import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Flex, Box, Select } from '@chakra-ui/react';
import { filterData, getFilterValues } from './../utils/filterdata';
export default function SearchFilters() {
    const [filters, setFilters] = useState(filterData)
    const searchProprties = (filterValues) => {

    }
    return (
        <Flex flexWrap="wrap" justifyContent="center" bg="gray.100" p={4}  >
            {
                filters.map(filter => (
                    <Box key={filter.queryName}   >
                        <Select
                        w="fit-content"
                        p="2"
                        placeholder={filter.placeholder}
                            onChange={(e) => searchProprties({ [filter.queryName]: e.target.value })}
                        >
                        
                        </Select>
                    </Box>
                ))
            }
        </Flex>
    )
}

