import React from "react"

export function ContactForm() {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="phone"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="phone" placeholder="(555) 555-5555" value="" />

      <label htmlFor="first_name" className="w-full block">
        First Name:
      </label>
      <input
        required
        id="first_name"
        className="w-full block"
        name="first_name"
        type="text"
      />

      <br />

      <label htmlFor="last_name" className="w-full block">
        Last Name:
      </label>
      <input
        required
        id="last_name"
        className="w-full block"
        name="last_name"
        type="text"
      />

      <br />

      <label htmlFor="email" className="w-full block">
        Email Address:
      </label>
      <input
        required
        id="email"
        className="w-full block"
        name="email"
        type="email"
      />

      <br />

      <label htmlFor="message" className="w-full block">
        Message:
      </label>
      <textarea required id="message" className="w-full block" name="message" />

      <br />

      <button
        className="text-lg text-white bg-red-700 p-2 px-8 rounded-full"
        type="submit"
      >
        Contact
      </button>
    </form>
  )
}
