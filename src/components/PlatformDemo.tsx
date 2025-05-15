"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Image } from "./next-shim";

// Define the feature data
const features = [
  {
    id: "organize",
    title: "Keep everything in one place",
    description: "Organize your travel itineraries, bookings and routes. Add accommodation, activities and transport to each destination.",
    color: "#1ce3bb",
    textColor: "white"
  },
  {
    id: "group",
    title: "Supercharge group travel planning",
    description: "Plan the perfect group trip with your friends and family. Create collaborative itineraries, share ideas and make decisions together.",
    color: "#6c5ce7",
    textColor: "white"
  },
  {
    id: "share",
    title: "Share your adventures with friends & family",
    description: "Create travel journals and share them with your friends - or keep them to yourself. Upload your travel photos and generate travel reels.",
    color: "#ff9d00",
    textColor: "white"
  },
  {
    id: "discover",
    title: "Discover expert travel tips and itineraries",
    description: "Discover insider travel tips, copy itineraries from travel experts and personalize them to your needs.",
    color: "#fe385c",
    textColor: "white"
  }
];

// Replacing the detailed demo components with simple rectangles
const DemoRectangle = ({ color }: { color: string }) => (
  <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
    <div className="flex-grow relative">
      <div 
        className="w-full h-full flex items-center justify-center transition-all duration-500 rounded-t-xl"
        style={{ backgroundColor: `${color}30` }}
      >
        <div 
          className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center transition-all duration-500"
          style={{ backgroundColor: color }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
    <div className="p-6 text-center">
      <p className="text-lg font-medium hover:underline cursor-pointer" style={{ color }}>Interested in our platform? Join us now!</p>
    </div>
  </div>
);

// Main component
export default function PlatformDemo() {
  const [activeFeature, setActiveFeature] = useState<string>("organize");
  
  // Get active feature color
  const getActiveFeatureColor = () => {
    const feature = features.find(f => f.id === activeFeature);
    return feature ? feature.color : "#1ce3bb";
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      {/* Feature Tabs on Left */}
      <div className="md:w-2/5 space-y-4">
        {features.map(feature => (
          <div 
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
              activeFeature === feature.id 
                ? `bg-[${feature.color}]` 
                : "bg-white/90 hover:bg-gray-50 hover:shadow-lg"
            }`}
            style={{ 
              backgroundColor: activeFeature === feature.id ? feature.color : "rgba(255, 255, 255, 0.9)",
              ...(activeFeature !== feature.id && {
                ':hover': {
                  backgroundColor: `${feature.color}10` // Super light version of the feature color
                }
              })
            }}
            onMouseEnter={(e) => {
              if (activeFeature !== feature.id) {
                e.currentTarget.style.backgroundColor = `${feature.color}15`;
              }
            }}
            onMouseLeave={(e) => {
              if (activeFeature !== feature.id) {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
              }
            }}
          >
            <h3 
              className={`font-semibold transition-all duration-300 ${
                activeFeature === feature.id ? `text-${feature.textColor}` : "text-[#2c303b]"
              } ${activeFeature === feature.id ? "mb-2" : ""}`}
              style={{ 
                color: activeFeature === feature.id ? feature.textColor : "#2c303b",
                fontSize: activeFeature === feature.id ? "1.3rem" : "1.1rem",
                transform: activeFeature === feature.id ? "scale(1.05)" : "scale(1)",
                transformOrigin: "left center"
              }}
            >
              {feature.title}
            </h3>
            
            {/* Description with transition - always render but control height/opacity */}
            <div 
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ 
                maxHeight: activeFeature === feature.id ? '120px' : '0',
                opacity: activeFeature === feature.id ? 1 : 0,
                transform: activeFeature === feature.id ? 'translateY(0)' : 'translateY(-8px)',
              }}
            >
              <p className="text-white/90 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Feature Demo Rectangle on Right */}
      <div className="md:w-3/5 min-h-full">
        <DemoRectangle color={getActiveFeatureColor()} />
      </div>
    </div>
  );
} 