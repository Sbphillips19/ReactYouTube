import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// };

//give search bar a bunch of functionality from the react component class
class SearchBar extends Component {

  constructor(props) {
    super(props);
    // only in constructor state when use this.state
    this.state = {term: ''};
  }


  // render is a method/ function
  // every class must have a render functionality
  // render function must return some JSX
  render() {
    // onChange is a react property
    //this.onInputChange- event handler
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
  );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }



  //event handler is a function that should be run everytime event occurs
  // then pass to input
  // onInputChange(event) {
  //   // most event handlers are called as event object
  //   console.log(event.target.value);
  // }

}

export default SearchBar;
