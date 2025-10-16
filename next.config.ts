import { withNextVideo } from "next-video/process";
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['i.pinimg.com', 'm.media-amazon.com', 'upload.wikimedia.org'],
  },
};

export default withNextVideo(nextConfig);