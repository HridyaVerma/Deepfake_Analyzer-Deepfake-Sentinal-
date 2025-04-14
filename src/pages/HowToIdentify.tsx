
import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "@/components/Section";
import {
  Eye, Video, Image, Clock, Volume2, Lightbulb, AlertCircle, CheckCircle
} from "lucide-react";

const visualCues = [
  {
    title: "Unnatural Eye Movements",
    description: "Look for irregular blinking patterns, mismatched eye movements, or eyes that don't respond naturally to light or emotion.",
    example: "/Users/hridyaverma/Downloads/reality-check-portal-main/public/images/eye.jpg",
    icon: <Eye className="h-5 w-5" />
  },
  {
    title: "Facial Inconsistencies",
    description: "Pay attention to skin texture differences, unnatural shadows, or blurry boundaries where the face meets the neck or hairline.",
    example: "/face-example.jpg",
    icon: <Image className="h-5 w-5" />
  },
  {
    title: "Lighting Mismatches",
    description: "Notice inconsistent lighting between the face and the rest of the scene, or shadows that don't match the environment.",
    example: "/lighting-example.jpg",
    icon: <Image className="h-5 w-5" />
  },
  {
    title: "Unnatural Movements",
    description: "Watch for jerky or robotic movements, especially during rapid motion or when the subject turns their head.",
    example: "/movement-example.jpg",
    icon: <Video className="h-5 w-5" />
  },
  {
    title: "Audio-Visual Misalignment",
    description: "Check if lip movements precisely match the spoken words, especially on consonants and during emotional expressions.",
    example: "/audio-example.jpg",
    icon: <Volume2 className="h-5 w-5" />
  }
];

const commonMisconceptions = [
  {
    myth: "If it looks professional, it must be real",
    reality: "Modern deepfake technology can produce extremely polished results that appear professional and authentic."
  },
  {
    myth: "Deepfakes always have obvious glitches",
    reality: "While early deepfakes had noticeable artifacts, advanced versions may have very subtle tells that require careful observation."
  },
  {
    myth: "Only celebrities are targets of deepfakes",
    reality: "Anyone can be targeted by deepfake technology, including private individuals, business professionals, and political figures."
  },
  {
    myth: "I can always trust videos from reputable sources",
    reality: "Even content that appears to come from trusted sources should be verified, as source spoofing is a common tactic."
  },
  {
    myth: "Deepfakes only affect video content",
    reality: "Deepfake technology can manipulate still images, audio, and even text generation to create misleading content."
  }
];

const tips = [
  {
    title: "Cross-reference with other sources",
    description: "If you see a controversial video, check if other reliable news sources are reporting the same event."
  },
  {
    title: "Check the publishing date",
    description: "Be wary of 'new' videos of events that supposedly happened long ago."
  },
  {
    title: "Use reverse image search",
    description: "Take screenshots and use reverse image search to see if the content appears elsewhere in a different context."
  },
  {
    title: "Look for official verification",
    description: "Check if the person or organization featured in the content has confirmed its authenticity."
  },
  {
    title: "Use deepfake detection tools",
    description: "Utilize available technology like our detection tool to analyze suspicious content."
  }
];

