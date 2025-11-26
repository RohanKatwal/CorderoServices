import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { VideoType } from "@/components/shared/modal/VideoModal";

interface VideoReturnType {
  video?: VideoType | null;
  videos?: VideoType[] | null;
  message?: string | null;
  error?: string | null;
}

export const getVideos = async (): Promise<VideoReturnType> => {
  try {
    const snap = await getDocs(collection(db, "videos"));

    const videos: VideoType[] = snap.docs.map((doc) => {
      const data = doc.data() as Omit<VideoType, "id">;
      return {
        id: doc.id,
        ...data,
      };
    });

    return {videos};
  } catch (error) {
    console.error("Error fetching videos:", error);
    return { videos: [], error: "Failed to get videos"};
  }
};

export const addVideo = async (data: VideoType): Promise<VideoReturnType> => {
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
    console.log(error);
    return { video: null, error: "Failed to add video" };
  }
};

export const deleteVideo = async (id: string): Promise<VideoReturnType> => {
  try {
    if (!id) {
      return { message: null, error: "Video ID not provided" };
    }
    await deleteDoc(doc(db, "videos", id));

    return { message: "Successfully Deleted", error: null };
  } catch (error) {
    console.error("Delete video error:", error);
    return { message: null, error: "Failed to delete video" };
  }
};

export const editVideo = async (data: VideoType): Promise<VideoReturnType> => {
  try {
    const { id, title, description, url, location } = data;

    if (!id) {
      return { message: null, error: "Video ID is missing" };
    }

    if (
      !title.trim() ||
      !description.trim() ||
      !url.trim() ||
      !location.trim()
    ) {
      return { message: null, error: "Please fill all the fields" };
    }

    const videoRef = doc(db, "videos", id);

    await updateDoc(videoRef, {
      title,
      description,
      url,
      location,
      updatedAt: new Date(),
    });

    return { message: "Successfully updated video", error: null };
  } catch (error) {
    console.log("Error editing video:", error);
    return { message: null, error: "Failed to edit video" };
  }
};
