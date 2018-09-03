import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Link,
} from 'react-router-dom';


const ListItem = ({ name }) => (
  <Link to={`/${name.content}`} style={{ textDecoration: 'none' }}>
    <Hello>
      {name.content}
    </Hello>
  </Link>
);

export default ListItem;

ListItem.propTypes = {
  name: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};


const Hello = styled.div`
    color: white;
    font-weight: bold;
    width: 25vw;
    border-right: dotted black;

    &:hover {
      opacity: 0.8;
      margin-top: 1px;
      border-right: dotted white;
  }
`;
