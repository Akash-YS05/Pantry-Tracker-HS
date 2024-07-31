'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import {firebase} from '@/firebase'

import { Box, Stack, Typography } from "@mui/material";


const item = [
  'tomato',
  'onion',
  'bead',
  'milk',
  'egg',
  'potato',
  'tomato',
  'onion',
  'bead',
  'milk',
]

export default function Home() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}

      alignItems={"center"}
    >
    <Box border={'1px solid #333'}>
      <Box
        height={'100px'}
        width={'800px'}
        bgcolor={"#90EE90"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Typography
        variant={'h2'} color={'#333'} textAlign={'center'}
        >
          Pantry Items
        </Typography>
      </Box>

    <Stack height="300px" width="800px" spacing={2} overflow={"auto"}>

    {item.map((i) => (
      <Box
        key={i}
        height="100px"
        width="100%"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#f0f0f0"}

      >
        <Typography
        variant={'h4'} color={'#333'} textAlign={'center'} fontWeight={'100'}
        >
        {i}
        </Typography>
        
      </Box>
    ))}

    </Stack>
  </Box>

    </Box>
  )
}
