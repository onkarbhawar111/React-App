import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
    return (
        <div>
            {/* <Stack spacing={5} direction={'row'}>
                <Button variant='text' size='small'>Submit</Button>
                <Button variant='contained' startIcon={<SendIcon />} size='medium' disableRipple disableElevation>Submit</Button>
                <Button variant='outlined' endIcon={<SendIcon />} size='large' color='danger'>Submit</Button>
            </Stack> */}
            <Stack direction={'row'}>
                <ButtonGroup>
                    <Button variant='contained'>BTN1</Button>
                    <Button variant='contained' href='https://www.facebook.com'>BTN2</Button>
                    <Button variant='contained'>BTN3</Button>
                </ButtonGroup>
            </Stack>
        </div>
    )
}

export default MuiButton