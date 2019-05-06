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
   }
   render() {
      return (
         <div onClick ={() => this.props.showScoreCard(this.props.round, 'ScoreCard')} className='round-card'>
            {this.state.course === null ? <ReactLoading /> :
               <div className='round-stats'>
                  <div className='round-course-name-div'>
                     <h1 className='round-course-name'>{this.state.course.course_name}</h1>
                  </div>
                  <div className='round-score'>
                     <h1>Add Score!</h1>
                  </div>
               </div>}
         </div>
      );
   }

}

export default Round;
