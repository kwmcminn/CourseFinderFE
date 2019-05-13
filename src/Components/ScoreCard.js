import React, { Component } from 'react';
import '../CSS/Round.css'
import ScoreModal from './ScoreModal';
import ReactLoading from 'react-loading';
import {Button} from 'semantic-ui-react'

class ScoreCard extends Component {
   state = {
      display: false,
      course: this.props.roundDisplayed,
      stateCopy: this.props.stateCopy
   }

   componentDidMount(){
      let total = 0
      fetch('http://circlesedgebe.herokuapp.com/user_rounds',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.props.roundDisplayed)
         })
      .then(response => response.json())
      .then(json => this.setState({courseDisplayed: json.courses[0]}))
      .then(fetch(`http://circlesedgebe.herokuapp.com/rounds/${this.state.course.id}`)
         .then(res => res.json())
         .then(json => this.setState({
            holes: json
         }, () => this.totalScore())
      ))
   }

   // getCourseName(){
   //    debugger
   //    console.log('hi!!!!!!!!!!!!!')
   // }

   showModal = (hole) => {
      this.setState({
         currentHole: hole,
         display: true
      })
   }

   closeModal = () => {
      this.setState({
         display: false
      })
   }

   submitScore = (hole) => {
      fetch(`http://circlesedgebe.herokuapp.com/holes/${hole.id}`, {
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        method: 'PUT',
        body: JSON.stringify(hole)
      })
      .then(res => res.json())
      .then(json => this.setState({
         holes: json
      }, () => this.totalScore()))
  }

  totalScore = () => {
     // this.getCourseName()
     let total = 0
     for(let i = 0; i < this.state.holes.length - 1; i++){
        total += this.state.holes[i].total
     }
    this.setState({
      currentScore: total
   }, () => this.props.fetchUpdatedRounds())
 }

 deleteRound(){
    fetch(`http://circlesedgebe.herokuapp.com/rounds/${this.props.roundDisplayed.id}`, {
     headers: {'Content-Type': 'application/json', Accept: 'application/json'},
     method: 'DELETE',
    })
    .then(res => res.json())
    .then(json => this.props.handleDelete(json))
}

   render() {
      return (
         <div>
            {this.state.holes && this.state.course ?
               <>
                  <div className='profile-header score-title'>
                     <div>{this.state.courseDisplayed ? this.state.courseDisplayed.course_name : null}</div>
                     <div className='total-score'>Total Score: {this.state.currentScore}</div>
                  </div>
                  <div className='holes-container'>
                  {this.state.holes.map((hole, index) =>
                     <div onClick={() => this.showModal(hole.id)} className='score-card-hole'>
                        <div className='hole-number'>{index + 1}</div>
                        <div id={`${hole.id}`}className='shot-number'>{hole.total === 0 ? null : hole.total}</div>
                        </div>)}
                  </div>
               </>
            : <ReactLoading />}
            {this.state.display ?
               <ScoreModal
                  roundID={this.props.roundDisplayed.id}
                  holeId={this.state.currentHole}
                  courseId={this.state.course.course_id}
                  display={this.state.display}
                  closeModal={this.closeModal}
                  submitScore = {this.submitScore}
                  /> : null}
            {this.state.holes ?
               <div id='delete-button'>
                  <button class="ui secondary button" onClick={() => this.deleteRound()}> Delete Round</button>
               </div>
               : null}
         </div>
      );
   }

}

export default ScoreCard;
