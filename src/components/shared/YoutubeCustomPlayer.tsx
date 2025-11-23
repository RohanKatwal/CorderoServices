"use client";
import { useState } from "react";

function getYoutubeId(url: string) {
  try {
    const u = new URL(url);
    if (u.searchParams.get("v")) return u.searchParams.get("v")!;
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    return "";
  } catch {
    return "";
  }
}

export default function YouTubeCustomPlayer({ url }: { url: string }) {
  const [play, setPlay] = useState(false);
  const id = getYoutubeId(url);

  if (!id) return <p>Invalid YouTube URL</p>;

  if (play) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    );
  }

  return (
    <div className="video-thumbnail" onClick={() => setPlay(true)}>
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Thumbnail"
        className="thumbnail-img"
      />

      <div className="custom-play-btn">
        <div className="play-icon"></div>
      </div>
    </div>
  );
}
