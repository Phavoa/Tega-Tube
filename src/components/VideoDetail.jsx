// src/components/VideoDetail.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Typography,
  Box,
  Stack,
  CircularProgress,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video/info?id=${id}`)
      .then((data) => setVideoDetail(data))
      .catch((error) => console.error("Error fetching video details:", error));

    fetchFromAPI(`search?query=new`)
      .then(({ data }) => setVideos(data))
      .catch((error) => console.error("Error fetching related videos:", error));
  }, [id]);

  if (!videoDetail) {
    return (
      <Box
        minHeight="95vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  const { title, channelId, channelTitle, viewCount, description } =
    videoDetail;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      minHeight="95vh"
      px={5}
      py={2}
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box flex={1}>
          <Box>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="100%"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" mt={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
            >
              <Link
                to={`/channel/${channelId}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="primary"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
            </Stack>
            <Divider sx={{ my: 2, borderColor: "#fff" }} />
            <Box
              sx={{
                maxHeight: expanded ? "none" : 100,
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <Typography variant="body1" color="#fff">
                {description}
              </Typography>
            </Box>
            <Button onClick={handleExpandClick} sx={{ mt: 1 }}>
              {expanded ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </Box>
        <Box
          p={2}
          sx={{
            overflowY: "auto",
            height: { md: "100vh", xs: "auto" },
            width: { md: "30%", xs: "100%" },
          }}
        >
          <Typography
            variant="h4"
            mb={2}
            fontWeight="bold"
            sx={{ color: "primary.main" }}
          >
            Related
            <span style={{ color: "#F31503" }}> Videos</span>
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
