import { Flex, Skeleton, Spinner } from "@chakra-ui/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Spinner size={'lg'} />
        </Flex>
    )
}