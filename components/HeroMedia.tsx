"use client";

import { useRef, useState } from "react";

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  async function playWithSound() {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = false;
      video.currentTime = 0;

      setIsMuted(false);
      setHasEnded(false);

      await video.play();
    } catch (error) {
      console.error("Unable to play video with sound:", error);

      video.muted = true;
      setIsMuted(true);
    }
  }

  async function toggleSound() {
    const video = videoRef.current;

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);

      try {
        await video.play();
      } catch (error) {
        console.error("Unable to enable sound:", error);
        video.muted = true;
        setIsMuted(true);
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }

  async function replayVideo() {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = 0;
    video.muted = false;

    setIsMuted(false);
    setHasEnded(false);

    try {
      await video.play();
    } catch (error) {
      console.error("Unable to replay video:", error);
    }
  }

  return (
    <div
      className="hero-media"
      aria-label="Animated developer portrait"
    >
      <img
        className="hero-poster"
        src="/media/hero-poster.png"
        alt="Rajarshi working at a laptop in a warm developer workspace"
      />

      <video
        ref={videoRef}
        className="hero-video"
        src="/media/hero-ai.mp4"
        poster="/media/hero-poster.png"
        autoPlay
        muted
        playsInline
        preload="metadata"
        disablePictureInPicture
        onEnded={() => setHasEnded(true)}
        onPlay={() => setHasEnded(false)}
      />

      <div
        className="hero-video-vignette"
        aria-hidden="true"
      />

      <div className="hero-sound-control">
        {hasEnded ? (
          <button
            type="button"
            className="media-control"
            onClick={replayVideo}
          >
            <span aria-hidden="true">↻</span>
            Replay with sound
          </button>
        ) : isMuted ? (
          <button
            type="button"
            className="media-control"
            onClick={playWithSound}
          >
            <span aria-hidden="true">🔊</span>
            Play intro with sound
          </button>
        ) : (
          <button
            type="button"
            className="media-control"
            onClick={toggleSound}
          >
            <span aria-hidden="true">🔇</span>
            Mute sound
          </button>
        )}
      </div>
    </div>
  );
}