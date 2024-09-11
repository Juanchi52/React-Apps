import React from 'react';
import '../styleSheets/count.css';

class Count extends React.Component{
    render () {
        return(
            <div className="count">
                {this.props.numClicks}
            </div>
        );
    }
}

export default Count;