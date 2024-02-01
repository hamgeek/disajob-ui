'use client'
import { Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FileText, Home, Search, User, } from "react-feather";

export default function LayoutNavMenu() {

    const path = usePathname();

    return (
        <Flex bg={'white'} h={'70px'} w={'100%'}>
            
            <VStack href={'/'} as={Link} cursor={'pointer'} transition={'all .2s'} borderTop={'solid'} borderTopColor={path === '/'? 'blue.400':'white'} w={'25%'}  color={path === '/'? 'blue.400':'gray.500'} flexDirection={'column'}  _hover={{borderTopColor:'blue.400', color: 'blue.400'}} borderTopWidth={'4px'} justifyContent={'center'} alignItems={'center'}>
                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
                    <Home size={22} />
                    <Text fontSize={'12px'}>Home</Text>
                </Flex>
            </VStack>

            <VStack href={'/cari-lowongan'} as={Link} cursor={'pointer'} transition={'all .2s'} borderTop={'solid'} borderTopColor={path === '/cari-lowongan'? 'blue.400':'white'} w={'25%'}  color={path === '/cari-lowongan'? 'blue.400':'gray.500'} flexDirection={'column'}  _hover={{borderTopColor:'blue.400', color: 'blue.400'}} borderTopWidth={'4px'} justifyContent={'center'} alignItems={'center'}>
                <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
                    <Search size={22} />
                    <Text fontSize={'12px'}>Cari</Text>
                </Flex>
            </VStack>

            <VStack href={'/login'} as={Link} cursor={'pointer'} transition={'all .2s'} borderTop={'solid'} borderTopColor={path === '/lamaran'? 'blue.400':'white'} w={'25%'}  color={path === '/lamaran'? 'blue.400':'gray.500'} flexDirection={'column'}  _hover={{borderTopColor:'blue.400', color: 'blue.400'}} borderTopWidth={'4px'} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
                <FileText size={22} />
                <Text fontSize={'12px'}>Lamaran</Text>
            </Flex>
            </VStack>

            <VStack href={'/login'} as={Link} cursor={'pointer'} transition={'all .2s'} borderTop={'solid'} borderTopColor={path === '/login'? 'blue.400':'white'} w={'25%'}  color={path === '/login'? 'blue.400':'gray.500'} flexDirection={'column'}  _hover={{borderTopColor:'blue.400', color: 'blue.400'}} borderTopWidth={'4px'} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1}>
                <User size={22} />
                <Text fontSize={'12px'}>Masuk</Text>
            </Flex>
            </VStack>

        </Flex>
    )
};
