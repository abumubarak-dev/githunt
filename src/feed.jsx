import React, { useState, useEffect } from 'react'

import {Flex, Box, Button ,Image, Stack, Heading,Text, SimpleGrid} from "@chakra-ui/core";

import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import  {Filters}  from './components/filter';
import { Repo } from './components/repo';
import moment from 'moment';
 import PageLoader from './components/page-loader';

function transformFilter({startDate,endDate,language}) {
  const transformFilters={};

  const languageQuery= language ? `language:${language} `:""

  const dateQuery =`created:${startDate}..${endDate}`;

  transformFilters.q=languageQuery + dateQuery;
  transformFilters.sort='stars'
  transformFilters.order='desc'

  return transformFilters;
}
export function Feed() {


  const[viewType,setViewType]=useState("grid");
  const[dateJump,setDateJump]=useState("day");
  const[language,setlanguage]=useState();
  const[loading,setLoading]=useState(false)
  const[repositories,setrepositories]=useState();

  const [startDate,setStartDate]= useState("");
  const [endDate,setEndDate]= useState(moment().subtract(1,"day").format())
  
  //get Current date 
  console.log(moment("2020-07-11T00:56:45+01:00").subtract(1,"year").format())
  //end2020-07-12T00:56:27+01:00
   //2020-07-11T00:56:45+01:00
   //2019-06-11T00:56:45+01:00

   
  //2020-07-10T00:56:45+01:00



  //Subtract
 //console.log(moment().subtract(1,"day").format())
 //2020-07-11T00:56:45+01:00

  
  //
  useEffect( ()=> {
    const endDate=moment().subtract(1,"day").format()
    const startDate=moment(endDate).subtract(1,dateJump).format()
    setEndDate(endDate)

    setStartDate(startDate)
    setrepositories([])
  
  },[dateJump,language])

  useEffect( ()=> {
    if(!startDate){
      return;
    }

    const filter=transformFilter({language,endDate,startDate});
    const filterQuery= new URLSearchParams(filter).toString();
    
    fetch(`https://api.github.com/search/repositories?${filterQuery}`)
    .then(res => res.json())
    .then(res => {
         setrepositories(
          [
            ...repositories,
            {
              startDate,
              endDate,
              items:res.items,
            }
          ]
        )               
               setLoading(false)

         

    });

    

    
  }, [startDate])
 
  //repositories&&repositories.map(e => e.items.map(s=>console.log(s)))
  
  return(

        <Box maxW="960px" mx="auto">
          
            <PageHeader />

            {repositories?.length === 0   && <PageLoader/>}

            {}
        
        <Flex alignItems="center" justifyContent="space-between" mb="25px">

         <GroupTitle startDate={repositories?.[0]?.startDate} endDate={repositories?.[0]?.endDate}/>

           <Filters
             onViewChange={setViewType }
            viewType={viewType}
            dateJump={dateJump}
            onDateJumpChanged={setDateJump}
            language={language}
            onLanuageChange={setlanguage}
             
           />
         


        </Flex> 
        { repositories?.map((repoGroup,counter)=>{
          const groupTitle= counter > 0 && (
            <GroupTitle
               startDate={repoGroup.startDate}
               endDate={repoGroup.endDate}
               />
          )
          return(
            <Box>
              {groupTitle}
              <SimpleGrid columns={viewType==='list'?1:3} spacing='15px'>
                { repoGroup?.items?.map(repo=> <Repo   isListView={ viewType==='list'} repo={repo}/>)}
                
                </SimpleGrid> 
                
            </Box>
          )
        })}
        
        <Flex alignItems="center"
         justifyContent="center" my="20px">
           {console.log(loading)}
          <Button isLoading={loading} 
           onClick={()=>{
             setLoading(true)
            setEndDate(startDate)
            setStartDate(moment(startDate).subtract(1,dateJump).format())
          }} variantColor="blue">Load next group</Button>
        </Flex>
        </Box>
        

        )
}