import React, { useState } from 'react';
import { Filter, ArrowRight, Calendar, MapPin, Zap, Leaf } from 'lucide-react';
import { EcoButton } from './ui/eco-button';
import { Badge } from './ui/badge';

type Project = {
  id: number;
  title: string;
  category: 'solar' | 'wind' | 'corporate' | 'residential';
  location: string;
  completedDate: string;
  image: string;
  capacity: string;
  co2Saved: string;
  energyGenerated: string;
  description: string;
  client: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Manchester Solar Farm",
    category: "solar",
    location: "Manchester, UK",
    completedDate: "Oct 2024",
    image: "https://images.unsplash.com/photo-1725308659447-bf1b10f6635a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc1NTc5Nzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "50 MW",
    co2Saved: "25,000 tonnes/year",
    energyGenerated: "65 GWh/year",
    description: "Large-scale solar installation powering 18,000 homes with clean energy.",
    client: "Manchester City Council"
  },
  {
    id: 2,
    title: "Coastal Wind Project",
    category: "wind",
    location: "Cornwall, UK",
    completedDate: "Sep 2024",
    image: "https://images.unsplash.com/photo-1739648385162-6059c331d24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU1ODk0OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "75 MW",
    co2Saved: "38,000 tonnes/year",
    energyGenerated: "180 GWh/year",
    description: "Offshore wind installation generating clean energy for 50,000 homes.",
    client: "Renewable Energy UK"
  },
  {
    id: 3,
    title: "GreenTech HQ Solar",
    category: "corporate",
    location: "London, UK",
    completedDate: "Aug 2024",
    image: "https://images.unsplash.com/photo-1632263532338-45575eba6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzU1ODk0OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "2.5 MW",
    co2Saved: "1,200 tonnes/year",
    energyGenerated: "3.2 GWh/year",
    description: "Corporate headquarters achieving 90% energy independence through solar.",
    client: "GreenTech Industries"
  },
  {
    id: 4,
    title: "Battery Storage Hub",
    category: "corporate",
    location: "Birmingham, UK",
    completedDate: "Jul 2024",
    image: "https://images.unsplash.com/photo-1735529576077-d3792e43bab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwc3RvcmFnZSUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NTg5NDk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "10 MWh",
    co2Saved: "2,100 tonnes/year",
    energyGenerated: "Peak shaving system",
    description: "Advanced battery storage system optimizing grid stability and costs.",
    client: "Midlands Energy Group"
  },
  {
    id: 5,
    title: "Residential Solar Program",
    category: "residential",
    location: "Edinburgh, UK",
    completedDate: "Jun 2024",
    image: "https://images.unsplash.com/photo-1691828101180-8dd15f5bd28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMG1vZGVybiUyMGhvdXNlfGVufDF8fHx8MTc1NTg5NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "500 kW",
    co2Saved: "250 tonnes/year",
    energyGenerated: "650 MWh/year",
    description: "Community solar program serving 150 residential properties.",
    client: "Edinburgh Housing Association"
  },
  {
    id: 6,
    title: "Smart Grid Integration",
    category: "corporate",
    location: "Bristol, UK",
    completedDate: "May 2024",
    image: "https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTU4OTQ5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    capacity: "15 MW",
    co2Saved: "7,500 tonnes/year",
    energyGenerated: "19.5 GWh/year",
    description: "Integrated renewable energy system with smart grid technology.",
    client: "Bristol Smart City Initiative"
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Filter },
  { id: 'solar', label: 'Solar', icon: Zap },
  { id: 'wind', label: 'Wind', icon: Leaf },
  { id: 'corporate', label: 'Corporate', icon: ArrowRight },
  { id: 'residential', label: 'Residential', icon: ArrowRight }
];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-[var(--ec-n-50)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
            Our Impact in Action
          </h2>
          <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
            Explore our portfolio of successful renewable energy installations across the UK.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-[var(--ec-r-pill)] font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[var(--ec-brand)] text-white shadow-[var(--ec-sh-md)]'
                    : 'bg-[var(--ec-n-0)] text-[var(--ec-n-600)] hover:bg-[var(--ec-brand)]/10 hover:text-[var(--ec-brand)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--ec-n-0)] rounded-[var(--ec-r-lg)] overflow-hidden shadow-[var(--ec-sh-sm)] hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`
                    ${project.category === 'solar' ? 'bg-[var(--ec-accent-sun)]/90 text-white' : ''}
                    ${project.category === 'wind' ? 'bg-[var(--ec-accent-sky)]/90 text-white' : ''}
                    ${project.category === 'corporate' ? 'bg-[var(--ec-brand)]/90 text-white' : ''}
                    ${project.category === 'residential' ? 'bg-[var(--ec-accent-earth)]/90 text-white' : ''}
                  `}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-[var(--ec-r-md)] px-2 py-1">
                    <span className="text-sm font-semibold text-[var(--ec-secondary)]">
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-[var(--ec-secondary)] group-hover:text-[var(--ec-brand)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-[var(--ec-n-600)] group-hover:text-[var(--ec-brand)] group-hover:translate-x-1 transition-all duration-200" />
                </div>

                <div className="flex items-center gap-4 text-sm text-[var(--ec-n-600)] mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.completedDate}
                  </div>
                </div>

                <p className="text-sm text-[var(--ec-n-600)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[var(--ec-success)]/10 rounded-[var(--ec-r-md)] p-3">
                    <div className="text-sm font-semibold text-[var(--ec-success)]">
                      {project.co2Saved}
                    </div>
                    <div className="text-xs text-[var(--ec-n-600)]">CO₂ Saved</div>
                  </div>
                  <div className="bg-[var(--ec-brand)]/10 rounded-[var(--ec-r-md)] p-3">
                    <div className="text-sm font-semibold text-[var(--ec-brand)]">
                      {project.energyGenerated}
                    </div>
                    <div className="text-xs text-[var(--ec-n-600)]">Energy Output</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[var(--ec-n-0)] rounded-[var(--ec-r-lg)] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[var(--ec-secondary)] mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-[var(--ec-n-600)] mb-6">
                  {selectedProject.description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[var(--ec-secondary)] mb-2">Project Details</h4>
                    <ul className="space-y-2 text-sm text-[var(--ec-n-600)]">
                      <li><strong>Client:</strong> {selectedProject.client}</li>
                      <li><strong>Location:</strong> {selectedProject.location}</li>
                      <li><strong>Completed:</strong> {selectedProject.completedDate}</li>
                      <li><strong>Capacity:</strong> {selectedProject.capacity}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--ec-secondary)] mb-2">Environmental Impact</h4>
                    <ul className="space-y-2 text-sm text-[var(--ec-n-600)]">
                      <li><strong>CO₂ Saved:</strong> {selectedProject.co2Saved}</li>
                      <li><strong>Energy Generated:</strong> {selectedProject.energyGenerated}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}