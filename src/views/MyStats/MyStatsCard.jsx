import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import './MyStatsCard.css'

function MyStatsCard({title, qnty}) {
  return (
    <Box className="boxStats">
      <Card className="cardStats">
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {qnty}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MyStatsCard;
