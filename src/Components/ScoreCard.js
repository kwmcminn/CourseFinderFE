import React, { Component } from 'react';
import '../CSS/Round.css'
import ScoreModal from './ScoreModal';
import ReactLoading from 'react-loading';

class ScoreCard extends Component {
   state = {
      display: false
   }

   componentDidMount(){
      let total = 0
      fetch('http://localhost:3000/user_rounds',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.props.roundDisplayed)
         })
      .then(response => response.json())
      .then(json =>
         this.setState({
            course: json.courses[0]
         }))
      fetch(`http://localhost:3000/rounds/${this.props.roundDisplayed.id}`)
         .then(res => res.json())
         .then(json => this.setState({
            holes: json
         }, () => this.totalScore())
      )
   }

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
      fetch(`http://localhost:3000/holes/${hole.id}`, {
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
     let total = 0
     for(let i = 0; i < this.state.holes.length - 1; i++){
        total += this.state.holes[i].total
     }
    this.setState({
      currentScore: total
   })
 }

   render() {
      return (
         <div>
            {this.state.holes && this.state.course ?
               <>
                  <div className='profile-header score-title'>
                     <div>{this.state.course.course_name}</div>
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
         </div>
      );
   }

}

export default ScoreCard;
