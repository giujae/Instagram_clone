import { Flex, VStack, Text, Box, Link } from '@chakra-ui/react';
import React from 'react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
                    See All
                </Text>
            </Flex>
            <SuggestedUser
                name="화가난 담곰이"
                followers={3000}
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dnbXBu6AyACozqSafkryyebfEZ_bOfCYWw&s"
            />
            <SuggestedUser
                name="신이난 담곰이"
                followers={1000}
                avatar="https://pbs.twimg.com/media/FACQhrfVcAId_aG.jpg"
            />
            <SuggestedUser name="이딴게 담곰이" followers={1} avatar="/image6.png" />
            <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
                © 2023 Built By{' '}
                <Link href="https://www.youtube.com/@asaprogrammer_" target="_blank" color="blue.500" fontSize={14}>
                    As a Programmer
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;
