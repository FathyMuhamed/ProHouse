import React, { useState } from 'react'
import Router, { useRouter } from 'next/router';
import { Flex, Box, Select } from '@chakra-ui/react';
import { filterData, getFilterValues } from './../utils/filterdata';
export default function SearchFilters() {
    const router = useRouter()
    const [filters, setFilters] = useState(filterData)
    const searchProprties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)
        values.forEach(item => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        })
        router.push({ pathname: path, query })
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
                            {filter?.items?.map(item => (
                                <option value={item.value} key={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </Select>
                    </Box>
                ))
            }
        </Flex>
    )
}

