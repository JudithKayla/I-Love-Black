# React + Vite + TypeScript App

This repository contains a simple React application built with Vite and TypeScript. Follow the steps below to set up and run the project locally.

## Getting Started

1. **Clone the repository:**

   `git clone https://github.com/JudithKayla/kaylajc.com`

2. **Navigate to the project directory:**

   `cd path`

3. **Install dependencies using npm:**

   `npm install`

4. **Running the App Locally:**

   `npm run dev`

   This will start the development server, and you can access the app by visiting http:/localhost:5173 in your web browser.

## Project Structure

The project structure follows Vite conventions, with key directories including:

- **src:** Contains the React application's source code.
- **public:** Holds static assets served as-is.

Feel free to customize and expand the project based on your specific needs.

## Contact Form Submission

EmailJS is integrated to handle sending emails when the contact form is submitted. Make sure to configure your EmailJS account credentials in the appropriate configuration files.

## Is it okay to expose my EmailJS Public Key?

   Indeed, someone could copy your keys (a well-known issue of any public API), but they will only be able to send your templates with your content, and they will not be able to send a custom email with their content (spam), which is not interesting for spammers. A better way to think of EmailJS in terms of security is not as a service that allows you to send emails from your code, but rather as a service that allows you to create a predefined set of emails via the dashboard, and then just trigger the emails from the code. This is quite similar to how emails are usually sent via a proprietary server code and how products like Intercom or customer.io are working.

   Read more here: https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
