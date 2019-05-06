import React, { Component } from 'react';
import Round from '../Components/Round'

class RoundContainer extends Component {
   state = {userRecord: null}
   // componentDidMount(){
   //    let personalRecord = this.props.userRounds[0];
   //    for(let i = 0; i < this.props.userRounds.length; i++){
   //        if(this.props.userRounds[i].score.total < personalRecord.score.total){
   //           personalRecord = this.props.userRounds[i]
   //        }
   //    }
   //    this.setState({
   //       userRecord: personalRecord
   //    })
   //    debugger
   // }
   render() {
      return (
         <div className='round-container'>
            <div className='profile-header'>
               <h2>{this.props.userRounds[0].user.username}</h2>
               <div className='user-stats'>
                  <div>Rounds Recorded: {this.props.userRounds.length}</div>
                  <div>Personal Record: Build out </div>
            </div>
            </div>
               {this.props.userRounds.map(ro => <Round round={ro} showScoreCard={this.props.showScoreCard}/>)}
         </div>
      );
   }

}

export default RoundContainer;
