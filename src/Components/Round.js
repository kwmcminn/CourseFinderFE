import React from 'react';
import '../CSS/Round.css'
import ReactLoading from 'react-loading';

class Round extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         course: null
      }
   }

   componentDidMount(){
      let score = 0
      fetch('http://localhost:3000/user_rounds',{
           method: 'POST',
           headers: {'Content-Type': 'application/json', Accept: 'application/json'},
           body: JSON.stringify(this.props.round)
         })
      .then(response => response.json())
      .then(json => {
         this.setState({
            course: json.courses[0]
         })
      })
      .then(this.tallyScore())
      .then(this.tallyHoles())
   }

   tallyScore(){
      let score = 0
      for(let i = 0; i < this.props.round.holes.length; i++){
         score = score + this.props.round.holes[i].total
         console.log(score)
      }
      this.setState({
         totalScore: score
      })
   }

   tallyHoles(){
      let holes = 0
      for(let i = 0; i < this.props.round.holes.length; i++){
         if(this.props.round.holes[i].total !== 0){
            holes++
         }
      }
      this.setState({
         holesCompleted: holes
      })
   }
   render() {
      return (
         <div className='round-card' onClick ={() => this.props.showScoreCard(this.props.round, 'ScoreCard')} >
            {this.state.course === null ? <ReactLoading /> :
               <div className='round-stats'>
                  <div className='round-course-name-div'>
                     <h2 className='round-course-name'>{this.state.course.course_name}</h2>
                  </div>
                  <div className='round-score'>
                     <div>Total Score: {this.state.totalScore ? this.state.totalScore : 0}</div>
                     <div className={this.state.holesCompleted === this.props.round.holes.length ? 'green' : 'red'}>Holes: {this.state.holesCompleted}/{this.props.round.holes.length}</div>
                  </div>
               </div>}
         </div>
      );
   }

}

export default Round;
