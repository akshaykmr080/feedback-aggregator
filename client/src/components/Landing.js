import React  from 'react';
import Background from '../assets/Feedback-to-Creatives-.png';

const Landing = () => {
    return(
        <div style={{ textAlign: 'center', backgroundImage: `url(${Background})`,backgroundRepeat: 'repeat-x',  height: '80vh' }}>
            <h1>Feedback-Aggregator</h1>
            Collect feedback from your users
        </div>
    )
}

export default Landing;