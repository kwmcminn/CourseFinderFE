import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

class NavBar extends Component {
   state = {}

   render() {
      return (
         <Menu fixed borderless className='nav-bar' id='navvy'>
            <Menu.Item onClick={()=>this.props.handleHamburger()}>
               <Icon fitted inverted color='grey' name='bars'/>
            </Menu.Item>
            <Menu.Item position='right' onClick={()=>console.log('hi')}>
               <Icon inverted color='grey' name='ellipsis vertical' />
            </Menu.Item>
         </Menu>
      );
   }

}

export default NavBar;
