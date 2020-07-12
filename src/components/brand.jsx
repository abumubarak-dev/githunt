import React from "react";
import { Box, Button ,Image,Flex, Stack, Heading,Text} from "@chakra-ui/core";


const  Brand = ()=> {
    return (
        <Flex alignItems="center">
                    <Image 
                        size="80px"

                    src="logo.svg"/>
               
               <Box ml="10px">
                <Heading fontSize="24px">
                   GitFind
               </Heading>
               <Text color="gray.600">Most starred project on GitHub</Text>
               
               </Box>
                </Flex>
                
    );

}

export default Brand;