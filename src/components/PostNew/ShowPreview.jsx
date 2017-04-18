import React from 'react';

var ShowPreview = React.createClass({

    render(){
        return(
            <div>
                {this.props.showNewPost ?
                    <div className="app-form__preview">
                        <div className="app-form__preview_item"><img className="app-form__preview_item-image" src={this.props.metaImage} /></div>
                        <div className="app-form__preview_item"><h3>{this.props.metaTitle}</h3></div>
                        <div className="app-form__preview_item"><p>{this.props.metaDescription}</p></div>
                        <button className="app-form__preview_button" onClick={this.props.handleClick}>Post this</button>
                    </div>: null
                }
            </div>
        )
    }
});

export default ShowPreview;