import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { Videos, Loader } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?query=${searchTerm}`)
      .then(({ data }) => {
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          setVideos([]);
        }
      })
      .catch((error) => console.error("Error fetching search results:", error));
  }, [searchTerm]);

  if(!videos?.length) return <Loader />;

  return (
    <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
      <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#F31503" }}> {searchTerm} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
