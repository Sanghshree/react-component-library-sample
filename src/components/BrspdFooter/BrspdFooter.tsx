import React from "react";
import twitter from '../../images/Branding/09 Icon Library/PNG/icon-twitter-default.png';
import fb from "../../images/Branding/09 Icon Library/PNG/icon-facebook-default.png";
import linkedIn from "../../images/Branding/09 Icon Library/PNG/icon-linked-in-default.png";
import { Grid } from '@mui/material';
import brspdlogo from "../../images/Branding/01 Logo/Logo/Full Color/Digital/Brightspeed_Logo_Full_Color_RGB_864px@72ppi.png";
import footerImage from  "../../images/Branding/01 Logo/Logo/Full Color/Digital/footer-bg-big.png";
import './BrspdFooter.scss';

export interface FooterProps {
  isCondensed?: boolean;
  forCustomersItem?: string [];
  forAboutItems?: string [];
  copyrightText?: string;
}


const BrspdFooter = ({isCondensed = false ,  forAboutItems =[],forCustomersItem=[] ,copyrightText,...props}:FooterProps) => {
return (

  !isCondensed ? <>

    <div className="desktop-footer-container">
    <Grid 
    container
    className="desktop-footer">
    <Grid xs={2} >
      <div className="customer-column">
          <ul className="list-customers">
            <strong>
              <li className="customer-header-list">For Customers</li>
            </strong>
            <div>
            {forCustomersItem.map((item: any) => 
              <li className="customers-with-disab" key={item}
              >{item}</li>
            )
            }</div>
          </ul>
          </div>
          </Grid>
          <Grid xs={2} >
          <div>
          <ul className="list-customers">
            <strong>
              <li className="About-Brightspeed ">About Brightspeed</li>
            </strong>
            <div >
            {forAboutItems.map((item: any) => 
              <li className="Careers-Newsroom-Con" key={item}
              >{item}</li>
            )
            }
            </div>
          </ul>
        </div>
        </Grid>

        <Grid xs={2} >
          <div className="brightspeed-footer-content">
            <div>
              <img
                src={brspdlogo}
                alt="logo"
                className="img-brightspeed-footer"
              />
              <h5 className="follow-us">FOLLOW US</h5>
              <div className="social-logo">
              <img alt="twitter" src={twitter} className="logo-social" />
              <img alt="fb" src={fb} className="logo-social" />
              <img alt="linkedIn" src={linkedIn} className="logo-social" />
              </div>
            </div>
            </div>

            <div className="rights-content">
              <p className="font-size-copyright">
                <span>&#169;</span> {copyrightText}
              </p>
            </div>
            <div className="rights-content-legals">
                <span>
                <p>Legal Notices | Privacy Policy | Cookie Settings</p>
              </span>
            </div>
          
        </Grid>
      </Grid>
      <img  className='footerImg'></img>
      </div>
  </> 
   :
  <div className='footerParent'>
    <div className='footermain'>
      <div className='footerleft'>
        <div className='allrights'>{copyrightText}</div>
      </div>
      <div className='footerright'>
        <div><a href="https://www.brightspeed.com/aboutus/legal/">Legal Notices </a></div>
        <div><a href="https://www.brightspeed.com/privacy-notice">Privacy Policy </a></div>
        <div><a href="#">Cookie Settings</a></div>
      </div>
    </div>
    <div className='footerImg'>
    </div>
  </div> 
);
};

export default BrspdFooter;


/*import React from 'react'
import { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import BuyflowContent from "../../../shared/BuyflowContent.json";
import { getFooterContent } from "server/services/cmsService";
const Footer = (props: any) => {

  const [cms, setCms] = useState({
    content: BuyflowContent.footer
  })

  useEffect(() => {
    async function retrieveFooterContent() {
      const response = await getFooterContent();
      setCms({
        ['content']: response?.data.entry.footer
      })
    }

    retrieveFooterContent();
  }, []);

  return (

    <div className={styles.footerParent}>
      <div className={styles.footermain}>
        <div className={styles.footerleft}>
          <div className={styles.allrights}>{cms.content?.copyright_text}</div>
        </div>
        <div className={styles.footerright}>
          <div><a href="https://www.brightspeed.com/aboutus/legal/">{cms.content?.legal_notices_label}</a></div>
          <div><a href="https://www.brightspeed.com/privacy-notice">{cms.content?.privacy_policy_label}</a></div>
          <div><a href="#" onClick={(e)=>{OneTrust.ToggleInfoDisplay()}}>{cms.content?.cookie_settings_label}</a></div>
        </div>
      </div>
      <div className={styles.footerImg}>
      </div>
    </div>
  )
}

export default Footer**/