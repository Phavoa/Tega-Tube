import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel/home?id=${id}`).then(({ meta }) => {
      const transformedData = { ...meta, thumbnail: meta.avatar };
      // delete transformedData.avatar;
      setChannelDetail(transformedData);
    });

    fetchFromAPI(`channel/videos?id=${id}`).then(({ data, meta }) => {
      const title = meta.title;
      data.map((value, idx) => {
        value.channelTitle = title;
      })
      // data.channelTitle = title;
      setVideos(data)
    });
  }, [id]);

  // const {avater: thumbnail} = channelDetail;
  // channelDetail.thumbnail = thumbnail;
  console.log(videos.channelTitle);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
        </Box>
        <Box display="flex" p="3">
          <Box sx={{ mr: { sm: "150px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
