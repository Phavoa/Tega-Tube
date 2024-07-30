import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";


const Videos = ({ videos, direction }) => {
  // console.log(videos);

  if(!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item?.type === "video" && <VideoCard video={item} />}
          {item?.type === "channel" && <ChannelCard channelDetail={item} />}
          {/* {item?.type === "shorts_listing" && (
            <ShortList shortList={item} />
          )} */}


          {/* 
          {item?.type === "playlist" && <PlaylistCard playlist={item} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
