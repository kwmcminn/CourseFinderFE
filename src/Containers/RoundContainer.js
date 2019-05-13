import React, { Component } from 'react';
import Round from '../Components/Round'

class RoundContainer extends Component {
   state = {userRecord: null}

   render() {
      return (
         <div className='round-container'>
            <div className='profile-header'>
               <h1>{this.props.userRounds[0] ? this.props.userRounds[0].user.username : null}</h1>
               <div className='user-stats'>
                  <h3>Rounds Recorded: {this.props.userRounds.length}</h3>
            </div>
            </div>
               {this.props.userRounds.map(ro => <Round round={ro} showScoreCard={this.props.showScoreCard}/>)}
         </div>
      );
   }

}

export default RoundContainer;
