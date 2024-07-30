import React from 'react';
import { Box, Typography, Card, Link } from '@mui/material';

const ShortListCard = ({ shortList: {data} }) => {
  console.log(data[0]?.type);

  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
        margin: 1,
      }}
    >
      {/* <Link to={videoId ? `/video/${data.videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={data?.thumbnail[0].url}
          alt={data?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link> */}
      {/* <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle}
          </Typography>
        </Link>

        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle.slice(0, 60) || demoChannelTitle}
            <CheckCircle sx={{ fontsize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent> */}
    </Card>
  );
};

export default ShortListCard;
