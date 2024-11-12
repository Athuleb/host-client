import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomrIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import List from '@mui/material/List'; // Import List component
import ListItem from '@mui/material/ListItem'; // Import ListItem component
import { Link, useNavigate } from 'react-router-dom';


const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgb(225,225,225,0.6)',
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  color: 'black',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  borderRadius:'10px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    backgroundColor: 'rgb(20,0,0,0.2)',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function StylishToolbar() {
  const navigate = useNavigate()
  return (
    <StyledAppBar position="fixed" sx={{ width: '100vw', margin: '15px 0px', borderRadius: '20px' }} className=''>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ color: 'black', mr: 2 }}>
          <HomrIcon onClick={()=> (window.location.assign('/#home'))}/>
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily: 'verdana', color: 'black' }}>
          Happy Journey
        </Typography>
        <List sx={{ display: 'flex', padding: 0, margin: 0, color: 'black' }}>
          <ListItem sx={{ padding: 0 }}>
            <a href="/#home" style={{ textDecoration: 'none', color: 'black' }}>
              <Button color="inherit">Home</Button>
            </a>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <a href="/#top-destinations" style={{ textDecoration: 'none', color: 'black',width:'10rem' }}>
              <Button color="inherit">Top Destinations</Button>
            </a>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <Button color="inherit" onClick={() => navigate('/travel-scope')}>TravelScope</Button>
          </ListItem>
          <ListItem sx={{ padding: 0 }}>
            <a href="/#contact" style={{ textDecoration: 'none', color: 'black' }}>
              <Button color="inherit">Contact</Button>
            </a>
          </ListItem>
        </List>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Toolbar>
    </StyledAppBar>
  );
}
