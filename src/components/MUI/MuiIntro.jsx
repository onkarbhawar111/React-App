import React from 'react'
import { Typography, Button } from '@mui/material'

const MuiIntro = () => {
  return (
    <div>
        <Typography variant='h1' gutterBottom>Hello</Typography>
        <Typography variant='h2'>Hello</Typography>
        <Typography variant='h3'>Hello</Typography>
        <Typography variant='h4'>Hello</Typography>
        <Typography variant='h5'>Hello</Typography>
        <Typography variant='h6'>Hello</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>

        <Typography variant='button'>Body</Typography>
    </div>
  )
}

export default MuiIntro