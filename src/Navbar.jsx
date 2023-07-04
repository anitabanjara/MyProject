import React, { useState, useEffect, Route } from 'react';
import {
  Box, Typography, MenuItem, Button, Menu

} from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from '@mui/icons-material/Mail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SocialIcon } from 'react-social-icons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";



const paddingBox = { px: { xs: 2, xl: 38 } };

export default function BootAppBar() {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    axios
      .get("https://bhalchandraschool.edu.np/api/aboutUs")
      // .then((response) =>
      //   console.log("response", response));
      .then(response => setAboutData(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const mappedData = aboutData?.map(item => ({
    label: item.title,
    path: `/about/${item.slug}`,
    photo: item.photo
  }));
  const navItems = [
    { label: 'HOME', path: '/home', children: [] },
    {
      label: 'ABOUT',
      children: mappedData
    },
    {
      label: 'ACTIVITIES',

      children: [
        { label: 'Drawing Competition', path: '/draw' },
        { label: 'School Election', path: '/election' },
        { label: 'School Gardening', path: '/garden' },
        { label: 'Friday Program', path: '/friday' }
      ],
    },
    {
      label: 'BLOGS',
      path: '/blogs',
      children: [],
    },
    { label: 'TEAMS', path: '/teams', children: [] },
    {
      label: 'NOTICES',

      children: [

        { label: 'Teacher Wanted', path: '/teacher' },
        { label: 'Vacancy Announcement', path: '/vacancy' },
      ],
    },
    {
      label: 'MEDIA',
      children: [{ label: 'Gallery', path: '/gallery' }],
    },
    { label: 'CONTACT US', path: '/contact-us', children: [] },
  ];
  const [activeIcon, setActiveIcon] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeMenu, setActiveMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClick = (event, index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setAnchorEl(event.currentTarget); // Update anchorEl value
  };

  const handleClose = () => {
    setActiveMenu(null);
    setAnchorEl(null);
  };

  const handleIconMouseEnter = (iconName) => {
    setActiveIcon(iconName);
  };

  const handleIconMouseLeave = () => {
    setActiveIcon(null);
  };

  const handleScroll = () => {
    const isTopNavbarVisible = window.pageYOffset === 0;
    setIsScrolled(!isTopNavbarVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderIcon = (iconName, url, isLastIcon) => {
    const isActive = activeIcon === iconName;
    const showName = isActive && activeIcon !== null;

    let iconColor = '#ffffff';
    let hoverColor = '';

    switch (iconName) {
      case 'facebook':
        iconColor = '';
        hoverColor = 'darkblue';
        break;
      case 'twitter':
        iconColor = '';
        hoverColor = 'blue';
        break;
      case 'youtube':
        iconColor = '';
        hoverColor = 'red';
        break;
      default:
        break;
    }

    return (
      <Box
        key={iconName}
        display="flex"
        alignItems="center"
        p={1}
        borderRight={isLastIcon ? 'none' : '1px solid white'}
        cursor="pointer"
        onMouseEnter={() => handleIconMouseEnter(iconName)}
        onMouseLeave={handleIconMouseLeave}
        style={{
          backgroundColor: isActive ? hoverColor : iconColor,
          transition: 'background-color 0.3s ease',
        }}
      >
        <SocialIcon
          url={url}
          style={{ height: 30, width: 30, marginRight: '5px' }}
          bgColor="#ffffff"
        />
        {!isMobile && showName && (
          <Typography variant="h9" color="inherit" component="div">
            {iconName}
          </Typography>
        )}
      </Box>
    );
  };

  const renderMenuItems = (items) => {
    return items.map((item, index) => {
      if (item.children && item.children.length > 0) {
        return (
          <React.Fragment key={index}>
            <MenuItem
              onClick={(event) => handleClick(event, index)}
              selected={activeMenu === index}
              style={{ backgroundColor: 'transparent' }}
            >
              {item.label}
              <ArrowDropDownIcon />
            </MenuItem>
            <Menu
              key={`${index}-menu`}
              anchorEl={anchorEl}
              open={activeMenu === index}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'dropdown-menu',
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {renderMenuItems(item.children)}
            </Menu>
          </React.Fragment>
        );
      } else {
        return (
          <MenuItem
            key={index}
            onClick={handleClose}
            component={Link}
            to={item.path}
            className="menu-item"
          >
            {item.label}
          </MenuItem>
        );
      }
    });
  };



  return (
    <>
      <div
        style={{
          backgroundColor: '#00008B',
          color: 'white',
          height: '45px',
          display: isScrolled ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          position: 'sticky',
          top: 0,
          zIndex: 9999,
        }}
      >
        <Box display="flex" alignItems="center">
          {renderIcon('facebook', 'https://facebook.com/jaketrent')}
          {renderIcon('twitter', 'https://twitter.com/jaketrent')}
          {renderIcon('youtube', 'https://youtube.com/jaketrent', true)}
        </Box>
        <Box display="flex" alignItems="center">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
              borderRight: '1px solid white',
              paddingRight: '10px',
            }}
          >
            <AddIcCallIcon />
            <Typography variant="body2" color="inherit" component="div">
              9851237436
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
              borderRight: '1px solid white',
              paddingRight: '10px',
            }}
          >
            <MailIcon />
            <Typography variant="body2" color="inherit" component="div">
              bhalchandraschool17@gmail.com
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon />
            <Typography variant="body2" color="inherit" component="div">
              24 hours
            </Typography>
          </div>
        </Box>
      </div>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary"

        style={{
          marginTop: '-10px',
          display: 'flex',
          justifyContent: 'space-between',
          height: '125px',
          overflow: isMobile ? 'hidden' : 'visible',
          width: '100%',
          ...(!isMobile && { paddingRight: '0px' })
        }}
      >


        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: 'flex-end',
            padding: '20px',
            height: '125px',
            backgroundColor: 'lightblue',
            overflowX: isMobile ? 'hidden' : 'visible',
          }}
          className="container-fluid menu-items"
        >

          <div
            style={{
              position: 'sticky',
              top: 0,
              marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <img
                src="/@assets/myimg/logo.png"
                alt="Logo"
                style={{
                  height: isMobile ? '90px' : '110px',

                }}
              />
            </Link>
          </div>

          {!isMobile && (
            <div>
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.children && item.children.length > 0 ? (
                      <li className="nav-item">
                        <Button
                          style={{
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            color: 'black',
                          }}
                          onClick={(event) => handleClick(event, index)}
                          aria-expanded={activeMenu === index}
                        >
                          {item.label}
                          <ArrowDropDownIcon />
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={activeMenu === index}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'dropdown-menu',
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                        >
                          {renderMenuItems(item.children)}
                        </Menu>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={item.path}
                          style={{
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            color: 'black',
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          )}
          {isMobile && (
            <Box display="flex" justifyContent="center">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => handleClick(event, null)}
              >
                {activeMenu === null ? (
                  <MenuIcon />
                ) : (
                  <CloseIcon />
                )}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {renderMenuItems(navItems)}
              </Menu>
            </Box>
          )}
        </Box>
      </nav>
    </>
  );
}
