import React from 'react'
import { Stack, Box } from '@mui/material'
import ShortListCard from './ShortListCard'


const ShortList = ({shortList : {data}}) => {
  console.log(data)
  return (
    <Stack sx={{width: "100%"}}>
      {data.map((item, idx) => (
        <Box key={idx}>
          <ShortListCard shortVideo={item}/>
        </Box>
      ))}
    </Stack>
  )
}

export default ShortList