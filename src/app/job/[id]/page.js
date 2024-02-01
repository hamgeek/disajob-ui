"use client"
import { FontistoParalysisDisability } from "@/app/icon/CilDisability";
import { CilEducation } from "@/app/icon/CilEducation";
import { MajesticonsMapMarkerLine } from "@/app/icon/CilMapMarker";
import { Box, Button, Flex, HStack, List, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "react-feather";
import job_data from "@/repository/job.json";
import { useParams } from "next/navigation";
import jobThumb from '../../../assets/thum.png';
import Image from "next/image";

export default function Page() {
    const params = useParams();
    const dataById = job_data.filter(obj => obj.id === params.id)[0];

    return (
        <>
            <HStack h={'40px'} position={'sticky'} top={0} left={0} right={0} px={2} fontSize={'14px'} color={'white'} bg={'blue.600'} justifyContent={'left'} alignItems={'center'}>
                <Text as={Link} href={'/cari-lowongan'} cursor={'pointer'}>
                    <ChevronLeft size={18} />
                </Text>
                <Text as={Link} href={'/cari-lowongan'} cursor={'pointer'}>Kembali</Text>
            </HStack>
            <Box h={'calc(100dvh - 40px)'} overflow={'auto'}>
            <Flex px={6} flexDirection={'column'}>
                <Box mt={6} mb={4} w={'100%'} h={'200px'} bg={'gray.200'}>
                    <Image alt="" src={jobThumb} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                </Box>
                <Text fontSize={'10px'} fontWeight={'light'}>{dataById.company_name}</Text>
                <Text fontSize={'18px'} fontWeight={'regular'}>{dataById.job_title}</Text>
                <VStack alignItems={'left'} gap={1}>
                <HStack mt={1}> 
                    <Text color="gray.800">
                    <CilEducation  />
                    </Text>
                    <Text fontSize={'10px'} color={'gray.800'} fontWeight={'medium'}>
                        {
                            dataById.job_pendidikan.join(', ')
                        }
                    </Text>
                </HStack>
                <HStack> 
                    <Text color="orange.600">
                    <FontistoParalysisDisability  />
                    </Text>
                    <Text fontSize={'10px'} color={'orange.600'} fontWeight={'medium'}>
                        {
                            dataById.job_difabel.join(', ')
                        }
                    </Text>
                </HStack>
                <HStack> 
                    <Text color="gray.600">
                    <MajesticonsMapMarkerLine  />
                    </Text>
                    <Text fontSize={'10px'} color={'gray.600'} fontWeight={'medium'}>
                        {
                            dataById.job_location.join(', ')
                        }
                    </Text>
                </HStack>
                </VStack>
            </Flex>

            <Flex w={'100%'} mt={6} px={6} flexDirection={'column'} gap={1}>
                <Text fontWeight={'normal'} fontSize={'14px'}>Kualifikasi</Text>
                <UnorderedList color={'gray.600'} fontWeight={'light'} fontSize={'smaller'}>
                        {
                            dataById.job_rules.map((data, index) => {
                                return (
                                    <ListItem key={index}>{data}</ListItem>
                                )
                            })
                        }
                </UnorderedList>
            </Flex>
            <Flex w={'100%'} mt={6} px={6} flexDirection={'column'} gap={1}>
                <Text fontWeight={'normal'} fontSize={'14px'}>Deskripsi Pekerjaan</Text>
                <UnorderedList color={'gray.600'} fontWeight={'light'} fontSize={'smaller'}>
                        {
                            dataById.job_desc.map((data, index) => {
                                return (
                                    <ListItem key={index}>{data}</ListItem>
                                )
                            })
                        }
                </UnorderedList>
            </Flex>
            <Flex w={'100%'} mt={6} px={6} flexDirection={'column'} gap={1}>
                <Text fontWeight={'normal'} fontSize={'14px'}>Deskripsi Perusahaan</Text>
                <Text color={'gray.600'} fontWeight={'light'} fontSize={'smaller'}>
                    {dataById.company_description}
                </Text>
            </Flex>

            <Flex w={'100%'} px={6} my={6}>
                <Button colorScheme={'blue'} size={'sm'} w={'100%'}>Lamar Sekarang</Button>
            </Flex>
            </Box>

        </>
    )
};