const HowToIdentify = () => {
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
              How to Identify Deepfakes
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Visual cues, practical tips, and examples to help spot manipulated media
            </p>
          </motion.div>
        </div>
      </div>
      
      <Tabs defaultValue="visual-cues" className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="visual-cues">
              <Eye className="mr-2 h-4 w-4" />
              Visual Cues
            </TabsTrigger>
            <TabsTrigger value="misconceptions">
              <AlertCircle className="mr-2 h-4 w-4" />
              Misconceptions
            </TabsTrigger>
            <TabsTrigger value="tips">
              <Lightbulb className="mr-2 h-4 w-4" />
              Practical Tips
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="visual-cues" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Visual Elements to Check</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                When examining a potentially manipulated video or image, focus on these areas where deepfakes often show inconsistencies. The human brain is highly sensitive to subtle details in faces, so training yourself to notice these cues can help identify synthetic media.
              </p>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Take your time when analyzing suspect media. Deepfake artifacts are often most visible during quick movements, transitions, or emotional expressions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                How Our Detector Helps
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our AI-powered deepfake detector automates the process of identifying synthetic media by:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span>Analyzing multiple frames throughout the video</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span>Detecting subtle inconsistencies invisible to the human eye</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span>Examining pixel-level patterns that may indicate manipulation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span>Providing a confidence score based on multiple detection methods</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            {visualCues.map((cue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-deepfake-100 dark:bg-deepfake-900 flex items-center justify-center text-deepfake-600 dark:text-deepfake-400 mr-3">
                        {cue.icon}
                      </div>
                      <h3 className="text-xl font-bold">{cue.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cue.description}
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-6">
                    <div className="aspect-video w-full max-w-sm bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center">
                      <div className="text-gray-400 dark:text-gray-500 flex flex-col items-center">
                        <Image className="h-8 w-8 mb-2" />
                        <span className="text-sm">Example image placeholder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="misconceptions" className="animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Common Misconceptions About Deepfakes</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Understanding what's true and what's not about deepfakes can help you better identify manipulated media
            </p>
            
            <div className="space-y-6">
              {commonMisconceptions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="bg-deepfake-50 dark:bg-deepfake-900 p-6 md:p-8 flex items-center md:justify-center">
                      <div className="text-lg md:text-xl font-bold text-center text-deepfake-800 dark:text-deepfake-200">Myth</div>
                    </div>
                    <div className="col-span-2 p-6 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                      <p className="text-gray-800 dark:text-gray-200 italic">"{item.myth}"</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 md:p-8 flex items-center md:justify-center col-span-2">
                      <div className="text-lg md:text-xl font-bold text-center text-green-800 dark:text-green-200">Reality</div>
                    </div>
                    <div className="col-span-2 p-6 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400">{item.reality}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-center">The Evolving Challenge</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                As deepfake technology improves, the challenges in identifying manipulated media also evolve. What was once easier to spot now requires more sophisticated detection methods. This is why both human observation and automated detection tools play important complementary roles.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tips" className="animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Practical Verification Tips</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
              Beyond looking for visual cues, these practical steps can help verify the authenticity of content you encounter online
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tip.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
              <h3 className="text-xl font-bold p-6 border-b border-gray-100 dark:border-gray-700">
                Detailed Verification Process
              </h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">Source Verification</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Check the original source of the content by:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Identifying who initially shared or published the content</li>
                      <li>Researching the credibility of the source</li>
                      <li>Looking for the earliest appearance of the content online</li>
                      <li>Checking if official channels or verified accounts have confirmed the content</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">Contextual Analysis</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Examine the broader context around the content:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Does the behavior align with what you know about the person?</li>
                      <li>Is there a significant event that might motivate creating a deepfake?</li>
                      <li>Are there any inconsistencies in the background details that don't match known facts?</li>
                      <li>Check timestamps and metadata for signs of manipulation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">Technical Verification</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Utilize technical tools to analyze the content:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Use reverse image search tools like Google Images or TinEye</li>
                      <li>Check metadata using tools like Jeffrey's Image Metadata Viewer</li>
                      <li>Analyze video frame-by-frame using video editing software</li>
                      <li>Use specialized deepfake detection tools (like our detection system)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">Expert Consultation</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      For high-stakes situations, consider expert involvement:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Consult digital forensics experts who specialize in media authentication</li>
                      <li>Reach out to fact-checking organizations</li>
                      <li>Contact platform trust and safety teams</li>
                      <li>For legal matters, work with forensic experts who can provide certified analysis</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Section
        title="Case Studies: Real vs. Fake"
        subtitle="Examples to help train your eye in spotting the differences"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-4 bg-green-100 dark:bg-green-900 border-b border-green-200 dark:border-green-800 text-center">
                <h3 className="font-bold text-green-800 dark:text-green-200">Authentic </h3>
              </div>
              <div className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500 flex flex-col items-center">
                  <img
                  className="w-[350px] h-[350px] object-cover rounded-md"

                  src="public/videos/Real.jpg"
                  />
                    <span className="text-sm">Authentic image example</span>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Characteristics:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Natural eye blinking and movement</li>
                  <li>Consistent skin texture and coloration</li>
                  <li>Smooth transitions in facial expressions</li>
                  <li>Consistent lighting across the face</li>
                  <li>Perfect sync between lip movements and audio</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-4 bg-red-100 dark:bg-red-900 border-b border-red-200 dark:border-red-800 text-center">
                <h3 className="font-bold text-red-800 dark:text-red-200">Deepfake</h3>
              </div>
              <div className="p-6">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500 flex flex-col items-center">
                  <img
                  className="w-[350px] h-[350px] object-cover rounded-md"
                  src="public/videos/deepfake.jpg"
                  />
                    <span className="text-sm">Deepfake image example</span>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Warning Signs:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Irregular or absent blinking patterns</li>
                  <li>Blurry or shifting boundaries around facial features</li>
                  <li>Unnatural skin smoothness or texture inconsistencies</li>
                  <li>Lighting that doesn't match the scene</li>
                  <li>Slight audio-visual desynchronization</li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Even with these guidelines, modern deepfakes can be extremely convincing. That's why our AI-powered detection tool analyzes multiple aspects of a video that might be invisible to the human eye.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/detect" className="inline-flex items-center justify-center bg-deepfake-600 hover:bg-deepfake-700 text-white py-3 px-6 rounded-lg transition-colors">
                <Lightbulb className="mr-2 h-5 w-5" />
                Try Our Deepfake Detector
              </a>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HowToIdentify;
