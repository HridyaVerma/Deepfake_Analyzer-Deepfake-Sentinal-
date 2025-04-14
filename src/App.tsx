
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhatIsDeepfake from "./pages/WhatIsDeepfake";
import WhyDetectionMatters from "./pages/WhyDetectionMatters";
import HowToIdentify from "./pages/HowToIdentify";
import Detect from "./pages/Detect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-deepfake" element={<WhatIsDeepfake />} />
              <Route path="/why-detection-matters" element={<WhyDetectionMatters />} />
              <Route path="/how-to-identify" element={<HowToIdentify />} />
              <Route path="/detect" element={<Detect />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
