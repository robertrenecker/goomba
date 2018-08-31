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
    itemsToAdd.push({ id: 1, content: 'Home' }, { id: 2, content: 'Projects' }, { id: 3, content: 'About' }, { id: 4, content: 'Contact' });
    this.setState({ items: itemsToAdd });
  }

  render() {
    return (

      <div>
        {this.state.items.map(itemInList => (
          <LinkBox key={itemInList.id} >
            <ListItem key={itemInList.id} name={itemInList} />
          </LinkBox>
          ),
        )}
      </div>
    );
  }
}

const LinkBox = styled.div`
    height: 25px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    &:hover {
        box-shadow: 3px 3px 3px 3px grey;
        border-radius: 5px 5px 5px 5px;
    }
`;
