import React from "react";

function About() {
  return (
    <div>
      <h1>Welcome to the Page</h1>
      <p>We are a team of developers building amazing web applications.</p>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our React application.</p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <p>You can reach us at contact@example.com.</p>
    </div>
  );
}
function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Check out our latest blog posts here.</p>
    </div>
  );
}

export default About;
export { Home, Contact, Blog };
