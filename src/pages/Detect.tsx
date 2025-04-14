import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { downloadReport } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Upload,
  Link as LinkIcon,
  AlertTriangle,
  CheckCircle,
  X,
  Video,
  BarChart2,
  PieChart as PieChartIcon,
  Grid2X2,
  AlertCircle
} from "lucide-react";
//import { analyzeVideoFile, analyzeYouTubeVideo, type DeepfakeAnalysisResult } from "@/services/api";
import { analyzeYouTubeVideo, analyzeVideoFile,  DeepfakeAnalysisResult } from "@/services/api";

// Mock data for frontend testing
const MOCK_DATA: DeepfakeAnalysisResult = {
  frames: [
    { frameNumber: 1, prediction: 0.92, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 2, prediction: 0.88, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 3, prediction: 0.95, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 4, prediction: 0.79, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 5, prediction: 0.86, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 6, prediction: 0.91, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 7, prediction: 0.84, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 8, prediction: 0.93, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 9, prediction: 0.87, imageUrl: "https://placehold.co/300x200" },
    { frameNumber: 10, prediction: 0.89, imageUrl: "https://placehold.co/300x200" }
  ],
  averagePrediction: 0.884,
  verdict: "fake",
  executionTime: 5.43
};


type FrameResult = {
  frameNumber: number;
  prediction: number;
  image?: string;
};

type analysisResult = {
  verdict: string;
  averagePrediction: number;
  executionTime: number;
  frames: FrameResult[];
};



