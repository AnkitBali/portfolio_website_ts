'use client';
import React from 'react';
import { Box, Button} from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const StickyButton = () => {
    // This media query will be true if the screen width is less than 768px
    const isLessThan768px = useMediaQuery({maxWidth: 768});

    return (
        isLessThan768px && (
            <Box zIndex={16} position="fixed" bottom="0" width="100%" p="4" bg="transparent">
                <Button fontSize={'18px'} bg="#fac654" fontWeight={600} width="full">
                    Call Now
                </Button>
            </Box>
        )
    );
};

export default StickyButton;