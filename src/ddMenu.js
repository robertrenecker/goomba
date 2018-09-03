import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from './ddItems';


export default class DDMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    const itemsToAdd = [];
    itemsToAdd.push({ id: 1, content: 'Home' }, { id: 2, content: 'Projects' }, { id: 3, content: 'Resume' }, { id: 4, content: 'Contact' });
    this.setState({ items: itemsToAdd });
  }

  render() {
    return (

      <LinkBox>
        {this.state.items.map(itemInList => (
          <ListItem key={itemInList.id} name={itemInList} />
          ),
        )}
      </LinkBox>
    );
  }
}

const LinkBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    height: 100%;
`;
