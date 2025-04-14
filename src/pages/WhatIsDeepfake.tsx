
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Laptop, History, FileText, Lightbulb } from "lucide-react";

const researchPapers = [
  {
    title: "DeepFakes and Beyond: A Survey of Face Manipulation and Fake Detection",
    authors: "Ruben Tolosana, et al.",
    year: 2020,
    url: "https://doi.org/10.1016/j.inffus.2020.06.014"
  },
  {
    title: "FaceForensics++: Learning to Detect Manipulated Facial Images",
    authors: "Andreas Rössler, et al.",
    year: 2019,
    url: "https://doi.org/10.1109/ICCV.2019.00009"
  },
  {
    title: "Deepfakes Detection with Automatic Face Weighting",
    authors: "Yuyang Qian, et al.",
    year: 2020,
    url: "https://openaccess.thecvf.com/content_CVPRW_2020/html/w39/Qian_Thinking_in_Frequency_Face_Forgery_Detection_by_Mining_Frequency_Domain_CVPRW_2020_paper.html"
  },
  {
    title: "In Ictu Oculi: Exposing AI Created Fake Videos by Detecting Eye Blinking",
    authors: "Yuezun Li, et al.",
    year: 2018,
    url: "https://doi.org/10.1109/WIFS.2018.8630761"
  },
  {
    title: "MesoNet: a Compact Facial Video Forgery Detection Network",
    authors: "Darius Afchar, et al.",
    year: 2018,
    url: "https://doi.org/10.1109/WIFS.2018.8630761"
  }
];

