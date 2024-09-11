import React from 'react';
import '../styleSheets/count.css';


function Count({numClicks}){
    return(
        <div className="count">
            {numClicks}
        </div>
    );
}

export default Count;