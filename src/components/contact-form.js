import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

function ContactForm() {

  return (
    <form name="contact" autoComplete="off" method="post" data-netlify="true" data-netlify-honeypot="phone">

      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="phone" placeholder="(555) 555-5555" value=""/>

      <TextField
        margin="normal"
        fullWidth
        required
        id="first_name"
        name="first_name"
        label="First Name"
        type="text"
        variant="filled"
      />

      <br/>

      <TextField
        margin="normal"
        fullWidth
        required
        id="last_name"
        name="last_name"
        label="Last Name"
        type="text"
        variant="filled"
      />

      <br/>

      <TextField
        margin="normal"
        fullWidth
        required
        id="email"
        name="email"
        label="Email Address"
        type="email"
        variant="filled"
      />

      <br/>

      <TextField
        margin="normal"
        fullWidth
        required
        id="message"
        name="message"
        label="Message"
        placeholder="Hello, ..."
        multiline
        variant="filled"
      />

      <br/>

      <Button variant="contained" color="primary" type="submit">
        Contact
      </Button>

    </form>
  )

}

export default ContactForm
