"use client";

import { useEffect } from "react";
import type { Project } from "@/data/site";

type VideoModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="video-modal-head">
          <div>
            <p>{project.eyebrow}</p>
            <h3 id="video-modal-title">{project.title}</h3>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close video">
            ×
          </button>
        </div>

        <video
          key={project.demoVideo}
          className="project-demo-video"
          src={project.demoVideo}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />

        <div className="video-modal-foot">
          <p>{project.impact}</p>
          <span>Replace the sample MP4 with your real screen recording.</span>
        </div>
      </div>
    </div>
  );
}
