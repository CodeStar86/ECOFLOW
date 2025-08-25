import React from 'react';
import { Linkedin, Mail, Award, Leaf } from 'lucide-react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  achievements: string;
  email: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Elena Martinez",
    role: "CEO & Founder",
    bio: "Leading the renewable energy revolution with 15+ years of experience in sustainable technology development.",
    expertise: ["Solar Technology", "Strategic Planning", "Clean Tech Innovation"],
    achievements: "PhD in Renewable Energy, 50+ patents in solar tech",
    email: "elena@ecoflow.com",
    linkedin: "#"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "CTO",
    bio: "Pioneering smart grid solutions and energy storage systems that optimize renewable energy distribution.",
    expertise: ["Smart Grids", "Energy Storage", "IoT Integration"],
    achievements: "Former Tesla Energy Lead, MIT Energy Systems Graduate",
    email: "james@ecoflow.com",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Head of Sustainability",
    bio: "Ensuring every project maximizes environmental impact while maintaining the highest sustainability standards.",
    expertise: ["Environmental Impact", "Carbon Footprint", "Sustainability Metrics"],
    achievements: "LEED Certified Professional, Published researcher",
    email: "priya@ecoflow.com",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Michael Chang",
    role: "Head of Engineering",
    bio: "Designing and implementing cutting-edge renewable energy systems with precision and innovation.",
    expertise: ["Wind Power", "System Design", "Project Engineering"],
    achievements: "PE License, 200+ successful installations",
    email: "michael@ecoflow.com",
    linkedin: "#"
  }
];

export function TeamSection() {
  return (
    <section className="py-16 bg-[var(--ec-n-0)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
            Meet Our Green Team
          </h2>
          <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
            Passionate experts dedicated to accelerating the world's transition to sustainable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-[var(--ec-n-50)] rounded-[var(--ec-r-lg)] p-6 hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-2 border border-[var(--ec-n-200)]"
            >
              {/* Avatar with Green Accent */}
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--ec-brand)] to-[var(--ec-accent-sky)] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--ec-success)] rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--ec-brand)] font-medium text-sm">
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm text-[var(--ec-n-600)] mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-[var(--ec-brand)]/10 text-[var(--ec-brand)] rounded-[var(--ec-r-sm)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[var(--ec-accent-sun)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--ec-n-600)]">
                    {member.achievements}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-[var(--ec-n-200)]">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-brand)]/10 text-[var(--ec-n-600)] hover:text-[var(--ec-brand)] transition-colors duration-200"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-brand)]/10 text-[var(--ec-n-600)] hover:text-[var(--ec-brand)] transition-colors duration-200"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}