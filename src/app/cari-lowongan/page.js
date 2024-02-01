import JobBox from "@/component/JobList/JobBox";
import { Badge, Box, Button, Flex, IconButton, Input, Skeleton, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Filter, Search } from "react-feather";
import { CilEducation } from "../icon/CilEducation";
import { FontistoParalysisDisability } from "../icon/CilDisability";
import { MajesticonsMapMarkerLine } from "../icon/CilMapMarker";
import LayoutNavMenu from "@/component/layout/nav-menu";
import job_data from "@/repository/job.json";

export default function AppCariLowongan() {

    return (
        <>
            <Box w="100%" h={'calc(100dvh - 70px)'} overflow={'auto'}>
            <Flex flexDirection={'column'} position={'sticky'} top={0} left={0} right={0} w={'100%'} h={'auto'} bg={'white'} borderBottom={'solid'} borderBottomWidth={'1px'} borderBottomColor={'gray.200'}>
                <Flex flexDirection={'row'} px={6} pt={6} gap={4}>
                    <Input placeholder="Cari Lowongan" fontSize={'smaller'} size={'sm'} />
                    <Button colorScheme={'blue'} w={'80px'} size={'sm'}>
                        <Search size={18} />
                    </Button>
                </Flex>
                <Flex px={6} flexDirection={'row'} flexWrap={'wrap'} gap={4} mt={2} mb={6}>
                    <Button bg={'blue.100'} display={'flex'} gap={1} color={'blue.800'} colorScheme={'gray'} w={'auto'} size={'xs'}>
                            <Filter size={12} />
                            <Text fontWeight={'medium'}>Filter</Text>
                    </Button>

                    <Button  display={'flex'} gap={1} colorScheme={'gray'} w={'auto'} size={'xs'}>
                        <Text color="gray.800" fontSize={'18px'}>
                            <CilEducation  />
                        </Text>
                        <Text fontWeight={'medium'}>Semua</Text>
                    </Button>

                    <Button display={'flex'} gap={1} colorScheme={'gray'} w={'auto'} size={'xs'}>
                        <Text color="orange.800" fontSize={'18px'}>
                            <FontistoParalysisDisability  />
                        </Text>
                        <Text color="orange.800" fontWeight={'medium'}>Semua</Text>
                    </Button>

                    <Button display={'flex'} gap={1} colorScheme={'gray'} w={'auto'} size={'xs'}>
                        <Text color="gray.800" fontSize={'18px'}>
                            <MajesticonsMapMarkerLine  />
                        </Text>
                        <Text color="gray.800" fontWeight={'medium'}>Semua Wilayah</Text>
                    </Button>

                </Flex>
            </Flex>
            <VStack py={5}>
                <JobBox job_data={job_data}/>
            </VStack>
            <Flex px={4} pb={4}>
                <Button as={Link} href={'cari-lowongan'} colorScheme={'blue'} fontSize={'smaller'} w={'100%'}>Lebih Banyak</Button>
            </Flex>

            </Box>
            <LayoutNavMenu />
        </>
    )
};
