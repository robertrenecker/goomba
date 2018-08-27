import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';


const ListItem = ({name}) => (
  <Link to={`/${name.content}`} style={{ textDecoration: 'none' }}>
    <Hello>
      {name.content}
    </Hello>
  </Link>
);

export default ListItem;

const Hello = styled.div`
    color: white;
    font-weight: bold;
    padding: 10px;
`;

