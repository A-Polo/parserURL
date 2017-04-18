import React from 'react';

var ShowPreview = React.createClass({

    render(){
        return(
            <div>
                {this.props.showNewPost ?
                    <div className="preview-news">
                        <div><img src={this.props.metaImage} /></div>
                        <div><h3>{this.props.metaTitle}</h3></div>
                        <div><p>{this.props.metaDescription}</p></div>
                        <button onClick={this.props.handleClick}>Post this</button>
                    </div>: null
                }
            </div>
        )
    }
});

export default ShowPreview;