import React, { Component, createRef } from 'react';
import Home from '../Containers/Home'
import {
  Button,
  Header,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

export default class SidebarMenu extends Component {
  state = { visible: true}
  segmentRef = createRef()

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {

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
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
          </Sidebar>

          <Segment className='home-container'>
            <Home
               className='home'
               updateLatLongWithSearch={this.props.updateLatLongWithSearch}
               updateLatLongWithClick={this.props.updateLatLongWithClick}
               mapLocation={this.props.mapLocation}
               activeCourses={this.props.activeCourses}/>
          </Segment>
        </Sidebar.Pushable>
      </div>
    )
  }
}
