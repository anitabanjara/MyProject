import React, { useState, useEffect } from 'react';
import {
  Box, Typography, MenuItem, Button, Menu

} from '@mui/material';
import './App.css';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SocialIcon } from 'react-social-icons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { fetchAboutData } from "./Api/api";
import { fetchActivityData } from './Api/api';
import { fetchNoticeData } from './Api/api';
import { fetchSiteData } from './Api/api';

//import axios from "axios";



export default function BootAppBar() {
  const [aboutData, setAboutData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [noticeData, setNoticeData] = useState([]);
  const [siteData, setSiteData] = useState([]);


  useEffect(() => {
    fetchAboutData()
      .then((data) => setAboutData(data))
      .catch((error) => console.error(error));
  }, []);

  const mappedData = aboutData?.map((item) => ({
    label: item.title,
    path: `/about/${item.slug}`,
    photo: item.photo,
  }));


  useEffect(() => {
    fetchActivityData()
      .then((data) => setActivityData(data))
      .catch((error) => console.error(error));
  }, []);

  const mappedData1 = activityData?.map((item) => ({
    label: item.title,
    path: `/activity/${item.slug}`,
    photo: item.photo,
  }));

  useEffect(() => {
    fetchNoticeData()
      .then((data) => setNoticeData(data))
      .catch((error) => console.error(error));
  }, []);

  const mappedData2 = noticeData?.map((item) => ({
    label: item.title,
    path: `/notice/${item.id}`,
    photo: item.photo,
  }));



  useEffect(() => {

    fetchSiteData()
      .then((data) => setSiteData(data))
      .catch((error) => console.error(error));
  }, []);
  //console.log(siteData);


  // useState(() => {
  //   axios.get("https://bhalchandraschool.edu.np/api/siteSetting")
  //     .then((response) => console.log("response", response));
  // }, []);




  const navItems = [
    { label: "HOME", path: "/home", children: [] },

    {
      label: "ABOUT",
      children: mappedData,
    },
    {
      label: "ACTIVITIES",

      children: mappedData1,

    },
    {
      label: 'BLOGS',
      path: '/blog',
      children: [],
    },
    { label: 'TEAMS', path: '/teams', children: [] },

    {
      label: "NOTICES",

      children: mappedData2,
    },

    {
      label: "MEDIA",

      children: [
        { label: "Gallery", path: '/media' },
        { label: "Web", path: '/web' },
      ],
    },


    { label: 'CONTACT US', path: '/contact-us', children: [] },
  ];
  const [activeIcon, setActiveIcon] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [activeMenu, setActiveMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);


  const [isScrolled, setIsScrolled] = useState(false);



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

    let iconColor = 'darkblue';
    let hoverColor = '';

    switch (iconName) {
      case 'facebook':
        hoverColor = 'darkblue';
        break;
      case 'twitter':
        hoverColor = 'blue';
        break;
      case 'youtube':
        hoverColor = 'red';
        break;
      default:
        break;
    }

    const handleMouseEnter = () => {
      setActiveIcon(iconName);
    };

    const handleMouseLeave = () => {
      setActiveIcon(null);
    };

    if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Box
            key={iconName}
            display="flex"
            alignItems="center"
            p={1}
            borderRight={isLastIcon ? 'none' : '1px solid white'}
            cursor="pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: isActive ? hoverColor : iconColor,
              transition: 'background-color 0.3s ease',
            }}
          >
            <SocialIcon
              url={url}
              style={{ height: 30, width: 30, marginRight: '5px' }}
              bgColor='#ffffff'
            />
            {!isMobile && showName && (
              <Typography variant="h9" color="inherit" component="div">
                {iconName}
              </Typography>
            )}
          </Box>
        </a>
      );
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
          backgroundColor: hoverColor,
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



  // Render the icons based on the siteData
  const renderIcons = () => {
    if (!siteData) {
      return null;
    }

    const icons = ['facebook', 'twitter', 'youtube'];
    const lastIconIndex = icons.length - 1;

    return icons.map((iconName, index) => (
      <div key={iconName}>
        {renderIcon(iconName, siteData[`${iconName}_link`], index === lastIconIndex)}
      </div>
    ));
  };



  const renderMenuItems = (items) => {
    return items.map((item, index) => {
      if (item.children && item.children.length > 0) {
        return (
          <div key={index}>
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

          </div>
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
          {renderIcons()}
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
              {siteData?.phone}

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
              {siteData?.email}
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
          ...(isTablet && {
            paddingRight: '0px', // Optional: Adjust the right padding for tablets
          }),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'space-between',
            alignItems: isMobile ? 'center' : 'flex-end', // Center items in mobile view
            padding: '20px',
            height: '125px',
            backgroundColor: 'lightblue',
            overflowX: isMobile ? 'hidden' : 'visible',
          }}
          className="container-fluid menu-items"
        >
          {/* Logo */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              marginRight: isMobile ? '10px' : '20px',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <img
                src={siteData?.logo}
                alt=""
                style={{
                  height: isMobile ? '90px' : '110px',
                  transition: 'height 0.3s ease',
                }}
              />
            </Link>
          </div>

          {/* Navigation Items */}
          {isMobile ? ( // Render nav items below the logo for mobile view
            <div style={{ marginTop: '10px' }}>
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <div key={index}>
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
                          {[renderMenuItems(item.children)]}
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
                  </div>
                ))}
              </ul>
            </div>
          ) : (
            // Render nav items beside the logo for tablet and desktop view
            <div>
              <ul className="navbar-nav">
                {navItems.map((item, index) => (
                  <div key={index}>
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
                          {[renderMenuItems(item.children)]}
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
                  </div>
                ))}
              </ul>
            </div>
          )}
          {isMobile && (
            <Box display="flex" justifyContent="center">
              <Button
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={(event) => handleClick(event, null)}
              >
                {activeMenu === null ? <MenuIcon /> : <CloseIcon />}
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