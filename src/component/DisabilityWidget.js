'use client'
import { FontistoParalysisDisability } from "@/app/icon/CilDisability";
import { useDisability } from "@/store";
import { Box, Flex, FormControl, FormLabel, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Switch, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export default function DisabilityWidget() {

    const [grayScale, setGrayScale] = useState(localStorage.getItem('disability-grayscale')? true: false);
    const disabilityMode = useDisability();
    const enableGrayScale = (state) => {
        if(state)
        {
            localStorage.setItem('disability-grayscale', 'on');
            disabilityMode.setGrayScale('on');
        }
        else
        {
            localStorage.removeItem('disability-grayscale');
            disabilityMode.setGrayScale('off');
        }
    };

    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
            <Box cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'} bottom={'90px'} left={'20px'} w={'40px'} rounded={'full'} h={'40px'} bg={'white'} border={'solid'} borderWidth={'2px'} borderColor={'blue.600'}>
            <Text color={'blue.600'} fontSize={'20px'}><FontistoParalysisDisability /></Text>
            </Box>
            </PopoverTrigger>
            <Portal>
            <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                <Text>Disability</Text>
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                <Flex flexDirection={'column'} gap={2}>
                <FormControl display='flex' alignItems='center'>
                    <Switch isChecked={grayScale} onChange={() => {
                        enableGrayScale(!grayScale);
                        setGrayScale(!grayScale);
                    }} me={2} id='email-alerts' />
                    <FormLabel htmlFor='email-alerts' mb='0'>
                    Grayscale Mode
                    </FormLabel>
                </FormControl>
                <FormControl display='flex' alignItems='center'>
                    <Switch isChecked={true} me={2} id='email-alerts' />
                    <FormLabel  htmlFor='email-alerts' mb='0'>
                        Disleksia Mode
                    </FormLabel>
                </FormControl>
                </Flex>
                </PopoverBody>
                <PopoverFooter>

                </PopoverFooter>
            </PopoverContent>
            </Portal>
        </Popover>
    )
}
