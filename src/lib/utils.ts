//
//import { clsx, type ClassValue } from "clsx"
//import { twMerge } from "tailwind-merge"
//
//export function cn(...inputs: ClassValue[]) {
//  return twMerge(clsx(inputs))
//}
//
//// this file i have added
//
//export const analyzeVideoFile = async (file: File) => {
//  const formData = new FormData();
//  formData.append("video", file);
//
//  const res = await fetch("http://localhost:5000/api/analyze/file", {
//    method: "POST",
//    body: formData,
//  });
//
//  if (!res.ok) {
//    throw new Error("Failed to analyze video file");
//  }
//
//  return await res.json();
//};
//
//export const analyzeYoutubeVideo = async (youtubeUrl: string) => {
//  const res = await fetch("http://localhost:5000/api/analyze/youtube", {
//    method: "POST",
//    headers: { "Content-Type": "application/json" },
//    body: JSON.stringify({ youtubeUrl }),
//  });
//
//  if (!res.ok) {
//    throw new Error("Failed to analyze YouTube video");
//  }
//
//  return await res.json();
//};
//

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { saveAs } from 'file-saver';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const analyzeVideoFile = async (file: File) => {
  const formData = new FormData();
  formData.append("video", file);

  const res = await fetch("http://localhost:5000/api/analyze/file", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to analyze video file");
  }

  return await res.json();
};

export const analyzeYoutubeVideo = async (youtubeUrl: string) => {
  const res = await fetch("http://localhost:5000/api/analyze/youtube", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ youtubeUrl }),
  });

  if (!res.ok) {
    throw new Error("Failed to analyze YouTube video");
  }

  return await res.json();
};



export const downloadReport = async (result: any) => {
  const response = await fetch("http://localhost:5000/generate-report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(result)
  });

  const blob = await response.blob();
  saveAs(blob, "deepfake_report.pdf");
};




//const handleFindOriginalSource = async (): Promise<void> => {
//  const fileInput = document.getElementById("videoInput") as HTMLInputElement;
//
//  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
//    alert("Please upload a video file first.");
//    return;
//  }
//
//  const formData = new FormData();
//  formData.append("video", fileInput.files[0]);
//
//  try {
//    const response = await fetch("http://localhost:5000/reverse-search", {
//      method: "POST",
//      body: formData,
//    });
//
//    if (!response.ok) {
//      throw new Error("Failed to search for original source");
//    }
//
//    const data = await response.json();
//    setSearchResults(data.search_results);  // 👈 Assumes you have this state
//  } catch (error) {
//    console.error("Error during reverse search:", error);
//    alert("Something went wrong while finding the original source.");
//  }
//};