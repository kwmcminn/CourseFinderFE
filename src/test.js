import React, { Component } from 'react';
import '../CSS/Round.css'
import ScoreModal from './ScoreModal';

class ScoreCard extends Component {
   state = {
      display: false
   }

   componentDidMount(){
      fetch('http://localhost:3000/user_rounds',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.props.roundDisplayed)
         })
      .then(response => response.json())
      .then(json =>
         this.setState({
            course: json.courses[0]
         })
      })
   }

   showModal = (hole) => {
      this.setState({
         display: true,
         currentHole: hole
      })
   }

   closeModal = () => {
      this.setState({
         display: false
      })
   }

   render() {
      return (
         <div>
            {this.state.course ?
               <>
                  <div className='profile-header score-title'>{this.state.course.course_name}</div>
                  <div className='holes-container'>
                  {this.props.roundDisplayed.holes.map(hole =>
                     <div onClick={() => this.showModal(hole.hole_number + 1)} className='score-card-hole'>
                        <div className='hole-number'>{hole.hole_number + 1}</div>
                        <div id={`${hole.hole_number + 1}`}className='shot-number'>{this.props.roundDisplayed.holes[hole.hole_number - 1].total}</div>
                     </div>)}
                  </div>
               </>
            : null}
            {this.state.display ?
               <ScoreModal
                  roundID={this.props.roundDisplayed.id}
                  holeNumber={this.state.hole}
                  courseId={this.state.course.course_id}
                  display={this.state.display}
                  closeModal={this.closeModal}
                  /> : null}
         </div>
      );
   }

}

export default ScoreCard;
