import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  name: string;
  description: string;
  founders: string[];
  stage: string;
  category: string;
  metrics: string;
  color: string;
  status: 'active' | 'funded' | 'launched';
}

export function ProjectShowcase() {
  const projects: Project[] = [
    {
      name: "EcoTrack",
      description: "AI-powered carbon footprint tracking for businesses",
      founders: ["Sarah Chen", "Mike Patel"],
      stage: "Series A",
      category: "ClimateTech",
      metrics: "$2.3M Raised",
      color: "from-green-400 to-emerald-500",
      status: "funded"
    },
    {
      name: "StudyMate",
      description: "Collaborative learning platform for university students",
      founders: ["Alex Kim", "Jessica Wong"],
      stage: "MVP",
      category: "EdTech",
      metrics: "10K+ Users",
      color: "from-blue-400 to-cyan-500",
      status: "active"
    },
    {
      name: "HealthSync",
      description: "Telemedicine platform connecting patients with specialists",
      founders: ["David Rodriguez"],
      stage: "Beta",
      category: "HealthTech",
      metrics: "500+ Patients",
      color: "from-[#fc6520] to-red-500",
      status: "launched"
    },
    {
      name: "FinanceFlow",
      description: "Personal finance management for Gen Z",
      founders: ["Emma Johnson", "Ryan Lee"],
      stage: "Seed",
      category: "FinTech",
      metrics: "$500K Raised",
      color: "from-yellow-400 to-orange-500",
      status: "funded"
    },
    {
      name: "CodeMentor",
      description: "AI-powered coding interview preparation",
      founders: ["Kevin Zhang"],
      stage: "Prototype",
      category: "EdTech",
      metrics: "1K+ Students",
      color: "from-purple-400 to-indigo-500",
      status: "active"
    },
    {
      name: "FoodShare",
      description: "Platform reducing food waste by connecting restaurants with consumers",
      founders: ["Lisa Thompson", "James Wilson"],
      stage: "Growth",
      category: "FoodTech",
      metrics: "50+ Restaurants",
      color: "from-pink-400 to-rose-500",
      status: "launched"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'funded':
        return <TrendingUp className="h-4 w-4" />;
      case 'launched':
        return <Star className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'funded':
        return 'bg-green-500';
      case 'launched':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="bg-white border-2 border-gray-200 hover:border-[#fc6520] transition-all duration-300 transform hover:scale-105 group shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                <div className="text-white font-black text-xl">
                  {project.name.charAt(0)}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                <div className="text-gray-600">
                  {getStatusIcon(project.status)}
                </div>
              </div>
            </div>
            <CardTitle className="text-xl font-black text-gray-900 group-hover:text-[#fc6520] transition-colors">
              {project.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-gray-100 text-gray-700 border-gray-300">
                {project.category}
              </Badge>
              <Badge className="bg-gray-100 text-gray-700 border-gray-300">
                {project.stage}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Founders</div>
              <div className="text-sm text-gray-900 font-medium">
                {project.founders.join(', ')}
              </div>
            </div>
            
            <div className={`text-lg font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.metrics}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}