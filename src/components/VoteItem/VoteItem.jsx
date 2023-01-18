import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function VoteItem({ vote }) {
    //console.log(vote)
    //let v=vote.vote

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>

        <Accordion expanded={expanded === 'panel{vote.id}'} onChange={handleChange('panel{vote.id}')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {vote.vote === vote.home_team_id ? vote.home_team_en : vote.away_team_en}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{vote.home_team_en} vs {vote.away_team_en}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default VoteItem