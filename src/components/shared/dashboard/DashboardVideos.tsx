import { deleteVideo, getVideos } from "@/lib/actions/firebaseVideos";
import AddVideoModal, { VideoType } from "../modal/AddVideoModal";
import ActionButton from "./ActionButton";

const DashboardVideos = async () => {
  const videos = await getVideos();

  const handleDelete = async (id: string) => {
    const video = await deleteVideo(id);

  }
  return (
    <section className="dashboard-content-wrapper">
      <div className="dashboard-heading">
        <h2>Videos</h2>
        <div>
          
        </div>
        <AddVideoModal type="Add" />
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
            {videos?.length > 0 ? (
              videos.map((video) => (
                <tr key={video.id}>
                  <td className="truncate">{video.title}</td>
                  <td className="truncate">{video.description}</td>
                  <td className="truncate">{video.url}</td>
                  <td className="truncate">{video.location}</td>
                  <ActionButton
                    id={video.id}
                    title={video.title}
                    description={video.description}
                    url={video.url}
                    location={video.location}
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
