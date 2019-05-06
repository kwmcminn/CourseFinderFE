import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class ScoreModal extends Component {
   state = {
      total: 0,
   }

  handleClick = (option) => {
     if(option === 'plus'){
        this.setState({
           total: this.state.total + 1
        })
     }
     else if (option === 'minus'){
       this.setState({
          total: this.state.total - 1
       })
     }
 }

 buildObject = () => {
    this.props.closeModal()
    let hole = {
      id: this.props.holeId,
      total: this.state.total
   }
   this.props.submitScore(hole)
}
  render() {
    const hole = this.state

    return (
      <div>
        <Modal size='mini' open={this.props.display} onClose={this.close}>
          <Modal.Content id='score-modal'>
            <Button onClick={() => this.handleClick('minus')}>
               <Icon fitted size='big' name='minus'/>
            </Button>
            <div id='hole-score'>{this.state.total}</div>
            <Button onClick={() => this.handleClick('plus')}>
               <Icon fitted size='big' name='plus'/>
            </Button>
          </Modal.Content>
          <Modal.Actions id='submit-score-button'>
            <Button onClick={() => this.buildObject()} secondary content='Add Score' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ScoreModal;
