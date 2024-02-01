'use client'
import LayoutNavMenu from "@/component/layout/nav-menu";
import { Box, Button, Flex, IconButton, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FlatColorIconsGoogle } from "../icon/IconGoogle";

export default function AppLogin() {
    return (
        <>
            <Box w="100%" h={'calc(100dvh - 70px)'} overflow={'auto'}>
                <Flex pt={8} pb={3} mx={6}>
                    <Text color={'gray.800'} fontSize={'x-large'}>Masuk / Daftar</Text>
                </Flex>
                <Flex flexDirection={'column'} px={6} gap={4}>

                    <Button colorScheme={'blue'} variant={'outline'}>
                        <Text me={2} fontSize={'30px'}><FlatColorIconsGoogle  /></Text>
                        <Text>Masuk / Daftar dengan Google</Text>
                    </Button>
                    <Text fontSize={'14px'} fontWeight={'light'}>Bergabunglah bersama kami dan menjadi bagian dari perubahan positif dalam dunia kerja. </Text>


                    <List fontSize={'12px'} fontWeight={'light'} spacing={2}>
                        <ListItem>
                        ✨ Akses ke Lowongan Kerja yang Ramah Difabel: Temukan pekerjaan yang sesuai dengan kemampuan Anda tanpa batasan.
                        </ListItem>
                        <ListItem>
                        ✨ Dukungan Karir: Kami menyediakan sumber daya dan dukungan untuk membantu Anda mengembangkan keterampilan dan mencapai tujuan karir Anda.
                        </ListItem>
                        <ListItem>
                        ✨ Lingkungan Kerja Inklusif: Bekerja di perusahaan-perusahaan yang mendorong keragaman dan inklusivitas.
                        </ListItem>
                        <ListItem>
                        ✨ Kesempatan Pengembangan Diri: Ikuti pelatihan dan program pengembangan diri untuk meningkatkan potensi Anda.
                        </ListItem>
                    </List>
                    

                </Flex>
            </Box>
            <LayoutNavMenu />
        </>
    )
};
