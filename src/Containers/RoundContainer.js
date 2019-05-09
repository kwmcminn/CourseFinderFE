import React, { Component } from 'react';
import Round from '../Components/Round'

class RoundContainer extends Component {
   state = {userRecord: null}
   
   render() {
      return (
         <div className='round-container'>
            <div className='profile-header'>
               <h2>{this.props.userRounds[0].user.username}</h2>
               <div className='user-stats'>
                  <div>Rounds Recorded: {this.props.userRounds.length}</div>
            </div>
            </div>
               {this.props.userRounds.map(ro => <Round round={ro} showScoreCard={this.props.showScoreCard}/>)}
         </div>
      );
   }

}

export default RoundContainer;
