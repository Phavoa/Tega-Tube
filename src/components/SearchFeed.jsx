import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
      <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: "white" }}>
        Search Results for : 
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
