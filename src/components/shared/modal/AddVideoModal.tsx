"use client";

import z from "zod";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import Textarea from "../Textarea";
import { addVideo, editVideo } from "@/lib/actions/firebaseVideos";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface VideoModalProps {
  type: "Add" | "Edit";
  video?: VideoType;
}

export const VideoSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  url: z
    .string()
    .min(1, { message: "URL is required" })
    .url({ message: "Enter a valid url" }),
  location: z.string().min(1, { message: "Location is required" }),
});

export type VideoType = z.infer<typeof VideoSchema>;

const AddVideoModal = ({ type, video }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VideoType>({
    resolver: zodResolver(VideoSchema),
    defaultValues: {
      title: video?.title ?? "",
      description: video?.description ?? "",
      url: video?.url ?? "",
      location: video?.location ?? "",
    },
  });

  const handleAddVideo = async (data: VideoType) => {
    if (loading) return;
    setLoading(true);
    try {
      const { video, error } = await addVideo(data);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success("Video added successfully");
      reset();
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      toast.error("Failed to add video");
      return;
    } finally {
      setLoading(false);
    }
  };

  const handleEditVideo = async (data: VideoType) => {
    if (loading) return;
    setLoading(true);
    try {
      const { message, error } = await editVideo(data);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success(message);
      reset();
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      toast.error("Failed to edit video");
      return;
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: VideoType) => {
    if (type === "Add") return handleAddVideo(data);
    return handleEditVideo(data);
  };

  useEffect(() => {
    if (isOpen && type === "Edit" && video) {
      reset(video);
    }
  }, [isOpen, video, reset, type]);

  return (
    <div>
      {type === "Add" ? (
        <button className="btn-primary" onClick={() => setIsOpen(true)}>
          Add Video
        </button>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99998 16.6667H17.5M2.5 16.6667H3.89545C4.3031 16.6667 4.50693 16.6667 4.69874 16.6206C4.8688 16.5798 5.03138 16.5125 5.1805 16.4211C5.34869 16.318 5.49282 16.1739 5.78107 15.8856L16.25 5.41669C16.9404 4.72634 16.9404 3.60705 16.25 2.91669C15.5597 2.22634 14.4404 2.22634 13.75 2.91669L3.28105 13.3856C2.9928 13.6739 2.84867 13.818 2.7456 13.9862C2.65422 14.1353 2.58688 14.2979 2.54605 14.468C2.5 14.6598 2.5 14.8636 2.5 15.2713V16.6667Z"
              stroke="#55a5fbff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={type === "Add" ? "Add Video" : "Edit Video"}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
          <Input
            type="text"
            label="Title"
            name="title"
            error={errors.title?.message}
            register={register("title")}
          />
          <Input
            type="text"
            label="URL"
            name="url"
            error={errors.url?.message}
            register={register("url")}
          />
          <Input
            type="text"
            label="Location"
            name="location"
            error={errors.location?.message}
            register={register("location")}
          />
          <Textarea
            label="Description"
            name="description"
            error={errors.description?.message}
            register={register("description")}
          />
          <button disabled={loading} type="submit" className="btn-primary">
            {loading
              ? type === "Add"
                ? "Adding..."
                : "Updating..."
              : type === "Add"
              ? "Add Video"
              : "Update Video"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddVideoModal;
