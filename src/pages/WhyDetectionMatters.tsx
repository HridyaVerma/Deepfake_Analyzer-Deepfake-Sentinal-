import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import {
  Shield, UserCheck, Users, AlertTriangle, Info, FileText, ExternalLink
} from "lucide-react";

const impactAreas = [
  {
    title: "Political Manipulation",
    description: "Deepfakes can be used to make politicians appear to say or do things they never did, potentially influencing elections or international relations.",
    icon: <Shield className="h-10 w-10" />
  },
  {
    title: "Financial Fraud",
    description: "Criminals may use deepfake technology to impersonate executives or financial officers to authorize fraudulent transactions.",
    icon: <AlertTriangle className="h-10 w-10" />
  },
  {
    title: "Personal Reputation",
    description: "Individuals can suffer severe reputation damage from deepfakes portraying them in compromising or false situations.",
    icon: <UserCheck className="h-10 w-10" />
  },
  {
    title: "Media Trust",
    description: "The proliferation of deepfakes undermines trust in media and creates a 'liar's dividend' where authentic content can be dismissed as fake.",
    icon: <Info className="h-10 w-10" />
  }
];

const realWorldCases = [
  {
    title: "Political Disinformation",
    description: "In 2018, a Belgian political party released a deepfake video of then-US President Donald Trump discussing climate change, causing temporary confusion until it was revealed as an intentional demonstration.",
    year: "2018"
  },
  {
    title: "Corporate Fraud",
    description: "In 2019, criminals used AI voice synthesis to impersonate a CEO's voice, convincing a managing director to transfer €220,000 to a fraudulent account.",
    year: "2019"
  },
  {
    title: "Celebrity Deepfakes",
    description: "Numerous celebrities have had their likenesses used in unauthorized deepfakes, leading to privacy violations and potential reputational damage.",
    year: "2020-Present"
  },
  {
    title: "Election Interference",
    description: "During the 2020 presidential election, manipulated videos of candidates appeared across social media platforms, requiring rapid fact-checking responses.",
    year: "2020"
  },
  {
    title: "Educational Demonstration",
    description: "In 2022, the Ukrainian government created a deepfake of President Zelensky to demonstrate how such technology could be used for misinformation during wartime.",
    year: "2022"
  }
];

const WhyDetectionMatters = () => {
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
              Why Deepfake Detection Matters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Understanding the societal impact of synthetic media and the importance of detection technology
            </p>
          </motion.div>
        </div>
      </div>
      
      <Section
        title="Key Impact Areas"
        subtitle="How deepfakes affect different aspects of society and why detection is crucial"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 card-hover"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                <div className="bg-deepfake-100 dark:bg-deepfake-900/50 p-3 rounded-full text-deepfake-600 dark:text-deepfake-400">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold">{area.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section
        title="Protecting Women's Security and Dignity"
        subtitle="How deepfake technology disproportionately affects women and what can be done"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">A Serious and Growing Threat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Research has consistently shown that women are disproportionately targeted by synthetic media, with one study finding that over 90% of deepfake videos online are non-consensual pornography, almost exclusively targeting women.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Multifaceted Impacts</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-400 mr-3 mt-1">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Psychological Trauma</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Victims of deepfake pornography often experience severe psychological distress, including anxiety, depression, and social withdrawal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-400 mr-3 mt-1">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Consequences</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Women targeted by deepfakes may face professional repercussions as these images can appear in search results or be sent to employers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-400 mr-3 mt-1">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Silencing Effect</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      The threat of deepfakes can be used to intimidate women, particularly public figures, potentially discouraging them from participating in public discourse.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Countermeasures and Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Addressing this challenge requires a multi-faceted approach combining technology, policy, and education:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong>Advanced Detection Tools:</strong> Developing and deploying sophisticated deepfake detection technology that can identify manipulated content.</li>
                <li><strong>Legal Frameworks:</strong> Creating and enforcing laws specifically addressing the creation and distribution of non-consensual synthetic media.</li>
                <li><strong>Platform Responsibility:</strong> Social media and content hosting platforms implementing robust policies against deepfakes and providing rapid response to reports.</li>
                <li><strong>Digital Literacy:</strong> Educating the public about deepfakes and how to identify potential synthetic media.</li>
                <li><strong>Support Systems:</strong> Providing resources and support for victims of deepfake-based harassment.</li>
              </ul>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Organizations Working on Solutions
              </h3>
              
              <div className="space-y-4">
                <div className="border-b pb-4 border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold mb-1">Coalition Against DeepFake Abuse</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    A collaborative effort bringing together technologists, legal experts, and advocates to combat harmful deepfakes.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href="#" className="flex items-center text-deepfake-600 dark:text-deepfake-400">
                      Learn more <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
                
                <div className="border-b pb-4 border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold mb-1">Without Consent</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Organization providing support to victims of image-based abuse, including deepfakes.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href="#" className="flex items-center text-deepfake-600 dark:text-deepfake-400">
                      Learn more <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
                
                <div className="border-b pb-4 border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold mb-1">Partnership on AI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Research organization working on developing ethical guidelines for AI, including synthetic media.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href="#" className="flex items-center text-deepfake-600 dark:text-deepfake-400">
                      Learn more <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">WITNESS Media Lab</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Focuses on how video technology can protect human rights, including research on detecting synthetic media.
                  </p>
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href="#" className="flex items-center text-deepfake-600 dark:text-deepfake-400">
                      Learn more <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Resources for Victims
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  If you've been targeted by deepfakes or other forms of digital abuse, resources are available to help.
                </p>
                <Button size="sm" className="w-full">Access Resources</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      <Section
        title="Real-World Deepfake Cases"
        subtitle="Examining actual incidents where deepfakes have created real harm or confusion"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {realWorldCases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                  <div className="px-3 py-1 bg-deepfake-100 dark:bg-deepfake-900 text-deepfake-700 dark:text-deepfake-300 rounded-full text-sm font-medium inline-flex">
                    {caseItem.year}
                  </div>
                  <h3 className="text-xl font-bold">{caseItem.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {caseItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section
        title="The Role of Detection Technology"
        subtitle="How technology can help mitigate the risks posed by deepfakes"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            As deepfake technology continues to evolve and become more accessible, detection tools become increasingly important as a frontline defense against misinformation and fraud.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button size="lg" asChild>
              <Link to="/detect">Try Our Deepfake Detector</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="h-12 w-12 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Prevention</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Detection technology can help prevent the spread of harmful deepfakes before they cause damage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="h-12 w-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Info className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Awareness</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Increasing public understanding of deepfakes helps create a more discerning and resilient audience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="h-12 w-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Accountability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Detection tools help identify the source and creators of deepfakes, supporting legal and platform enforcement.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhyDetectionMatters;
