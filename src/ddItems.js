import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';

const ListItem = ({name}) => (
  <Link to={`/${name.content}`}>
    <Hello>
      {name.content}
    </Hello>
  </Link>
);

export default ListItem;

const Hello = styled.div`
    height: 20px;
    color: white;
    font-weight: bold;
    padding-top: 10px;
    margin-top: 20px;
    
`;

