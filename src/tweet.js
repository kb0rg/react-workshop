var React = require('react');
var ReactDOM = require('react-dom');

var Twitter = React.createClass({
  getInitialState: function () {
    return {
      data: []
    };
  },
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    // read docs on get and ajax requests
    $.get(this.props.url, function (contents) {
          this.setState({
            data: contents
          });
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };
  
    // POST to add tweet to database
    $.post(this.props.url, tweet, function (newTweet) {
        // Set state in step 10 of the exercise!
        this.setState({ data: newTweet})
      }.bind(this)
    );
  },
  componentDidMount: function () {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={ this.handleTweetSubmit }/>
        <TweetList things = { this.state.data } />
      </div>
    );
  }
});

var TweetForm = React.createClass({
  handleSubmit: function (e) {
    // keep page from refreshing on submit
    e.preventDefault();

    // get values from form, assign to var
    var authorInput = this.refs.author.value
    var tweetInput = this.refs.tweet.value

    // show alert with contents of submitted form
    // alert("Author: " + authorInput + ", Tweet: " + tweetInput);

    // invoke the function in parent class that posts tweet to server
    this.props.onTweetSubmit(authorInput, tweetInput);

    // clear form: reset values to empty strings
    this.refs.author.value = "";
    this.refs.tweet.value = "";

  },

  render: function () {
    return (
      <form onSubmit={ this.handleSubmit } className="tweetForm">
        <input ref="author" type="text" placeholder="Author name" />
        <input ref="tweet" type="text" placeholder="Tweet" />
        <button className="btn btn-info">Submit</button>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var tweets = this.props.things.map(function(tweet) {
      return <Tweet words = {tweet.text} whose = {tweet.author} />
    });
    return (
      <div className="tweetList">
        TWEET LIST , representing: <br />
        { tweets }
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h1>{ this.props.words } </h1>
        <h3>{ this.props.whose } </h3> <br />
      </div>
    );
  }
});

ReactDOM.render(
  <Twitter url = "tweets.json" />,
  document.getElementById('tweets')
);
