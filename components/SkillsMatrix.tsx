import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Users, TrendingUp, Lightbulb, Target, Zap, Brain, Rocket } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: 'technical' | 'business' | 'leadership';
  description: string;
  color: string;
}

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: "Product Development",
      icon: <Code className="h-6 w-6" />,
      level: "advanced",
      category: "technical",
      description: "Full-stack development, API design, UI/UX",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Market Research",
      icon: <Target className="h-6 w-6" />,
      level: "intermediate",
      category: "business",
      description: "Customer validation, competitive analysis",
      color: "from-green-400 to-emerald-400"
    },
    {
      name: "Team Leadership",
      icon: <Users className="h-6 w-6" />,
      level: "advanced",
      category: "leadership",
      description: "Team building, conflict resolution, motivation",
      color: "from-purple-400 to-indigo-400"
    },
    {
      name: "Pitch Deck Creation",
      icon: <Lightbulb className="h-6 w-6" />,
      level: "intermediate",
      category: "business",
      description: "Storytelling, investor presentations, demos",
      color: "from-yellow-400 to-orange-400"
    },
    {
      name: "Growth Hacking",
      icon: <TrendingUp className="h-6 w-6" />,
      level: "beginner",
      category: "business",
      description: "Viral marketing, user acquisition, analytics",
      color: "from-[#fc6520] to-red-400"
    },
    {
      name: "Innovation Strategy",
      icon: <Brain className="h-6 w-6" />,
      level: "advanced",
      category: "leadership",
      description: "Ideation, design thinking, disruption",
      color: "from-red-400 to-pink-400"
    },
    {
      name: "Startup Operations",
      icon: <Zap className="h-6 w-6" />,
      level: "intermediate",
      category: "business",
      description: "Legal setup, accounting, HR basics",
      color: "from-green-400 to-blue-400"
    },
    {
      name: "Scaling & Growth",
      icon: <Rocket className="h-6 w-6" />,
      level: "advanced",
      category: "leadership",
      description: "Team scaling, process optimization, culture",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-yellow-500';
      case 'intermediate':
        return 'bg-blue-500';
      case 'advanced':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const categories = [
    { id: 'technical', name: 'Technical', color: 'bg-blue-500' },
    { id: 'business', name: 'Business', color: 'bg-[#fc6520]' },
    { id: 'leadership', name: 'Leadership', color: 'bg-purple-500' }
  ];

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-6 py-3 rounded-lg font-black text-lg transition-all shadow-lg ${
            selectedCategory === null 
              ? 'bg-[#fc6520] text-white' 
              : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
          }`}
        >
          ALL SKILLS
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-black text-lg transition-all shadow-lg ${
              selectedCategory === category.id 
                ? `${category.color} text-white` 
                : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <Card 
            key={index} 
            className="bg-white border-2 border-gray-200 hover:border-[#fc6520] transition-all duration-300 transform hover:scale-105 group cursor-pointer shadow-lg"
          >
            <CardContent className="p-6 text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#fc6520] transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex items-center justify-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getLevelColor(skill.level)}`}></div>
                <Badge className="bg-gray-100 text-gray-700 border-gray-300 text-xs">
                  {skill.level.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}