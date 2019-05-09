import React, { Component, createRef } from 'react';
import Home from '../Containers/Home'
import RoundContainer from '../Containers/RoundContainer'
import ScoreCard from '../Components/ScoreCard'
import {Button, HeaderImage, Menu, Ref, Segment, Sidebar, Icon} from 'semantic-ui-react'

export default class SidebarMenu extends Component {

  render() {
     let currentDisplay
       if(this.props.stateCopy.pageDisplayed === 'Home'){
          currentDisplay = <Home
             handleSidebar={this.props.handleSidebar}
             sidebarVisible={this.props.stateCopy.sidebarVisible}
             className='home'
             updateLatLongWithSearch={this.props.updateLatLongWithSearch}
             updateLatLongWithClick={this.props.updateLatLongWithClick}
             mapLocation={this.props.stateCopy.mapLocation}
             activeCourses={this.props.stateCopy.activeCourses}
             newRound={this.props.newRound}/>
       }
       else if (this.props.stateCopy.pageDisplayed === 'Profile'){
         currentDisplay = <RoundContainer showScoreCard={this.props.showScoreCard} userRounds={this.props.stateCopy.userRounds} />
     }
      else if (this.props.stateCopy.pageDisplayed === 'ScoreCard'){
         currentDisplay = <ScoreCard roundDisplayed={this.props.stateCopy.roundDisplayed} handleDelete={this.props.handleDelete} fetchUpdatedRounds={this.props.fetchUpdatedRounds}/>
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
               visible={this.props.stateCopy.sidebarVisible}
               width='thin'
             >
                  <Menu.Item id='side-bar-option'onClick={() => this.props.displayPageSidebar('Home')} as='a'>Main Map
                     <Icon name='map marker alternate' size='big'/>
                  </Menu.Item>
                  <Menu.Item id='side-bar-option' onClick={() => this.props.displayPageSidebar('Profile')} as='a' >Profile
                     <Icon name='clipboard' size='big'/>
                  </Menu.Item>
                  <Menu.Item id='side-bar-option' onClick={() => this.props.displayPageSidebar()} as='a'>Log Out
                     <Icon name='log out' size='big'/>
                  </Menu.Item>
               </Sidebar>

             <Segment className='home-container'>
               {currentDisplay}
             </Segment>
           </Sidebar.Pushable>
      </div>
    )
  }
}
