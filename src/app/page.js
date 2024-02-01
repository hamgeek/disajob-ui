import JobBox from "@/component/JobList/JobBox";
import { Box, Button, Flex, Grid, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import LogoWeb from '../assets/Page 1/icon.png';
import Image from "next/image";
import Link from "next/link";
import featurePic from '../assets/picture_feature.avif';

import computerIcon from '../assets/profession/computer-front-color.png';
import knowledgeIcon from '../assets/profession/notebook-front-color.png';
import financeIcon from '../assets/profession/calculator-front-color.png';
import manufakturIcon from '../assets/profession/setting-front-color.png';
import mediaIcon from '../assets/profession/picture-front-color.png';
import designIcon from '../assets/profession/color-palette-front-color.png';
import consultIcon from '../assets/profession/chat-bubble-front-color.png';
import otherIcon from '../assets/profession/hash-front-color.png';
import LayoutNavMenu from "@/component/layout/nav-menu";
import job_data from "@/repository/job.json";


export default function Home() {


  const menu_profession = [
    {
      title: 'IT',
      image: <Image alt="" width={30} src={computerIcon}  />,
      url: ''
    },
    {
      title: 'Pendidikan',
      image: <Image alt="" width={30} src={knowledgeIcon}  />,
      url: ''
    },
    {
      title: 'Keuangan',
      image: <Image alt="" width={30} src={financeIcon}  />,
      url: ''
    },
    {
      title: 'Manufaktur',
      image: <Image alt="" width={30} src={manufakturIcon}  />,
      url: ''
    },
    {
      title: 'Media',
      image: <Image alt="" width={30} src={mediaIcon}  />,
      url: ''
    },
    {
      title: 'Seni & Desain',
      image: <Image alt="" width={30} src={designIcon}  />,
      url: ''
    },
    {
      title: 'Konsultasi',
      image: <Image alt="" width={30} src={consultIcon}  />,
      url: ''
    },
    {
      title: 'Lainnya',
      image: <Image alt="" width={30} src={otherIcon}  />,
      url: ''
    },
  ];

  return (
    <>
      <Box w="100%" h={'calc(100dvh - 70px)'} overflow={'auto'}>
        <HStack w={'100%'} h={'60px'} bg={'blue.400'} justifyContent={'space-between'}>
          <Box mx={3}>
            <Image width={80} alt="" src={LogoWeb} />
          </Box>
          <Button as={Link} href={'/login'} size={'sm'} colorScheme={'blue'} mx={2}>Masuk</Button>
        </HStack>
        <Flex bg={'white'} w={'full'} h={'180px'}>
          <Image width={'100%'} height={'100%'} style={{objectFit: 'cover'}} alt="" src={featurePic} />
        </Flex>
        <Flex flexDirection={'column'} bg={'blue.600'} w={'100%'} h={'auto'} alignItems={'center'} py={6}>
          <Text mb={4} color={'white'} fontWeight={'regular'} fontSize={'smaller'} >Bidang Pekerjaan</Text>
          <Grid gridTemplateColumns={'repeat(4, 90px)'} gridTemplateRows={'repeat(2, 90px)'}>
            {
              menu_profession.map(data => {
                return (
                  <Flex key={data.title} as={Link} href={data.url} _hover={{shadow: 'lg'}} transition={'all .2s'} gap={1} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Flex justifyContent={'center'} alignItems={'center'} w={'44px'} h={'44px'} rounded={'xl'} bg={'white'}>
                      {data.image}
                    </Flex>
                    <Text color={'white'} fontSize={'12px'} fontWeight={'light'}>{data.title}</Text>
                  </Flex>
                )
              })
            }
          </Grid>
        </Flex>
        <HStack justifyContent={'center'} alignItems={'center'} h={'80px'}>
          <Text fontWeight={'semibold'} color={'gray.800'}>Lowongan Difabel Terbaru</Text> 
        </HStack>

        <VStack pb={5}>
          <JobBox job_data={job_data.slice(0,4)}/>
        </VStack>

        <Flex px={4} pb={4}>
          <Button as={Link} href={'cari-lowongan'} colorScheme={'blue'} fontSize={'smaller'} w={'100%'}>Tampilkan Semua</Button>
        </Flex>
      </Box>
      <LayoutNavMenu />
    </>
  );
}
