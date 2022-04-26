import Link from 'next/link'
import { Flex } from '@chakra-ui/layout';
import { Box, Spacer, Menu, MenuButton, MenuItem, IconButton, MenuList, Heading, Text } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

function NavBar() {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100" alignItems="center" >
            <Box fontSize="3xl" fontWeight="bold" color="blue.400" cursor="pointer" >
                <Link href="/" paddingLef="2" passHref >
                    <Text bgGradient='linear(to-l,  brand.second, brand.main)'
                        bgClip='text'
                        fontSize='3xl'
                        fontWeight='extrabold'>ProHouse</Text>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu size="25px" />} variant="outlined" color="brand.main"  />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent property </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default NavBar

