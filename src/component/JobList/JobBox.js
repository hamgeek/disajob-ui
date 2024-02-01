
import Link from "next/link";
import { Badge, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CilEducation } from "@/app/icon/CilEducation";
import { FontistoParalysisDisability } from "@/app/icon/CilDisability";
import { MajesticonsMapMarkerLine } from "@/app/icon/CilMapMarker";
import jobThumb from '../../assets/thum.png';
import Image from "next/image";

const JobBox = ({job_data}) => {

    return (
        <>
            <Flex flexDirection={'column'} w={'100%'} gap={4}>
                {
                    job_data.map((data) => {
                        return (
                            <Box key="" w={'100%'} h={'auto'} px={5}>
                                <Flex href={`/job/${data.id}`} as={Link} transition={'all .2s'} _hover={{shadow: 'lg'}} flexDirection={'row'} w={'100%'} maxH={'auto'} minH={'120px'} bg={'white'} rounded={'xl'}>
                                    <Box w={'120px'} h={'auto'} p={4} rounded={'md'} >
                                        <Image src={jobThumb} alt="" style={{objectFit: 'cover', width:'100%', height: '100%', borderRadius: '6px'}}/>
                                    </Box>
                                    <Flex  flexDirection={'column'} w={'calc(100% - 120px)'} py={4} pe={4}>
                                        <Flex justifyContent={'space-between'}>
                                            <Text fontSize={'10px'} color={'blue.600'} fontWeight={'medium'}>{data.company_name}</Text>
                                            {data.is_open? <Badge colorScheme={'blue'} fontSize={'10px'} textTransform={'unset'}>Buka</Badge>: <Badge colorScheme={'gray'} fontSize={'10px'} textTransform={'unset'}>Tutup</Badge>}
                                        </Flex>
                                        <Text fontSize={'12px'} color={'gray.700'} fontWeight={'semibold'}>{data.job_title}</Text>
                                        <VStack alignItems={'left'} gap={1}>
                                        <HStack mt={1}> 
                                            <Text color="gray.800">
                                            <CilEducation  />
                                            </Text>
                                            <Text fontSize={'10px'} color={'gray.800'} fontWeight={'medium'}>{data.job_pendidikan.join(', ')}</Text>
                                        </HStack>
                                        <HStack> 
                                            <Text color="orange.600">
                                            <FontistoParalysisDisability  />
                                            </Text>
                                            <Text fontSize={'10px'} color={'orange.600'} fontWeight={'medium'}>{data.job_difabel.join(', ')}</Text>
                                        </HStack>
                                        <HStack> 
                                            <Text color="gray.600">
                                            <MajesticonsMapMarkerLine  />
                                            </Text>
                                            <Text fontSize={'10px'} color={'gray.600'} fontWeight={'medium'}>{data.job_location.join(', ')}</Text>
                                        </HStack>
                                        </VStack>
                                    </Flex>
                                </Flex>
                            </Box>
                        )
                    })
                }
            </Flex>
        </>
    )
}

export default JobBox;