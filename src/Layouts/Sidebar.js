import React, { Component, createRef } from 'react';
import Home from '../Containers/Home'
import RoundContainer from '../Containers/RoundContainer'
import {Button, HeaderImage, Menu, Ref, Segment, Sidebar} from 'semantic-ui-react'
export default class SidebarMenu extends Component {

  render() {
     let currentDisplay
       if(this.props.pageDisplayed === 'Home'){
          currentDisplay = <Home
             handleSidebar={this.props.handleSidebar}
             sidebarVisible={this.props.sidebarVisible}
             className='home'
             updateLatLongWithSearch={this.props.updateLatLongWithSearch}
             updateLatLongWithClick={this.props.updateLatLongWithClick}
             mapLocation={this.props.mapLocation}
             activeCourses={this.props.activeCourses}/>
       }
       else if (this.props.pageDisplayed === 'Profile'){
         currentDisplay = <RoundContainer showScoreCard={this.props.showScoreCard} userRounds={this.props.userRounds}/>
     }

    return (
      <div>
           <Sidebar.Pushable as={Segment.Group} className='side-bar-menu' raised>
             <Sidebar
               as={Menu}
               animation='overlay'
               icon='labeled'
               inverted
               onHide={this.handleSidebarHide}
               vertical
               target={this.segmentRef}
               visible={this.props.sidebarVisible}
               width='thin'
             >
                  <Menu.Item onClick={() => this.props.displayPageSidebar('Home')} as='a'>Home</Menu.Item>
                  <Menu.Item onClick={() => this.props.displayPageSidebar('Profile')} as='a' >Profile</Menu.Item>
                  <Menu.Item onClick={() => this.props.displayPageSidebar()} as='a'>Log Out</Menu.Item>
               </Sidebar>

             <Segment className='home-container'>
               {currentDisplay}
             </Segment>
           </Sidebar.Pushable>
      </div>
    )
  }
}
