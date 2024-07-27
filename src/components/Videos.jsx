import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from './';



const Videos = ({ videos, setVideos }) => {
  console.log(videos)
  return (
    <Stack direction={"row"} flexWrap="wrap" justifyContent="center" alignItems="start">
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} /> }
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  );
};

export default Videos;
