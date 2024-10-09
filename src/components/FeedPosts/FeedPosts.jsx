import { Box, Container, VStack, SkeletonCircle, Flex, Skeleton } from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <Container maxW={'container.sm'} py={10} px={2}>
            {isLoading &&
                [0, 1, 2, 3].map((_, idx) => (
                    <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
                        <Flex gap="2">
                            <SkeletonCircle size="10" />
                            <VStack gap={2} alignItems={'flex-start'}>
                                <Skeleton height="10px" w={'200px'} />
                                <Skeleton height="10px" w={'200px'} />
                            </VStack>
                        </Flex>
                        <Skeleton w={'full'}>
                            <Box h={'500px'}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}
            {!isLoading && (
                <>
                    <FeedPost img="/image1.png" username="burakorkmezz" avatar="/image1.png" />
                    <FeedPost img="/image2.png" username="josh" avatar="/image2.png" />
                    <FeedPost img="/image3.png" username="janedoe" avatar="/image3.png" />
                    <FeedPost img="/image4.png" username="johndoe" avatar="/image4.png" />
                </>
            )}
        </Container>
    );
};

export default FeedPosts;
