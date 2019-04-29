import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class NavBar extends Component {
   state = {}

   render() {
      return (
         <Menu fixed borderless className='nav-bar'>
            <Menu.Item onClick={()=>this.props.hambugerMenu()}>
               <Icon fitted size='large' name='bars'/>
            </Menu.Item>
         </Menu>
      );
   }

}

export default NavBar;
