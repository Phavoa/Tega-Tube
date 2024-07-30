import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: { videoId, thumbnail, title, channelId, channelTitle },
}) => {
  // console.log(thumbnail[0].url);

  return (
    <Card
      sx={{
        width: { md: "320px",sm: "358px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
        margin: 1,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={thumbnail[0].url}
          alt={title}
          sx={{ width: {xs: "100%", sm: '358px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
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
      </CardContent>
    </Card>
  );
};

export default VideoCard;
