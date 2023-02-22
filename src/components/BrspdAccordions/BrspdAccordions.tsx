import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './BrspdAccordions.scss';


export interface AccordionProps{
    content?: string;
    label?: string;
}

const BrspdAccordions = ({content , label, ...props}: AccordionProps) => {
  return (
    <div >
      <Accordion className='accordionGrid' style={{borderTop: 'solid 1px #000' ,borderBottom: 'solid 1px #000',height:95}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon style={{marginTop:26 , fontSize:30}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{marginTop:26}}>{label}</Typography>
        </AccordionSummary>
        <AccordionDetails  style={{ border: 'solid 1px #fff',height:95 , marginTop:12}}>
          <Typography style={{width:599}}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
{/*       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
{/*       <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
export default BrspdAccordions;