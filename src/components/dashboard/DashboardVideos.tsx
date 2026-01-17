"use client";

import { useEffect, useState } from "react";
import { getVideos, deleteVideo } from "@/lib/actions/firebaseVideos";
import VideoModal, { VideoType } from "../shared/modal/VideoModal";
import VideoActionButton from "./VideoActionButton";
import { toast } from "react-toastify";

const DashboardVideos = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    setLoading(true);
    const data = await getVideos();
    setVideos(data.videos ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const { message, error } = await deleteVideo(id);
      if (error) return toast.error(error);
      toast.success(message);
      fetchVideos();
    } catch (err) {
      alert("Failed to delete video");
    }
  };

  return (
    <section className="dashboard-content-wrapper">
      <div className="dashboard-heading">
        <h2>Videos</h2>
        <VideoModal type="Add" onSuccess={fetchVideos} />
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>URL</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : videos.length > 0 ? (
              videos.map((video) => (
                <tr key={video.id}>
                  <td className="truncate">{video.title}</td>
                  <td className="truncate">{video.description}</td>
                  <td className="truncate">{video.url}</td>
                  <td className="truncate">{video.location}</td>
                  <VideoActionButton
                    video={video}
                    onSuccess={fetchVideos}
                    onDelete={() => handleDelete(video.id!)}
                  />
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>No videos found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardVideos;
