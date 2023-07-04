import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Stack, Button, Card } from '@mui/material';


const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')


  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth)
  }




  return (
    <>
      <Box sx={{ backgroundColor: "#E1F5FE", padding: "2rem", display: "flex", height: "100%" }}>
        <Container maxWidth="md">
          <Box sx={{ mt: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#0000FF",
                borderBottom: "4px solid #0000FF",
                display: "inline",
                marginTop: { xs: "2rem", sm: "1rem" },
              }}
            >
              CONTACT US
            </Typography>
          </Box>
          <Box sx={{ marginTop: 4, flexGrow: 1 }}>
            <Typography variant="h5" component="h2" sx={{ color: "#0000FF", }}>
              Send us an Email
            </Typography>
            <br /><br />
            <Card
              sx={{
                height: "100%",
                width: '100%',
                padding: '20px',
                marginTop: '-10px',
                justifyContent: 'center'
              }}>
              <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{ marginTop: 5 }}>
                  <TextField
                    type="text"
                    sx={{ marginBottom: '30px' }}
                    variant='outlined'
                    color='secondary'
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    sx={{ marginBottom: '30px' }}
                    variant='outlined'
                    color='secondary'
                    label="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    fullWidth
                    required
                  />
                </Stack>
                <TextField
                  type="email"
                  sx={{ marginBottom: '30px' }}
                  variant='outlined'
                  color='secondary'
                  label="Email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  fullWidth
                  required

                />
                <Stack spacing={2} direction="row" sx={{ marginBottom: 1 }}>
                  <TextField
                    type="subject"
                    sx={{ marginBottom: '30px' }}
                    variant='outlined'
                    color='secondary'
                    label="Subject"
                    onChange={e => setSubject(e.target.value)}
                    value={subject}
                    fullWidth
                    required

                  />
                  <TextField
                    type="phone"
                    sx={{ marginBottom: '30px' }}
                    variant='outlined'
                    color='secondary'
                    label="Phone No."
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    fullWidth
                    required

                  />
                </Stack>

                <TextField
                  type="message"
                  sx={{ marginBottom: '30px' }}
                  variant='outlined'
                  color='secondary'
                  label="Message"
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  fullWidth
                  placeholder="Please enter your message"
                  multiline
                  rows={4}
                  maxRows={4}

                />
                <Button variant="contained" color="success" size='large'>
                  Send message
                </Button>


              </form>
            </Card>
            <br /><br />
            <Box sx={{ marginTop: 4, flexGrow: 1 }}>
              <Typography variant="h3" component="h2" sx={{ color: "#0000FF", }}>
                Location
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>


      < Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
          marginTop: 3,

        }
        }
      >

        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.4390118702094!2d-73.9913214386343!3d40.741895044248566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599249d5f7bb%3A0x1654456406893d6d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1636746943921!5m2!1sen!2sus"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </Box >
    </>
  );
};

export default Contact;
