import React from 'react'
import { Box, Grid, IconButton, Stack, Typography, Button, Divider } from '@mui/material'
import { ArrowRight, List } from '@phosphor-icons/react'
import useResponsive from "../hooks/useResponsive"
import Lingkaran from "../assets/Lingkaran.png"
import Amazon_Web_Services_Logo from "../assets/Amazon_Web_Services_Logo.svg"
import Microsoft_Azure_Logo from "../assets/Microsoft_Azure.svg"
import Blob from "../assets/blob.svg"

function Header() {
  const isDesktop = useResponsive("up", "md")

  return <Grid container spacing={2}>
    <Grid item md={4} xs={6}>
      <Stack direction="row" alignItem="center" spacing={2}>
        {isDesktop && (
          <IconButton>
            <List />
          </IconButton>
        )}

        <Typography variant='h5'>
          ACE THE CLOUD
        </Typography>
      </Stack>
    </Grid>
    {isDesktop && (
      <Grid item md={4} container justifyContent={'center'}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Button> Item</Button>
          <Button> Blog</Button>
          <Button> About</Button>
        </Stack>
      </Grid>
    )}
    <Grid item md={4} xs={6} container justifyContent={'flex-end'}>
      <Stack direction="row" alignItems="center" spacing={2} container>
        <Button>Sign In</Button>
        <Button variant='contained'>Sign Up</Button>
      </Stack>
    </Grid>
  </Grid>


}

function HeroSection() {
  const LeftContent = (
    <Grid sx={{ flexGrow: 1 }} item container md={6} xs={12} justifyContent='center' alignItems='center'>
      <img src={Lingkaran} style={{ position: 'absolute', left: -60, opacity: 0.6, zIndex: 1 }} />
      <Stack spacing={6} sx={{ zIndex: 10 }}>
        <Stack spacing={3}>
          <Typography variant='h1' sx={{ lineHeight: 1.2, fontWeight: 700 }}>
            AWS <br /> AZURE
          </Typography>
          <Stack direction={'row'} alignItems={'center'} spacing={6}>
            <Typography sx={{ fontSize: 20 }}>
              Being in control of your future
            </Typography>
            <Box sx={{ p: 1, bgcolor: (theme) => theme.palette.black, }}>
              <IconButton>
                <ArrowRight />
              </IconButton>
            </Box>

          </Stack>
        </Stack>
        <Divider />
        <Stack direction={'row'} alignItems={'center'} spacing={4}>
          <img src={Amazon_Web_Services_Logo} style={{ height: 30, filter: 'saturate(0%' }} />
          <img src={Microsoft_Azure_Logo} style={{ height: 40, filter: 'saturate(0%' }} />

        </Stack>
      </Stack>
    </Grid>
  )
  const RightContent = (
    <Grid sx={{ flexGrow: 1, position: 'relative' }} item container md={6} xs={12} justifyContent='center' alignItems='center'>
      <img src={Blob} style={{ position: 'absolute', bottom: -100, left: '50%', transform: "translate(-50%, -30%)", width: '600px' }} />

    </Grid>
  )
  return (
    <Grid container spacing={{
      xs: 15, md: 2
    }} sx={{ flexGrow: 1 }}>
      {LeftContent}
      {RightContent}

    </Grid>
  )
}

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh", p: 4, bgcolor: "#FDFA0", display: 'flex', flexDirection: "column", rowGAP: 4 }}>
      <Header />
      <HeroSection />
    </Box>
  )
}

export default Home