const Detect = () => {
  const [file, setFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<DeepfakeAnalysisResult | null>(null);
  const [activeChart, setActiveChart] = useState("bar");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<analysisResult[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);


  


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if file is video
      if (!selectedFile.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file",
          variant: "destructive"
        });
        return;
      }
      
      // Check if file size is under 100MB
      if (selectedFile.size > 100 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a video smaller than 100MB",
          variant: "destructive"
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };


  

  const handleYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value);
  };

  const validateYoutubeUrl = (url: string) => {
    const pattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
  };

  const handleAnalyzeFile = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a video file to analyze",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsAnalyzing(true);
      setProgress(0);
      
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 500);
      
      // In production, comment out the mock data and use the actual API
      // const result = await analyzeVideoFile(file);
      
      //// Mock result for frontend development
      //setTimeout(() => {
      //  clearInterval(progressInterval);
      //  setProgress(100);
      //  setAnalysisResult(MOCK_DATA);
      //  setIsAnalyzing(false);
      //}, 5000);




      const result = await analyzeVideoFile(file);  // Make sure this function is implemented
      clearInterval(progressInterval);
      setProgress(100);
      setAnalysisResult(result);
      setIsAnalyzing(false);


      
    } catch (error) {
      console.error("Error analyzing file:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your video. Please try again.",
        variant: "destructive"
      });
      setIsAnalyzing(false);
    }
  };

  const handleAnalyzeYoutube = async () => {
    if (!validateYoutubeUrl(youtubeUrl)) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube video URL",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsAnalyzing(true);
      setProgress(0);
      
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 500);
      
      // In production, comment out the mock data and use the actual API
      // const result = await analyzeYoutubeVideo(youtubeUrl);
      
      //// Mock result for frontend development
      //setTimeout(() => {
      //  clearInterval(progressInterval);
      //  setProgress(100);
      //  setAnalysisResult(MOCK_DATA);
      //  setIsAnalyzing(false);
      //}, 5000);

      const result = await analyzeYouTubeVideo(youtubeUrl);  // Make sure this function is implemented
      clearInterval(progressInterval);
      setProgress(100);
      setAnalysisResult(result);
      setIsAnalyzing(false);
      
    } catch (error) {
      console.error("Error analyzing YouTube video:", error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing the YouTube video. Please try again.",
        variant: "destructive"
      });
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setFile(null);
    setYoutubeUrl("");
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFindOriginalSource = async () => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append("video", file);
  
    try {
      const response = await fetch("http://localhost:5000/reverse-search", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      setSearchResults(data.search_results);
    } catch (error) {
      console.error("Error fetching original sources:", error);
      toast({
        title: "Reverse Search Failed",
        description: "Could not trace the original source of this video.",
        variant: "destructive"
      });
    }
  };

  // Custom tooltip formatter for recharts
  const customTooltipFormatter = (value: any) => {
    if (typeof value === 'number') {
      return `${value.toFixed(1)}%`;
    }
    return value;
  };

  // Prepare chart data
  const barChartData = analysisResult?.frames.map((frame) => ({
    frame: `Frame ${frame.frameNumber}`,
    prediction: frame.prediction * 100,
    fill: frame.prediction > 0.5 ? "#22c55e" : "#ef4444",
  }));

  const pieChartData = [
    { name: "Real ", value: analysisResult ? analysisResult.averagePrediction * 100 : 0 },
    { name: "Fake ", value: analysisResult ? (1 - analysisResult.averagePrediction) * 100 : 0 }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <>
      <div className="bg-gradient-to-br from-deepfake-50 to-blue-50 dark:from-gray-900 dark:to-deepfake-950 py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">
              Deepfake Detection
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Upload a video or provide a YouTube link to analyze for potential manipulation
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="section-container">
        {!analysisResult ? (
          <div className="max-w-4xl mx-auto">
            {/* 🟢 Your analysis result UI is already here */}

    {/* ✅ Insert this after the main analysis result content */}
    {searchResults.length > 0 && (
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Matched Source Results</h2>

        {searchResults.map((res, index) => (
          <div
            key={index}
            className="mb-8 p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800"
          >
            <img
              src={`http://localhost:5000${res.frame_url}`}
              alt={`frame-${index}`}
              className="w-full max-w-sm mb-4 rounded"
            />
            <ul className="list-disc ml-6 text-blue-600">
              {res.matches.map((url, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}


            <Tabs defaultValue="file" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="file">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </TabsTrigger>
                <TabsTrigger value="youtube">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  YouTube Link
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="file" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Upload a Video for Analysis</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Select a video file from your device to check for potential deepfake manipulation.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex flex-col items-center justify-center w-full">
                      <label 
                        htmlFor="video-upload" 
                        className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          file ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-900/20" : "border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {file ? (
                            <>
                              <CheckCircle className="w-10 h-10 mb-3 text-green-500" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">{file.name}</span>
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </>
                          ) : (
                            <>
                              <Upload className="w-10 h-10 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                MP4, MOV, AVI, WebM (MAX 100MB)
                              </p>
                            </>
                          )}
                        </div>
                        <input
                          id="video-upload"
                          type="file"
                          className="hidden"
                          accept="video/*,image/*"
                          multiple
                          onChange={handleFileChange}
                          ref={fileInputRef}
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      onClick={handleAnalyzeFile}
                      disabled={!file || isAnalyzing}
                    >
                      {isAnalyzing ? "Analyzing..." : "Analyze Video"}
                    </Button>
                  </div>

                  
                </div>
                
              </TabsContent>
              
              <TabsContent value="youtube" className="mt-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Analyze YouTube Video</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Provide a YouTube video link to check for potential deepfake manipulation.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-sm font-medium mb-2">
                      YouTube Video URL
                    </label>
                    <div className="flex gap-3">
                      <Input
                        type="text"
                        placeholder="https://www.youtube.com/watch?v=..."
                        value={youtubeUrl}
                        onChange={handleYoutubeUrlChange}
                        className="flex-grow"
                      />
                    </div>
                    
                    {youtubeUrl && !validateYoutubeUrl(youtubeUrl) && (
                      <p className="mt-2 text-sm text-red-500 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" /> Please enter a valid YouTube URL
                      </p>
                    )}
                    
                    {youtubeUrl && validateYoutubeUrl(youtubeUrl) && (
                      <div className="mt-4">
                        <ReactPlayer 
                          url={youtubeUrl}
                          width="100%"
                          height="240px"
                          controls
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      onClick={handleAnalyzeYoutube}
                      disabled={!validateYoutubeUrl(youtubeUrl) || isAnalyzing}
                    >
                      {isAnalyzing ? "Analyzing..." : "Analyze YouTube Video"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {isAnalyzing && (
              <div className="mt-8 max-w-md mx-auto">
                <div className="mb-2 flex justify-between text-sm">
                  <span>Analyzing video</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI model is extracting and analyzing frames from your video
                </p>
              </div>
            )}
          </div>
          
      ) : (

          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6 md:p-8 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Analysis Results</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Processed in {analysisResult.executionTime.toFixed(2)} seconds
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={resetAnalysis}
                  className="flex items-center"
                >
                  <X className="mr-2 h-4 w-4" />
                  Reset Analysis
                </Button>
                <Button onClick={() => downloadReport(analysisResult)}>
                  Download PDF Report
                  </Button>
              </div>

              
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Overall Verdict</h3>
                  
                  <div className="flex flex-col items-center">
                    <div className={`mb-6 p-4 rounded-full ${
                      analysisResult.verdict === "fake" 
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" 
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}>
                      {analysisResult.verdict === "fake" ? (
                        <AlertTriangle className="h-16 w-16" />
                      ) : (
                        <CheckCircle className="h-16 w-16" />
                      )}
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-2 text-center">
                      {analysisResult.verdict === "fake" ? "Likely Deepfake" : "Likely Authentic"}
                    </h2>
                    <p className="text-lg font-medium mb-4 text-center">
                      {(analysisResult.averagePrediction * 100).toFixed(1)}% confidence
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {analysisResult.verdict === "fake" 
                        ? "Our analysis indicates this video has likely been manipulated using deepfake technology." 
                        : "Our analysis indicates this video is likely authentic without deepfake manipulation."}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Prediction Distribution</h3>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        style={{ fontSize: '13px' }}
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip formatter={customTooltipFormatter}/>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                  <h3 className="text-xl font-bold">Frame-by-Frame Analysis</h3>
                  
                  <div className="flex bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-1">
                    <Button 
                      variant={activeChart === "bar" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => setActiveChart("bar")} 
                      className="flex items-center"
                    >
                      <BarChart2 className="h-4 w-4 mr-1" />
                      Bar
                    </Button>
                    <Button 
                      variant={activeChart === "grid" ? "default" : "ghost"} 
                      size="sm"
                      onClick={() => setActiveChart("grid")} 
                      className="flex items-center"
                    >
                      <Grid2X2 className="h-4 w-4 mr-1" />
                      Grid
                    </Button>
                  </div>
                </div>
                
                {activeChart === "bar" && (
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={barChartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 60,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="frame" angle={-45} textAnchor="end" height={60} />
                        <YAxis label={{ value: 'Fake Probability (%)', angle: -90, position: 'insideLeft' }} />
                        <RechartsTooltip formatter={customTooltipFormatter} />
                        <Bar dataKey="prediction" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
                
                {activeChart === "grid" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                    {analysisResult.frames.map((frame) => (
                      <div key={frame.frameNumber} className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="h-32 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <img
                        src={frame.imageUrl}
                        alt={`Frame ${frame.frameNumber}`}
                        className="object-cover w-full h-full"/>
                          
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Frame {frame.frameNumber}</span>
                            <span className={`text-sm font-bold ${
                              frame.prediction > 0.5 ? "text-green-500" : "text-red-500"
                            }`}>
                              {(frame.prediction * 100).toFixed(1)}%
                            </span>
                          </div>
                          <Progress 
                            value={frame.prediction * 100} 
                            className={`h-1 ${
                              frame.prediction > 0.5 ? "bg-red-200" : "bg-green-200"
                            }`}
                            indicatorClassName={
                              frame.prediction > 0.5 ? "bg-red-500" : "bg-green-500"
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">What Do These Results Mean?</h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Our analysis extracts multiple frames from the video and processes each one individually through our deepfake detection model. The overall verdict is based on the average prediction across all analyzed frames.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      High Probability of Deepfake (&gt;70%)
                    </h4>
                    <p className="text-sm">
                      The video shows multiple indicators of manipulation consistent with deepfake technology. While no detection system is perfect, this result suggests careful scrutiny before trusting the content.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-yellow-600 dark:text-yellow-400">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Medium Probability (30-70%)
                    </h4>
                    <p className="text-sm">
                      Some indicators of manipulation were detected, but the evidence is not conclusive. The content should be treated with caution and verified through other means if possible.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center text-green-600 dark:text-green-400">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Low Probability (&lt;30%)
                    </h4>
                    <p className="text-sm">
                      Few or no indicators of deepfake manipulation were detected. While this suggests the content is likely authentic, it's always good practice to verify important information.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Important Limitations
                    </h4>
                    <p className="text-sm">
                      Our detector is continuously improving but may not catch all types of manipulations. Very high-quality deepfakes or other forms of media manipulation might not be detected with the same accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Detect;