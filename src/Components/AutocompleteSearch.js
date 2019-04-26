import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Script from 'react-load-script';

class AutocompleteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      scriptLoaded: false
      };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
         this.props.updateLatLongWithSearch(latLng)
         console.log('Success', latLng)
      })
      .catch(error => console.error('Error', error));
  };

  handleScriptLoad = () => {
  this.setState({ scriptLoaded: true })
}

  render() {
    return (
      <div className='search-bar-div'>
      <Script url="http://maps.googleapis.com/maps/api/js?key=AIzaSyAntpQHNnQ1VhJKBJ8ikMKb7HZ-g83JxKA&libraries=places"
     onLoad={this.handleScriptLoad}
         />
         {this.state.scriptLoaded ?
         <PlacesAutocomplete
           value={this.state.address}
           onChange={this.handleChange}
           onSelect={this.handleSelect}
         >
           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
             <div className='search-bar'>
               <input
                 {...getInputProps({
                   placeholder: 'Search Places ...',
                   className: 'location-search-input',
                 })}
               />
               <div className="autocomplete-dropdown-container">
                 {loading && <div>Loading...</div>}
                 {suggestions.map(suggestion => {
                   const className = suggestion.active
                     ? 'suggestion-item--active'
                     : 'suggestion-item';
                   // inline style for demonstration purpose
                   const style = suggestion.active
                     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                     : { backgroundColor: '#ffffff', cursor: 'pointer' };
                   return (
                     <div
                       {...getSuggestionItemProps(suggestion, {
                         className,
                         style,
                       })}
                     >
                       <span>{suggestion.description}</span>
                     </div>
                   );
                 })}
               </div>
             </div>
           )}
         </PlacesAutocomplete>
         : null}
      </div>
    );
  }
}

export default AutocompleteSearch;
