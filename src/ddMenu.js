import React, { Component } from 'react';
import ListItem from './ddItems';
import styled from 'styled-components';

export default class DDMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hover: false,
    };
  }

  componentWillMount() {
    const itemsToAdd = [];
    itemsToAdd.push({ id: 1, content: 'Home' }, { id: 2, content: 'Projects' }, { id: 3, content: 'About' },{ id: 4, content: 'Contact' });
    this.setState({ items: itemsToAdd });
  }

  render() {
    return (

      <div>
        {this.state.items.map(itemInList => (
          <LinkBox>
            <ListItem key={itemInList.id} name={itemInList} />
          </LinkBox>
          ),
        )}
      </div>
    );
  }
}

const LinkBox = styled.div`
    height: 20px;
    margin-top: 25px;
`;
