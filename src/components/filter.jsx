import React, { useState, useEffect } from "react";
import { Box,Icon,Stack,Flex,Button,Select,Menu,MenuItem,MenuList,MenuButton } from "@chakra-ui/core";
import languages from '../data/language'
import { FaTable, FaList } from "react-icons/fa";

export function Filters(props) {
  const {onViewChange,
    viewType,
    onDateJumpChanged,
    dateJump,
    language,
    onLanuageChange} = props

                                            
    return (
        <Stack isInline>
            <Select value={language} onChange={(e)=>onLanuageChange(e.target.value)}>
                {languages.map((language) => (

                    <option value={language.value}>{language.title}</option>

                ))}
            </Select>
            <Menu>
                <MenuButton
                 as={Button}
                  fontWeight={400}
                  leftIcon='calendar'
                     borderWidth={1} 
                     bg='white'
                      px='30px'
                      _focus={{boxShadow : "none"}}>
                      <Icon name="calender" mr={3}/>
                      <Box as="span" textTransform="capitalize">{dateJump}</Box>
                </MenuButton>
  <MenuList>
  <MenuItem onClick= {()=> onDateJumpChanged('day')}>Day</MenuItem>
  <MenuItem onClick= {()=> onDateJumpChanged('week')}>Week</MenuItem>
  <MenuItem onClick= {()=> onDateJumpChanged('month')}>Month</MenuItem>
  <MenuItem onClick= {()=> onDateJumpChanged('year')}>Yearly</MenuItem>
 
  </MenuList>
</Menu>

<Stack isInline spacing={0} borderWidth={1} 
bg='white' rounded="5px" alignItems='center' ml="18px">
<Button
onClick={ ()=> onViewChange("grid")}
 h='100' fontWeight={400} roundedRight={0}
 bg={viewType==='grid'? 'gray.200':'white'} leftIcon={FaTable}>Grid</Button>
<Button
onClick={ ()=> onViewChange("list")}
h='100' fontWeight={400} roundedRight={0} 
bg={viewType==='list'? 'gray.200':'white'} leftIcon={FaList}>List</Button>
</Stack>
        </Stack>
    )
}