import React from 'react';

import { Box, Button ,Image,Flex, Stack, Heading,Text} from "@chakra-ui/core";

import { FaGithub,FaChrome,FaTwitter  } from "react-icons/fa";
import Brand from "./brand";

export function PageHeader (){
    return( 
            <Flex justifyContent='space-between' alignItems='center' pt="15px">
                <Brand/>

                <Stack isInline>
                <Button leftIcon={FaGithub}>View Source</Button>
                <Button variantColor="red" leftIcon={FaChrome}>Use Extension</Button>
                <Button variantColor="purple" leftIcon={FaTwitter}>Tweet</Button>
                </Stack>
            </Flex>
    )
}