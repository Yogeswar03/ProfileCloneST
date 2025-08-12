// Tabs.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Star,
  Briefcase,
  Wrench,
  Award,
  MessageSquare,
  Users,
} from "lucide-react"; // NOTE: replaced Tool -> Wrench
import SkillsChart from "./SkillsChart";
import ExperienceSection from "./Experience";

export default function Tabs() {
  const tabs = [
    { label: "About", icon: User },
    { label: "Skills", icon: Star },
    { label: "Experience", icon: Briefcase },
    { label: "Tools", icon: Wrench },
    { label: "Career Highlights", icon: Award },
    { label: "Testimonials", icon: MessageSquare },
    { label: "Similar Talent", icon: Users },
  ];

  const [activeTab, setActiveTab] = useState("About");

  const tabContent = {
    About: (
      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
         
I'm Alex Johnson, a Senior UI/UX Designer with a passion for crafting seamless digital exp
expertise in FinTech, SaaS, and Healthcare, I specialize in designing intuitive web and mobile applications that drive engagement and efficiency.
My skill set includes UX strategy, design systems, and front-end technologies like React and Vue.js, ensuring both aesthetic and functional excellence. Based in Barcelona (GMT+2), I work closely with global teams to build scalable, user-friendly products.
Let's collaborate to bring your vision to life!
        </p>
        <SkillsChart />
      </div>
    ),

    Skills: (
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { name: "Figma", level: "90%" },
          { name: "User Testing", level: "80%" },
          { name: "Web Design", level: "80%" },
          { name: "React", level: "70%" },
        ].map((skill) => (
          <div
            key={skill.name}
            className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h4 className="text-sm font-semibold">{skill.name}</h4>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
         <SkillsChart />
      </div>
    ),

    Experience: <ExperienceSection />,

    Tools: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {["Adobe XD", "Sketch", "Figma", "InVision", "Zeplin", "Notion"].map(
          (tool) => (
            <div
              key={tool}
              className="p-3 text-center bg-gray-50 rounded-lg shadow-sm hover:bg-green-50 transition"
            >
              {tool}
            </div>
          )
        )}
      </div>
    ),

    "Career Highlights": (
      <div className="space-y-3">
        {[
          "Lead designer for a banking app used by 5M+ users",
          "Winner of the 2023 UX Design Excellence Award",
          "Published 3 design system frameworks adopted globally",
        ].map((item, i) => (
          <div
            key={i}
            className="p-3 bg-green-50 border-l-4 border-green-500 rounded"
          >
            {item}
          </div>
        ))}
      </div>
    ),

    Testimonials: (
      <div className="space-y-4">
        {[
          {
            quote:
              "Alex is a visionary designer who truly understands user needs.",
            name: "Sarah Lee, Product Manager",
          },
          {
            quote: "Working with Alex transformed our product’s usability.",
            name: "John Doe, CTO",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <p className="italic text-gray-700">“{t.quote}”</p>
            <p className="mt-2 text-sm text-gray-500">— {t.name}</p>
          </div>
        ))}
      </div>
    ),

    "Similar Talent": (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Maria Garcia — UX Researcher",
          "James Smith — Frontend Developer",
          "Linda Wong — Product Designer",
        ].map((talent, i) => (
          <div
            key={i}
            className="p-3 bg-gray-50 rounded-lg text-center hover:bg-green-50 transition"
          >
            {talent}
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex-1 w-full">
      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex space-x-6 min-w-max">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center gap-2 pb-3 text-sm font-medium whitespace-nowrap transition ${
                activeTab === label
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Animated content */}
      <div className="mt-6 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
