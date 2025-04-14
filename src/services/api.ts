import axios from "axios";

const API_URL = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DeepfakeAnalysisResult {
  frames: {
    frameNumber: number;
    prediction: number;
    imageUrl: string;
  }[];
  averagePrediction: number;
  verdict: "real" | "fake";
  executionTime: number;
}

export const analyzeVideoFile = async (file: File): Promise<DeepfakeAnalysisResult> => {
  const formData = new FormData();
  formData.append("video", file);

  const response = await apiClient.post("/analyze/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

//export const analyzeYouTubeVideo = async (youtubeUrl: string): Promise<DeepfakeAnalysisResult> => {
//  const response = await apiClient.post("/analyze/youtube", { youtubeUrl });
//  return response.data;
//};

export const analyzeYouTubeVideo = async (youtubeUrl: string): Promise<DeepfakeAnalysisResult> => {
  const response = await apiClient.post("/analyze/youtube", { youtubeUrl });
  return response.data;
};
export default {
  analyzeVideoFile,
  analyzeYouTubeVideo,
};



export const analyzeImage = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch("http://localhost:5000/api/analyze/image", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Image analysis failed");
  }

  return await response.json();
};