import * as React from 'react';



export const EmailTemplate = ({
  firstname,
  secondname,
}) => (
  <div>
    <h1>Welcome, {firstname} {secondname}! Thank you for contacting us!</h1>
  </div>
);