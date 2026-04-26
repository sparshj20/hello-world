"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import VideoEmbed from "./VideoEmbed";
import type { Components } from "react-markdown";

function isYouTubeUrl(text: string): boolean {
  return /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/.test(text.trim());
}

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Components = {
    p({ children }) {
      const text =
        typeof children === "string"
          ? children
          : Array.isArray(children)
          ? children.map((c) => (typeof c === "string" ? c : "")).join("")
          : "";
      if (isYouTubeUrl(text)) {
        return <VideoEmbed url={text.trim()} />;
      }
      return <p>{children}</p>;
    },
  };

  return (
    <div className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