const WhatIsDeepfake = () => {
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
              What is Deepfake?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Understanding the technology, creation process, and history behind manipulated media
            </p>
          </motion.div>
        </div>
      </div>
      
      <Tabs defaultValue="technology" className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="technology">
              <Laptop className="mr-2 h-4 w-4" />
              Technology
            </TabsTrigger>
            <TabsTrigger value="creation">
              <Lightbulb className="mr-2 h-4 w-4" />
              Creation Process
            </TabsTrigger>
            <TabsTrigger value="history">
              <History className="mr-2 h-4 w-4" />
              History
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="technology" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Foundation</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Deepfakes are synthesized media created using deep learning techniques, primarily generative adversarial networks (GANs) and autoencoders. These AI systems learn to generate realistic content by analyzing thousands of real images or videos.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The core technology behind deepfakes involves:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li><strong>Neural Networks:</strong> Deep learning models that can learn patterns and features from data.</li>
                <li><strong>Generative Adversarial Networks (GANs):</strong> Two neural networks competing against each other - one generating content and the other evaluating its authenticity.</li>
                <li><strong>Autoencoders:</strong> Neural networks that compress then reconstruct data, learning efficient representations.</li>
                <li><strong>Face Recognition:</strong> Algorithms that identify and map facial features.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Key Technical Components</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-deepfake-500 pl-4 py-2">
                  <h4 className="font-semibold">Encoder Networks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compress facial features into a compact representation</p>
                </div>
                <div className="border-l-4 border-deepfake-500 pl-4 py-2">
                  <h4 className="font-semibold">Decoder Networks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reconstruct faces using the encoded representations</p>
                </div>
                <div className="border-l-4 border-deepfake-500 pl-4 py-2">
                  <h4 className="font-semibold">Face Swapping Algorithms</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Blend the reconstructed face with the original video</p>
                </div>
                <div className="border-l-4 border-deepfake-500 pl-4 py-2">
                  <h4 className="font-semibold">Training Data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Large datasets of images used to train the networks</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Types of Deepfake Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3">Face Swapping</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Replaces one person's face with another's while maintaining expressions and movements. Most common form of deepfakes.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3">Facial Reenactment</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Manipulates a target face to mimic the expressions and mouth movements of a source actor.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-3">Voice Synthesis</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Creates artificial voice that mimics a specific person's speaking style, tone, and accent.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="creation" className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">The Deepfake Creation Process</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Creating a convincing deepfake is a complex process that combines data collection, AI training, and post-processing. While the exact techniques vary, most deepfakes follow this general workflow:
              </p>
              
              <div className="space-y-8">
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 font-bold">
                      1
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Gathering hundreds or thousands of images of both the source and target faces from different angles, lighting conditions, and expressions. The more diverse and high-quality the images, the more realistic the result.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 font-bold">
                      2
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-2">Face Extraction & Alignment</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Detecting and extracting faces from the collected images, then aligning them to a standard position. This typically involves identifying key facial landmarks and using them to normalize the faces.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 font-bold">
                      3
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-2">Training the AI Model</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Using the extracted faces to train a deep learning model, typically an autoencoder or GAN. This training process can take days or even weeks depending on the quality desired and computing resources available.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 font-bold">
                      4
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-2">Face Synthesis</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        The trained model generates new facial imagery, either swapping faces or manipulating the original face to perform new expressions or movements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 font-bold">
                      5
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold mb-2">Post-Processing</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Applying color correction, blending the edges of the synthesized face with the original video, and enhancing details to make the result more convincing. This often includes manual touch-ups to fix obvious artifacts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-fit">
              <h3 className="text-xl font-bold mb-4">Creation Tools</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <h4 className="font-semibold">DeepFaceLab</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Most popular open-source tool for deepfake creation, used in many viral videos</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <h4 className="font-semibold">FaceSwap</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Open-source tool with an active community and regular updates</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <h4 className="font-semibold">Commercial Apps</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mobile applications that simplify the process for non-technical users</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                  <h4 className="font-semibold">AI Services</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cloud-based solutions that offer sophisticated face and voice manipulation</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-md border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  <strong>Note:</strong> While we discuss these tools for educational purposes, we strongly discourage their use for creating non-consensual or deceptive content.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">History & Evolution of Deepfakes</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The development of deepfake technology represents a fascinating intersection of computer science, artificial intelligence, and media manipulation that has rapidly evolved over the past decade.
              </p>
              
              <div className="space-y-10">
                <div className="relative border-l-2 border-deepfake-300 dark:border-deepfake-700 pl-8 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-deepfake-300 dark:bg-deepfake-700"></div>
                  <h3 className="text-xl font-bold mb-2">2014-2016: Academic Foundations</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Research papers on GANs (Generative Adversarial Networks) by Ian Goodfellow and his colleagues laid the groundwork for what would become deepfake technology. These early systems demonstrated the potential for AI to generate realistic images.
                  </p>
                </div>
                
                <div className="relative border-l-2 border-deepfake-300 dark:border-deepfake-700 pl-8 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-deepfake-300 dark:bg-deepfake-700"></div>
                  <h3 className="text-xl font-bold mb-2">Late 2017: The Term "Deepfake" Emerges</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The term "deepfake" was coined when a Reddit user named "deepfakes" began posting manipulated videos. This marked the transition from academic research to public awareness. The first generation of these videos was relatively crude but still concerning.
                  </p>
                </div>
                
                <div className="relative border-l-2 border-deepfake-300 dark:border-deepfake-700 pl-8 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-deepfake-300 dark:bg-deepfake-700"></div>
                  <h3 className="text-xl font-bold mb-2">2018: Growing Public Awareness</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Major media outlets began reporting on deepfakes, raising public awareness about their potential to spread misinformation. Open-source tools like FaceSwap and DeepFaceLab became available, lowering the technical barrier to creating deepfakes.
                  </p>
                </div>
                
                <div className="relative border-l-2 border-deepfake-300 dark:border-deepfake-700 pl-8 pb-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-deepfake-300 dark:bg-deepfake-700"></div>
                  <h3 className="text-xl font-bold mb-2">2019-2020: Increasing Sophistication</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The quality of deepfakes improved dramatically, with more realistic results that became increasingly difficult to distinguish from genuine videos. Commercial applications began to emerge, including digital avatars, film production tools, and voice synthesis.
                  </p>
                </div>
                
                <div className="relative border-l-2 border-deepfake-300 dark:border-deepfake-700 pl-8">
                  <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-deepfake-300 dark:bg-deepfake-700"></div>
                  <h3 className="text-xl font-bold mb-2">2021-Present: Mainstream & Countermeasures</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deepfake technology has become increasingly mainstream, with applications in entertainment, education, and marketing. At the same time, detection technology and regulatory efforts have evolved to counter malicious uses. Major platforms have implemented policies against deepfakes, and researchers continue to develop more sophisticated detection methods.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 mb-6">
                  <h3 className="text-xl font-bold mb-4">Notable Milestones</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2014
                      </span>
                      <span>GAN architecture introduced by Ian Goodfellow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2016
                      </span>
                      <span>Face2Face real-time facial reenactment system developed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2017
                      </span>
                      <span>First deepfakes appear on Reddit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2018
                      </span>
                      <span>First major deepfake detection competition launched</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2019
                      </span>
                      <span>California bans political deepfakes before elections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2020
                      </span>
                      <span>Commercial deepfake tools enter mainstream</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-700 dark:text-deepfake-300 text-xs font-bold mr-2 flex-shrink-0 mt-0.5">
                        2022
                      </span>
                      <span>Text-to-video AI models accelerate synthetic content creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Section
        title="Research Papers"
        subtitle="Academic research studying deepfake technology and detection methods"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <FileText className="h-5 w-5 text-deepfake-600 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="font-bold">{paper.title}</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {paper.authors}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                    Published: {paper.year}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={paper.url} target="_blank" rel="noopener noreferrer">
                      Read Paper
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default WhatIsDeepfake;
