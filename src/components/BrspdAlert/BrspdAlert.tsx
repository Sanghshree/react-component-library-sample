import React from 'react';
import redIcon from '../../images/Branding/09 Icon Library/PNG/icon-xout-red.png';
import alertClose from '../../images/Branding/09 Icon Library/PNG/icon-xout-black-small.png'
import greenIcon from '../../images/Branding/09 Icon Library/PNG/icon-checkmark-green.png'

import './BrspdAlert.scss'


export interface AlertProps {
    message?: string;
    severity?: 'Success' | 'Error';
}

const BrspdAlert = ({ message, severity, ...props }: AlertProps) => {
    return (
        <>
            <div className='banner-alert'>
                <div style={{ display: 'flex', textAlign: 'center' }}>
                    {severity === 'Error' ? <img src={redIcon} className='img-red'></img> : <img src={greenIcon} className='img-red'></img>}
                    <span className='message-alert'> {message}  </span>
                    <img src={alertClose} className='alert-close-icon'></img>
                </div>
            </div>
        </>

    );
};
export default BrspdAlert;
