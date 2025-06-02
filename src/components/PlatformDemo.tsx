"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Image } from "./next-shim";

// Define the feature data
const features = [
  {
    id: "itinerary",
    title: "Your Trip, Your Way",
    description: "Build a custom itinerary tailored to your preferences and budget. Easily adapt your trip plans as you go.",
    color: "#ff4967",
    textColor: "white",
    videoSrc: "/demos/1.webm"
  },
  {
    id: "preferences",
    title: "Travel Smarter, Not Harder",
    description: "Answer a few questions to set your travel style. Make keyword-based suggestions and add must-visit spots.",
    color: "#f8789d",
    textColor: "white",
    videoSrc: "/demos/2.webm"
  },
  {
    id: "map",
    title: "See Your Journeys Come to Life",
    description: "Get a global view of all the trips you've taken. Explore your travel history through an interactive map that stores every journey.",
    color: "#ff9d7a",
    textColor: "white",
    videoSrc: "/demos/3.webm"
  },
  {
    id: "friends",
    title: "Make Memories Together",
    description: "Connect with friends, plan trips together, and explore new destinations as a group.",
    color: "#da8bb6",
    textColor: "white",
    videoSrc: "/demos/4.webm"
  }
];

// Replacing the detailed demo components with simple rectangles
const DemoRectangle = ({ color, videoSrc }: { color: string; videoSrc: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="flex-grow relative">
        <div 
          className="w-full h-full flex items-center justify-center transition-all duration-500 rounded-t-xl overflow-hidden"
          style={{ backgroundColor: `${color}30` }}
        >
          <video 
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.005)' }}
          />
        </div>
      </div>
      <div 
        className={`p-6 text-center cursor-pointer transition-all duration-300 ${isHovered ? 'rounded-b-xl' : 'rounded-xl'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          backgroundColor: isHovered ? color : 'transparent'
        }}
      >
        <p className="text-lg font-medium transition-colors duration-300" style={{ 
          color: isHovered ? 'white' : color 
        }}>
          Interested in our platform? Join us now!
        </p>
      </div>
    </div>
  );
};

// Main component
export default function PlatformDemo() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id);
  
  // Get active feature color and video source
  const getActiveFeatureData = () => {
    const feature = features.find(f => f.id === activeFeature);
    return {
      color: feature ? feature.color : "#1ce3bb",
      videoSrc: feature ? feature.videoSrc : "/demos/1.webm"
    };
  };
  
  const activeFeatureData = getActiveFeatureData();
  
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
        <DemoRectangle color={activeFeatureData.color} videoSrc={activeFeatureData.videoSrc} />
      </div>
    </div>
  );
} 