import React from 'react';
import axios from 'axios';
import Posts from '../Posts/Posts';
import PostNew from '../PostNew/PostNew';
import './App.less';

var MainAPI = 'https://parser-url-api.herokuapp.com/';

var App =  React.createClass ({

  getInitialState() {
    return{
      showNewPost: null,
      metaTitle: null,
      metaDescription: null,
      metaImage: null,
      items: []
    }
  },

  componentDidMount(){
    $.getJSON(
        MainAPI +'items',
        (response) => { this.setState({ items: response }) }
    )
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  linkParser(){

    var entryText = $('#entryText'),
        APIURL = MainAPI + 'links/linkpreview',
        content = entryText.val(),
        urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        title = null,
        metaDescription = null,
        metaTitle = null,
        metaImage = null,
        urlLink = null;

    if (content.match(urlRegex)){
      var url = content.match(urlRegex)[0];

      // axios.get(APIURL,{url: url})
      //   .then(function (data) {
      //     title = data.title;
      //     metaDescription = data.meta_description;
      //     metaTitle = data.meta_title;
      //     metaImage = data.meta_image;
      //     urlLink = url;
      //     this.setState({
      //       metaDescription: metaDescription,
      //       metaTitle:metaTitle,
      //       metaImage:metaImage,
      //       title:title,
      //       urlLink:urlLink,
      //       showNewPost: true
      //     })
      //   });
      $.ajax({
        url: APIURL,
        type: 'GET',
        data: {url: url},
        success: (data) => {
          title = data.title;
          metaDescription = data.meta_description;
          metaTitle = data.meta_title;
          metaImage = data.meta_image;
          urlLink = url;
          this.setState({
            metaDescription: metaDescription,
            metaTitle:metaTitle,
            metaImage:metaImage,
            title:title,
            urlLink:urlLink,
            showNewPost: true
          })
        }
      })
    }
  },

  clearMeta(){
    this.setState({
      metaDescription: null,
      metaTitle: null,
      metaImage: null,
      showNewPost: null
    })
  },

  render() {
    return (
      <div className='App'>
        <PostNew 
          linkParser={this.linkParser}
          clearMeta={this.clearMeta}
          showNewPost={this.state.showNewPost}
          metaTitle={this.state.metaTitle}
          metaDescription={this.state.metaDescription}
          metaImage={this.state.metaImage}
          handleSubmit={this.handleSubmit}
        />
        <Posts
          linkParser={this.linkParser}
          metaTitle={this.state.metaTitle}
          metaDescription={this.state.metaDescription}
          metaImage={this.state.metaImage}
          items={this.state.items}
        />
      </div>
    );
  }
});

export default App;






