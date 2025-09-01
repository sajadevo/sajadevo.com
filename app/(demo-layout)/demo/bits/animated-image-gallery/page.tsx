"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

type Image = {
  id: string;
  src: string;
};

const images: Image[] = [
  {
    id: "img-1",
    src: "https://images.unsplash.com/photo-1567789180987-369389e709ac?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "img-2",
    src: "https://images.unsplash.com/photo-1715256962929-9d78afe39e24?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "img-3",
    src: "https://images.unsplash.com/photo-1703066555913-0388526cb77f?q=80&w=1327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AnimatedImageGallery() {
  const [selectedImage, setSelectedImage] = React.useState<Image | null>(null);

  return (
    <div className="mx:max-w-lg mx-auto grid size-full min-h-screen grid-cols-1 items-center gap-4 p-4 md:max-w-xl md:grid-cols-3">
      {images.map(({ id, src }) => (
        <motion.div
          key={id}
          layoutId={id}
          transition={{
            type: "spring",
            duration: 0.6,
          }}
          onClick={() => setSelectedImage({ id, src })}
          className="h-56 w-full cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            alt={id}
            src={src}
            className="size-full object-cover object-center grayscale-100 transition-all duration-500 hover:grayscale-0"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 grid size-full place-items-center bg-black/70"
          >
            <motion.div
              transition={{
                type: "spring",
                duration: 0.8,
              }}
              layoutId={selectedImage.id}
              onClick={(e) => e.stopPropagation()}
              className="h-10/12 w-auto overflow-hidden rounded-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.id}
                className="size-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
