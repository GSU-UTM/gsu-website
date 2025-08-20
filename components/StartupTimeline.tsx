import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Circle, Clock, Star } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'current' | 'upcoming';
  color: string;
  details: string[];
}

export function StartupTimeline() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps: TimelineStep[] = [
    {
      id: 1,
      title: "Ideation & Validation",
      description: "Transform your crazy ideas into viable business concepts",
      duration: "Weeks 1-2",
      status: "completed",
      color: "from-green-400 to-emerald-500",
      details: [
        "Brainstorming sessions with peers",
        "Customer problem identification",
        "Market research and validation",
        "Initial concept refinement"
      ]
    },
    {
      id: 2,
      title: "Team Formation",
      description: "Find your co-founder soulmates and build your dream team",
      duration: "Weeks 3-4",
      status: "completed",
      color: "from-blue-400 to-cyan-500",
      details: [
        "Speed networking events",
        "Skill assessment and matching",
        "Team dynamics workshops",
        "Role definition and agreements"
      ]
    },
    {
      id: 3,
      title: "MVP Development",
      description: "Build your minimum viable product and test with real users",
      duration: "Weeks 5-8",
      status: "current",
      color: "from-[#fc6520] to-red-500",
      details: [
        "Technical architecture planning",
        "Rapid prototyping sessions",
        "User testing and feedback",
        "Iterative development cycles"
      ]
    },
    {
      id: 4,
      title: "Market Launch",
      description: "Go live and start acquiring your first customers",
      duration: "Weeks 9-12",
      status: "upcoming",
      color: "from-purple-400 to-indigo-500",
      details: [
        "Go-to-market strategy execution",
        "Customer acquisition campaigns",
        "Analytics and performance tracking",
        "Initial revenue generation"
      ]
    },
    {
      id: 5,
      title: "Growth & Scaling",
      description: "Scale your startup and prepare for the next level",
      duration: "Weeks 13-16",
      status: "upcoming",
      color: "from-yellow-400 to-orange-500",
      details: [
        "Team expansion planning",
        "Process optimization",
        "Advanced marketing strategies",
        "Investor pitch preparation"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'current':
        return <Clock className="h-6 w-6 text-[#fc6520]" />;
      default:
        return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 via-[#fc6520] via-purple-400 to-yellow-400 opacity-30 hidden md:block"></div>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Timeline Node */}
            <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-white border-4 border-[#fc6520] flex items-center justify-center hidden md:flex shadow-lg">
              {getStatusIcon(step.status)}
            </div>
            
            {/* Content */}
            <div className="md:ml-20">
              <Card 
                className={`cursor-pointer transition-all duration-300 shadow-lg ${
                  selectedStep === step.id 
                    ? 'bg-white border-2 border-[#fc6520] scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center`}>
                        <div className="text-white font-black text-xl">
                          {step.id}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl font-black text-gray-900">
                          {step.title}
                        </CardTitle>
                        <Badge className="mt-2 bg-gray-100 text-gray-700 border-gray-300">
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="md:hidden">
                      {getStatusIcon(step.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg mb-4">
                    {step.description}
                  </p>
                  
                  {selectedStep === step.id && (
                    <div className="mt-6 space-y-3">
                      <h4 className="text-lg font-black text-gray-900 mb-3">What You'll Do:</h4>
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#fc6520] rounded-full"></div>
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      
      {/* Achievement Badge */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#fc6520] to-orange-500 text-white px-6 py-3 rounded-lg font-black text-lg shadow-lg">
          <Star className="h-5 w-5" />
          <span>COMPLETE THE JOURNEY, BECOME A FOUNDER</span>
          <Star className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}