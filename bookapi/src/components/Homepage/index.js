import React from 'react';
import { Container, Heading, Paragraph } from './style';

const Homepage = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <Paragraph>
        Welcome to our React application that interacts with the routes from the Postman Collection. This application demonstrates how to integrate with an API and fetch data using React and axios.
      </Paragraph>
      <Paragraph>
        Our goal is to provide a user-friendly interface for interacting with the various routes in the Postman Collection. We believe that React is a powerful and flexible framework for building dynamic web applications, and we hope you find this demonstration helpful.
      </Paragraph>
      <Paragraph>
        Feel free to explore the different pages and routes in the application. If you have any questions or feedback, please don't hesitate to reach out to us. Thank you for visiting!
      </Paragraph>
    </Container>
  );
};

export default Homepage;
