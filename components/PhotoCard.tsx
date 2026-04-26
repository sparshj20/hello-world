"use client";

import { useState } from "react";

export interface PhotoData {
  id: number;
  src?: string;
  caption: string;
  location: string;
  date: string;
  story?: string;
}

export default function PhotoCard({ photo }: { photo: PhotoData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "800px",
        cursor: "pointer",
        aspectRatio: "1",
        borderRadius: "6px",
      }}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={`${photo.caption} — click to see details`}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      {/* Inner — rotates on flip */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front face */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "6px",
            overflow: "hidden",
            background: "var(--color-border)",
          }}
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt={photo.caption}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "var(--color-border)" }} />
          )}
        </div>

        {/* Back face */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "6px",
            overflow: "hidden",
            background: "var(--color-ink)",
            color: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
            gap: "0.25rem",
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.6rem",
              background: "none",
              border: "none",
              color: "var(--color-bg)",
              fontSize: "0.75rem",
              cursor: "pointer",
              opacity: 0.7,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-bg)", margin: 0 }}>
            {photo.caption}
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(250,250,250,0.6)", margin: 0 }}>
            {photo.location}
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(250,250,250,0.6)", margin: 0 }}>
            {photo.date}
          </p>
          {photo.story && (
            <p style={{ fontSize: "0.75rem", color: "rgba(250,250,250,0.8)", marginTop: "0.5rem", lineHeight: 1.5 }}>
              {photo.story}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
