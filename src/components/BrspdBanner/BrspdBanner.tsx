import React from 'react';
import smileIcon from '../../images/Branding/09 Icon Library/PNG/icon-circle-success-white.png';
import infoIcon from '../../images/Branding/09 Icon Library/PNG/icon-circle-info-white.png';
import './BrspdBanner.scss'


export interface BannerProps {
  message?: string;
  severity?: 'Success' | 'Error' | 'Info' | 'ErrorWithLink';
  IconBanner?: boolean;
}

const BrspdBanner = ({ message, severity, IconBanner = false, ...props }: BannerProps) => {
  return (
    <>
      {IconBanner ?
        <div className='icon-banner'>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            {severity === 'Success' ? <img className='banner-img' src={smileIcon}></img>
              : severity === 'Info' ? <img className='banner-img' src={infoIcon}></img>
                : severity === 'Error' || severity === 'ErrorWithLink' ? <img className='banner-img' style={{ transform: ' rotate(180deg)' }} src={infoIcon}></img>
                  : <img className='banner-img' style={{ rotate: '180 degree' }} src={infoIcon}></img>}
            <span className='icon-message'> {message}  </span>
            <span className='close-icon'>X</span>
          </div>
        </div> : <div className='banner'>
          <div className='message'> {message} </div>
        </div>}
    </>

  );
};
export default BrspdBanner;
