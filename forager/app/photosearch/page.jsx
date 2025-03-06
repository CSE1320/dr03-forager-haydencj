"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

export default function PhotoSearch() {
  const router = useRouter();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [cameraInitialized, setCameraInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cameraInitialized) return;

    const startCamera = async () => {
      try {
        const constraints = {
          video: {
            facingMode: "environment",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        };

        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        setStream(mediaStream);

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().then(() => setCameraInitialized(true));
          };
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => stopCamera();
  }, [cameraInitialized]);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setCameraInitialized(false);

      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };

  const saveImageToData = async (imageData) => {
    try {
      setIsLoading(true); // Show loading animation

      const response = await fetch("/save-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageData }),
      });

      if (!response.ok) throw new Error("Failed to save the image");

      setIsSuccess(true); // Show checkmark
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait before redirecting
      router.push("/dashboard");
    } catch (error) {
      console.error("Error saving image:", error);
      return false;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      await saveImageToData(event.target.result);
      router.push("/dashboard");
    };
    reader.readAsDataURL(file);
  };

  const openFileInput = () => fileInputRef.current?.click();

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

    const imageData = canvasRef.current.toDataURL("image/png");
    stopCamera();
    await saveImageToData(imageData);
  };

  return (
    <PageWrapper>
      <div className="w-full h-screen flex flex-col bg-black">
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10 bg-black bg-opacity-75">
          <button onClick={() => { stopCamera(); router.push("/dashboard"); }}>
            <img src="/icons/back.svg" alt="Back" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button>
            <img src="/icons/flash.svg" alt="Flash" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Camera Preview */}
        <div className="flex-1 relative w-full h-full">
          <video ref={videoRef} autoPlay playsInline className="absolute inset-0 w-full h-full object-cover" />

          {/* Focus Box */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-32 h-32 sm:w-48 sm:h-48 border-2 border-white"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-6 pt-5  bg-black bg-opacity-75">
          <button onClick={openFileInput}>
            <img src="/icons/gallery.svg" alt="Gallery" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button onClick={captureImage} className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg flex items-center justify-center" />

          <button>
            <img src="/icons/flip.svg" alt="Rotate Camera" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex justify-center items-center z-50"
          >
            <motion.div
              className="w-20 h-20 bg-black bg-opacity-75 rounded-lg flex justify-center items-center"
              animate={{ scale: isSuccess ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isSuccess ? (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <path fillRule="evenodd" d="M9 19.414l-5.707-5.707 1.414-1.414L9 16.586l10.293-10.293 1.414 1.414z" />
                </motion.svg>
              ) : (
                <motion.div
                  className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"
                />
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Hidden file input */}
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

        {/* Hidden Canvas for Capturing Image */}
        <canvas ref={canvasRef} className="hidden"></canvas>
      </div>
    </PageWrapper>
  );
}
