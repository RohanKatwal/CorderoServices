import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { VideoType } from "@/components/shared/dashboard/DashboardVideos";

export const getVideos = async (): Promise<VideoType[]> => {
  try {
    const snap = await getDocs(collection(db, "videos"));

    const videos: VideoType[] = snap.docs.map((doc) => {
      const data = doc.data() as Omit<VideoType, "id">;
      return {
        id: doc.id,
        ...data,
      };
    });

    return videos;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

export const addVideo = async (data: VideoType) => {
  try {
    const { title, description, url, location } = data;
    if (
      !title.trim() ||
      !description.trim() ||
      !url.trim() ||
      !location.trim()
    ) {
      return { video: null, error: "Please fill all the fields" };
    }

    const docRef = await addDoc(collection(db, "videos"), {
      title,
      description,
      url,
      location,
      createdAt: new Date(),
    });

    return {
      video: { id: docRef.id, ...data },
      error: null,
    };
  } catch (error) {
    console.log(error)
    return { video: null, error: "Failed to add video" };
  }
};

export const editVideo = async (id: string) => {};

export const deleteVideo = async (id: string) => {};
