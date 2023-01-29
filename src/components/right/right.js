import React from 'react';
import './right.css';

function right() {
    return(
        <div>
            <div className='container'>
                <input type={Text} className="input" placeholder="이메일 또는 전화번호"  />
                <input type={Text} className="input" placeholder="비밀번호" />
                <button className="login">로그인</button>
                <div className='forget'>
                    <a className="forgetPw" href='#;'>비밀번호를 잊으셨나요?</a>
                </div>
                <hr className='hr'/>
                <button className='newIdMake'>새 계정 만들기</button>
            </div>
            <div className='bottom'>
                유명인, 브랜드 또는 비즈니스를 위한 <a className="makePage" href='#;'>페이지 만들기.</a>
            </div>
        </div>
    );
}

export default right;