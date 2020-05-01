import React from 'react';
import './MoodButtons.css'
function MoodButtons(props){

    return(
        <nav className="navbar navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNAvAltMarkUp" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div>
                        <button className="btn btn-info" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleButtonClick} id='ocean'>Ocean</button>
                        <button className="btn btn-info" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleButtonClick} id='rain'>Rain</button>
                        <button className="btn btn-info" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleButtonClick} id='river'>River</button>
                        <button className="btn btn-info" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleButtonClick} id='whale'>Whale</button>
                        <button className="btn btn-info" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleButtonClick} id='meditative'>Meditative</button>
                        <button className="btn stop-button" data-toggle="collapse" data-target="#navbarNavAltMarkup" style={{width: '100px'}} onClick={props.handleStop} id='stop'>Stop</button>
                    </div>
                </div>
            </div>
 
        </nav>

        
    )
}

export default MoodButtons;