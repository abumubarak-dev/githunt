import React from 'react';
import { Box } from "@chakra-ui/core";
import { Feed } from "./feed";

const App =()=>{
    return(
     <Box width='100vm' minHeight={"100vh"} bg="gray.100">
         <Feed />
    </Box>

    )
}

export default App;