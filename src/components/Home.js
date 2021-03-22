import React from 'react';
import future from '../img/future.mp4';

function Home() {
    return (
        <div className='Home'>
            <div>
              <h1 className='hello'>Hello, World</h1>
              <h1 className='hello'>My name is Seb!</h1>
            </div>
            {/* <img className=''/> */}
            <video className='vid-future' autoPlay loop muted>
                <source className='future' src={future} type='video/mp4' />
            </video>
        </div>
    );
}

export default Home;