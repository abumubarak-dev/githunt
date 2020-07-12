import React from 'react';
import { Box, Flex,Image,Text, Heading,Link, Button,Stack, Tooltip } from '@chakra-ui/core';
import { GoRepoForked, GoStar, GoIssueOpened } from 'react-icons/go';
import moment from 'moment'
export function Repo(props){

    const { isListView ,repo}=props;


    return (
      <Flex borderWith={1} bg='white' p='15px' rounded="5px" alignItems="center">
        
        <Flex flex={1} flexDir="column">
            {!isListView && (
            
             <Flex mb='15px'>
              <Image
              src={repo.owner.avatar_url}
              size="35px"
              rounded={'5px'}/>

              <Box ml='16px'>
              <Heading 
               
              fontSize='16dp'>{repo.owner.login}</Heading>
              <Text fontSize='16dp'
              

    target="_blank">View Profile </Text>
              </Box>
          </Flex>
 
            )}
         
        
        <Box mb='15px'>
            
        <Box  mb='10px'>

<Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">

    {isListView && (
    <>
    <Text
    as="a"
    href={repo.html_url}
    target="_blank">{repo.owner.login}</Text>
    &nbsp;/&nbsp;
    </>
    )}
    <Text
    as="a"
    href={repo.html_url}
    target="_blank">{repo.name}</Text>
    
</Flex>
<Text fontSize="14px" color='gray.600' >
    Built by &middot;
    <Link fontWeight={600} 
    target="_blank" 
    href={repo.owner.html_url}>
        {repo.owner.login}</Link>
     &middot;
     {moment(repo.created_at).format("MMMM D,YYYY")}
     </Text>


            </Box>
            <Text fontSize='14px' color='gray.800'>
              {repo.description}
                </Text>


            </Box>


        <Stack isInline >
            <Button as='a' 
             cursor='pointer' 
             leftIcon={GoStar} variant='link'
              fontSize='14px' iconSpacing='4px'
    _hover={{textDecor :'none'}}>{repo.stargazers_count}
 </Button>
            <Button as='a'  cursor='pointer' 
            leftIcon={GoRepoForked} variant='link' fontSize='14px' iconSpacing='4px'
             _hover={{textDecor :'none'}}>{repo.forks}</Button>
            <Button
             as='a'  
             cursor='pointer'
             leftIcon={GoIssueOpened} 
             variant='link' fontSize='14px' 
             iconSpacing='4px'
             _hover={{textDecor :'none'}}>{repo.open_issues_count}</Button>
        </Stack>
        </Flex>
        {isListView &&(
            <Image
               rounded="full"
               size="150px"
               w={"105px"}
               h={"105px"}
               src={repo.owner.avatar_url}/>

        )}
        
        </Flex>
    )
}