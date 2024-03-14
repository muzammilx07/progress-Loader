import React, { useEffect, useState } from 'react';
import './loader.css';

function Loader() {
    const [filled, setFilled] = useState(0);
    const [status, setStatus] = useState('');

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(filled < 100){
                setFilled(prev=>prev+1);
                setStatus('Loading.....');
            }else{
                setStatus('Loaded');
            }
        },100);
        return ()=> clearTimeout(timer); //cleanup when component unmounts
    },[filled]);

    return (
        <div className='main'>
            <h4>Progress Bar</h4>
            <div className='progressbar'>
                <div
                    style={{
                        height: '100%',
                        width: `${filled}%`,
                        backgroundColor: 'green',
                        animation: 'width 0.5s linear'
                    }}
                ></div>
                <span className="level">{filled}%</span>
            </div>
            <span className="status">{status}</span>
        </div>
    );
}

export default Loader;
