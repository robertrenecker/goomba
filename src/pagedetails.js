import React, { Component } from 'react';

const PageDetails = ({ match }) => (

  <p>{match.params.page}</p>
);

export default PageDetails;