import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Sidebar, Videos } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  console.log(videos)

  useEffect(() => {
    fetchFromAPI(`search?query=${selectedCategory}`).then(({data}) =>
      setVideos(data)
    );
  }, [selectedCategory, setSelectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright {new Date().getFullYear()} @Tega
        </Typography>
      </Box>

      <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
        <Typography
          variant="h4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
