import Analytics from "./dashboard/Analytics"
import { useEffect, useState } from 'react';

const MainApp = () => {
    const [videos, setVideos] = useState([])
    async function get_data() {
    let hasMore = true
    let cursor = "0"
    let vids = [];

    while  (hasMore) {
      const result = await fetch("http://127.0.0.1:8000/tonedetection/getvideos?" + new URLSearchParams({cursor}));
      const json = await result.json()
      vids = [...vids, ...json.data.videos]
      const sortedVideos = vids.sort((a, b) => b.create_time - a.create_time)
      setVideos([...sortedVideos]); 
      hasMore = Boolean(json.data.hasMore)
      cursor = json.data.cursor
    } 

  }

  useEffect(() => {
    get_data()
  }, [])
    return <Analytics videos = {videos}/>
}

export default MainApp