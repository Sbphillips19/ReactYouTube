import _ from 'lodash';
//gets react from installed modules (in node_modules folder)
// and assigns react to react
import React, { Component} from 'react';
// to render a component to the DOM use react-dom
// use to change the DOM directly
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// need to provide path reference if it's a file we created
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAlJVhIokPRTHlAYn5SleIOA4UzRsLUGEY';


// Create a new component. This component
//should produce some HTML
// MAKE COMPONENT

//const- final value of variable- will never be reassigned
// would never see somthing like App = 5 since can't reasign
// JSX- looks like html but behind the scenes is java script-
  // this is from when it gets compiled
  // JSX can't be interpreted to the browser
  // convert to vanilla javascript
  // JSX produces actual html that gets rendered into the DOM
  // using babel
  // in vanilla javascript- React.createElement("div",null,"Hi!");
      // use this site to convert- https://babeljs.io/repl/
      // much messier, that's why we use JSX

// const App = function() {
// for function => in place of function

// const App  = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // instead of function can you => instead
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      // this.setState({ videos: videos }); - if same name/ key and property value same
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
}
}






// Need to create an instance of App so see below
// If nothing between tabs and use a space and / --> <App />
// <App></App>

// Make sure gets inserted into the DOM
// Take this components generated html
// Put it on the page (in the DOM)
// SHOW COMPONENT ON THE PAGE

ReactDOM.render(<App />, document.querySelector('.container')) ;

// need to use a second argument as an existing DOM note on the page
// to tell it where to render
// for example when <div class= "container">
