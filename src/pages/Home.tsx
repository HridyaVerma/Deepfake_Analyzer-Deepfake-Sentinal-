
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { 
  Info, AlertTriangle, Search, Upload, Shield, Brain, VideoIcon, Zap, ArrowRight
} from "lucide-react";

const Home = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    initial: { y: 0 },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-deepfake-50 to-blue-50 dark:from-gray-900 dark:to-deepfake-950 min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Decorative animated elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple-500/10 backdrop-blur-3xl"
          initial="initial"
          animate="float"
          variants={floatingVariants}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-deepfake-500/10 backdrop-blur-3xl"
          initial="initial"
          animate="float"
          variants={{
            ...floatingVariants,
            float: {
              ...floatingVariants.float,
              transition: { ...floatingVariants.float.transition, delay: 1 }
            }
          }}
        />

        <div className="section-container relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pr-0 md:pr-8"
              >
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-heading"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Deepfake Sentinel
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-400 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Cutting-edge AI to detect manipulated videos and protect digital integrity.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button size="lg" asChild className="group">
                    <Link to="/detect">
                      Start Analyzing
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/what-is-deepfake">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <div className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-lg overflow-hidden shadow-2xl relative"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg relative">
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <VideoIcon className="h-16 w-16 text-gray-400 dark:text-gray-600" />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-deepfake-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <div className="text-sm font-medium">Deepfake Detection in Action</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <Section
        title="Explore Our Platform"
        subtitle="Comprehensive resources to understand, identify, and protect against deepfakes"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <FeatureCard
            icon={<Info className="h-6 w-6" />}
            title="What is Deepfake?"
            description="Learn about the technology, creation process, and history of deepfakes."
            delay={0.1}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          />
          <FeatureCard
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Why Detection Matters"
            description="Discover the impacts of deepfakes and why identifying them is crucial."
            delay={0.2}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          />
          <FeatureCard
            icon={<Search className="h-6 w-6" />}
            title="How to Identify"
            description="Detailed guidance on spotting deepfakes with visual examples."
            delay={0.3}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          />
          <FeatureCard
            icon={<Upload className="h-6 w-6" />}
            title="Deepfake Detection"
            description="Analyze videos from your files or YouTube to detect manipulated content."
            delay={0.4}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          />
        </motion.div>
      </Section>
      
      {/* How it Works Section */}
      <Section
        title="How It Works"
        subtitle="Our advanced AI-powered process for analyzing and detecting deepfakes"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-deepfake-400 to-purple-400"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            {[
              {
                title: "Upload Media",
                description: "Upload a video file or provide a YouTube link to analyze content for potential manipulation.",
                icon: <Upload className="h-6 w-6" />
              },
              {
                title: "Frame Extraction",
                description: "Our system extracts key frames from the video for detailed analysis.",
                icon: <VideoIcon className="h-6 w-6" />
              },
              {
                title: "AI Analysis",
                description: "Each frame is processed by our advanced deep learning model trained to detect manipulations.",
                icon: <Brain className="h-6 w-6" />
              },
              {
                title: "Results Presentation",
                description: "View detailed results showing frame-by-frame analysis and an overall verdict.",
                icon: <Shield className="h-6 w-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 relative"
              >
                <div className="flex">
                  <motion.div 
                    className="flex-shrink-0 z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-16 w-16 rounded-full bg-white dark:bg-gray-800 border border-deepfake-200 dark:border-deepfake-700 flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                  </motion.div>
                  <div className="ml-6 pt-1">
                    <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section title="Ready to Analyze?">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start using our deepfake analyzer to verify the authenticity of videos and protect yourself from disinformation.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" asChild className="group">
              <Link to="/detect">
                Try The Analyzer
                <Zap className="ml-2 h-4 w-4 group-hover:text-yellow-300 transition-colors" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;
