import Analytics from "./dashboard/Analytics";
import Recommendations from "./recommendations/Recommendations";
import { useEffect, useState } from "react";

const url = "http://127.0.0.1:8000/tonedetection/getvideos?";

const MainApp = (props) => {
  const page = props.page.toLowerCase();

  const [videos, setVideos] = useState([]);
  async function get_data() {
    let hasMore = true;
    let cursor = "0";
    let vids = [];

    while (hasMore) {
      const result = await fetch(url + new URLSearchParams({ cursor }));
      const json = await result.json();
      vids = [...vids, ...json.data.videos];
      const sortedVideos = vids.sort((a, b) => b.create_time - a.create_time);
      setVideos([...sortedVideos]);
      hasMore = Boolean(json.data.hasMore);
      cursor = json.data.cursor;
    }
  }

  useEffect(() => {
    get_data();
  }, []);

  if (page === "recommendations") {
    return <Recommendations videos={videos} />;
  }

  return <Analytics videos={videos} />;
};

export default MainApp;
