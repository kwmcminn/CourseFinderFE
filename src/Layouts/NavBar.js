import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

class NavBar extends Component {
   state = {}

   render() {
      return (
         <>
         <Menu fixed borderless className='nav-bar' id='navvy'>
            <Menu.Item onClick={()=>this.props.handleHamburger()}>
               <Icon id='hamburger' fitted inverted color='grey' name='bars'/>
            </Menu.Item>
         </Menu>
         <div id='footer'> <span>Created by Kevin McMinn 2019</span></div>
         </>
      );
   }

}

export default NavBar;
