import React from 'react';

import './left.css';

function left() {
    return(
        <div>
            <div className='top'>
                <label className='title'>facebook</label>  
            </div>
            <div className='bottom'>
                <label className='content'>
                    Facebook에서 전세계에 있는 친구,<br/> 가족, 지인들과 함께 이야기를 나눠보세요.
                </label>
            </div>
        </div>
    );
}

export default left;