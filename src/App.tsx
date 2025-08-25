import React, { useState, useEffect } from 'react';
import { 
  Leaf, Zap, Battery, Sun, Wind, Settings, Calculator, ArrowRight, 
  TrendingUp, Globe, Users, Award, Phone, Mail, MapPin, Send,
  Play, Pause, Facebook, Twitter, Linkedin, Youtube, Instagram
} from 'lucide-react';
import { motion } from 'framer-motion';
import { EcoButton } from './components/ui/eco-button';
import { MetricCard } from './components/ui/metric-card';
import { EcoHero } from './components/ui/eco-hero';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Navigation } from './components/navigation';
import { TestimonialsCarousel } from './components/testimonials-carousel';
import { TeamSection } from './components/team-section';
import { ProjectsGallery } from './components/projects-gallery';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: false
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Animated counter effect
  const [impactCounters, setImpactCounters] = useState({
    co2Reduced: 0,
    energyInstalled: 0,
    projectsCompleted: 0,
    clientsSaved: 0
  });

  useEffect(() => {
    const targets = {
      co2Reduced: 125000,
      energyInstalled: 850,
      projectsCompleted: 2847,
      clientsSaved: 45000000
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          intervals.forEach((id) => clearInterval(id));
        }
        setImpactCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const solutions = [
    {
      icon: Sun,
      title: "Solar Energy",
      description: "High-efficiency solar panel systems that harness the sun's power to reduce your electricity costs by up to 80%.",
      features: ["Residential & Commercial", "25-Year Warranty", "Smart Monitoring"],
      savings: "Up to 80% cost reduction"
    },
    {
      icon: Wind,
      title: "Wind Power",
      description: "Advanced wind turbine installations optimized for maximum energy generation in various wind conditions.",
      features: ["Onshore & Offshore", "Grid Integration", "Predictive Maintenance"],
      savings: "Clean energy 24/7"
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Store excess renewable energy for use when you need it most, ensuring 24/7 clean power availability.",
      features: ["Peak Shaving", "Backup Power", "Grid Services"],
      savings: "Maximum energy independence"
    },
    {
      icon: Settings,
      title: "Smart Grids",
      description: "Intelligent energy management systems that optimize consumption and integrate seamlessly with renewables.",
      features: ["Real-time Monitoring", "Load Balancing", "IoT Integration"],
      savings: "Optimized energy efficiency"
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      description: "Expert guidance to help your organization develop and implement comprehensive sustainability strategies.",
      features: ["Carbon Footprint Analysis", "ESG Compliance", "Sustainability Reporting"],
      savings: "Strategic environmental impact"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Solar Technology in 2025",
      excerpt: "Exploring breakthrough innovations in photovoltaic technology and their impact on renewable energy adoption.",
      category: "Technology",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1691828101180-8dd15f5bd28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMG1vZGVybiUyMGhvdXNlfGVufDF8fHx8MTc1NTg5NDcyN3ww&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 2,
      title: "Corporate Sustainability: A Business Imperative",
      excerpt: "Why businesses are investing in renewable energy and how it's driving competitive advantage.",
      category: "Business",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1632263532338-45575eba6aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1aWxkaW5nJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzU1ODk0OTg1fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 3,
      title: "Energy Storage: The Key to Grid Stability",
      excerpt: "How battery storage systems are revolutionizing renewable energy integration and grid management.",
      category: "Innovation",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1735529576077-d3792e43bab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXR0ZXJ5JTIwc3RvcmFnZSUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NTg5NDk4NXww&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section id="home" className="relative">
        <EcoHero
          title="Powering Tomorrow with Clean Energy"
          subtitle="EcoFlow Solutions delivers cutting-edge renewable energy systems that reduce costs, eliminate carbon emissions, and secure a sustainable future for your business and community."
          backgroundImage="https://images.unsplash.com/photo-1691828101180-8dd15f5bd28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMG1vZGVybiUyMGhvdXNlfGVufDF8fHx8MTc1NTg5NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          primaryCta={{ text: "Get Your Free Energy Audit", onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          secondaryCta={{ text: "Explore Our Solutions", onClick: () => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' }) }}
          impactTicker={{ label: "Clean energy generated today", value: "1,247,523 kWh" }}
        />
      </section>

      {/* Highlight Cards */}
      <section className="py-16 bg-[var(--ec-n-50)] -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1">
                <Sun className="w-12 h-12 text-[var(--ec-accent-sun)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-2">Solar Energy</h3>
                <p className="text-sm text-[var(--ec-n-600)]">Cut electricity costs by up to 80%</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center p-6 hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1">
                <Wind className="w-12 h-12 text-[var(--ec-accent-sky)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-2">Wind Power</h3>
                <p className="text-sm text-[var(--ec-n-600)]">Reliable clean energy generation</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center p-6 hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1">
                <Battery className="w-12 h-12 text-[var(--ec-brand)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-2">Energy Storage</h3>
                <p className="text-sm text-[var(--ec-n-600)]">24/7 power independence</p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center p-6 hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1">
                <Settings className="w-12 h-12 text-[var(--ec-accent-earth)] mx-auto mb-4" />
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-2">Smart Consulting</h3>
                <p className="text-sm text-[var(--ec-n-600)]">Strategic sustainability guidance</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-[var(--ec-n-0)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-6">
                Leading the Renewable Energy Revolution
              </h2>
              <p className="text-lg text-[var(--ec-n-600)] mb-6 leading-relaxed">
                For over a decade, EcoFlow Solutions has been at the forefront of sustainable energy transformation. 
                We've helped thousands of businesses and homeowners transition to clean energy, reducing costs and 
                environmental impact simultaneously.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--ec-brand)] rounded-full"></div>
                  <span className="text-[var(--ec-n-600)]">Founded in 2012 with a mission to democratize clean energy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--ec-brand)] rounded-full"></div>
                  <span className="text-[var(--ec-n-600)]">Over 2,800 successful renewable energy installations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--ec-brand)] rounded-full"></div>
                  <span className="text-[var(--ec-n-600)]">£45M+ in energy savings delivered to our clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--ec-brand)] rounded-full"></div>
                  <span className="text-[var(--ec-n-600)]">125,000+ tonnes of CO₂ eliminated from the atmosphere</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <EcoButton onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>
                  Meet Our Team
                </EcoButton>
                <EcoButton 
                  variant="secondary"
                  onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Impact
                </EcoButton>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1686475577092-285cd688e55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTU4OTQ5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="EcoFlow team discussing renewable energy solutions"
                className="w-full h-96 object-cover rounded-[var(--ec-r-lg)] shadow-[var(--ec-sh-lg)]"
              />
              <div className="absolute inset-0 bg-[var(--ec-brand)]/10 rounded-[var(--ec-r-lg)]"></div>
              
              {/* Play button overlay */}
              <button 
                className="absolute inset-0 flex items-center justify-center group"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  {isVideoPlaying ? (
                    <Pause className="w-8 h-8 text-[var(--ec-brand)]" />
                  ) : (
                    <Play className="w-8 h-8 text-[var(--ec-brand)] ml-1" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-[var(--ec-n-50)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
              From solar and wind to storage and smart grids, we deliver end-to-end renewable energy solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-[var(--ec-brand)] group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-[var(--ec-secondary)]">{solution.title}</h3>
                    </div>
                    
                    <p className="text-[var(--ec-n-600)] mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[var(--ec-brand)] rounded-full"></div>
                          <span className="text-sm text-[var(--ec-n-600)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-[var(--ec-brand)]/10 rounded-[var(--ec-r-md)] p-3 mb-4">
                      <span className="text-sm font-medium text-[var(--ec-brand)]">
                        {solution.savings}
                      </span>
                    </div>
                    
                    <EcoButton variant="tertiary" className="w-full group-hover:bg-[var(--ec-brand)] group-hover:text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </EcoButton>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectsGallery />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-[var(--ec-secondary)] text-[var(--ec-n-0)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-lg text-[var(--ec-n-200)] max-w-2xl mx-auto">
              Every installation contributes to a cleaner, more sustainable future. Here's the measurable impact we've achieved together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Leaf className="w-12 h-12 text-[var(--ec-accent-sun)] mx-auto mb-4" />
              <div className="text-4xl font-semibold tabular-nums text-[var(--ec-n-0)] mb-2">
                {impactCounters.co2Reduced.toLocaleString()}
              </div>
              <div className="text-[var(--ec-n-200)]">Tonnes CO₂ Reduced</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Zap className="w-12 h-12 text-[var(--ec-accent-sun)] mx-auto mb-4" />
              <div className="text-4xl font-semibold tabular-nums text-[var(--ec-n-0)] mb-2">
                {impactCounters.energyInstalled}
              </div>
              <div className="text-[var(--ec-n-200)]">MW Clean Energy Installed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-[var(--ec-accent-sun)] mx-auto mb-4" />
              <div className="text-4xl font-semibold tabular-nums text-[var(--ec-n-0)] mb-2">
                {impactCounters.projectsCompleted.toLocaleString()}
              </div>
              <div className="text-[var(--ec-n-200)]">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <TrendingUp className="w-12 h-12 text-[var(--ec-accent-sun)] mx-auto mb-4" />
              <div className="text-4xl font-semibold tabular-nums text-[var(--ec-n-0)] mb-2">
                £{(impactCounters.clientsSaved / 1000000).toFixed(0)}M+
              </div>
              <div className="text-[var(--ec-n-200)]">Client Savings Generated</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-[var(--ec-n-0)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
              Latest Insights & Trends
            </h2>
            <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
              Stay informed about the latest developments in renewable energy, sustainability, and clean technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-[var(--ec-sh-lg)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[var(--ec-brand)]/90 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[var(--ec-n-600)] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--ec-secondary)] mb-3 group-hover:text-[var(--ec-brand)] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-[var(--ec-n-600)] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[var(--ec-brand)] text-sm font-medium group-hover:gap-2 transition-all duration-200">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <EcoButton variant="secondary">
              View All Articles
            </EcoButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[var(--ec-n-50)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[var(--ec-secondary)] mb-4">
              Ready to Go Green?
            </h2>
            <p className="text-lg text-[var(--ec-n-600)] max-w-2xl mx-auto">
              Get in touch for a free energy audit and discover how much you could save with renewable energy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[var(--ec-brand)]" />
                  Request a Free Energy Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your energy needs, property type, and any specific requirements..."
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="rounded border-[var(--ec-n-300)]"
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for renewable energy insights
                    </Label>
                  </div>
                  
                  <EcoButton type="submit" className="w-full" size="lg">
                    Get My Free Energy Audit
                    <Send className="w-4 h-4 ml-2" />
                  </EcoButton>
                  
                  <p className="text-xs text-[var(--ec-n-600)] text-center">
                    We respect your privacy. Your information is secure and will never be shared.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[var(--ec-secondary)] mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[var(--ec-brand)]" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div className="text-[var(--ec-n-600)]">+44 20 7XXX XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[var(--ec-brand)]" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-[var(--ec-n-600)]">hello@ecoflowsolutions.co.uk</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[var(--ec-brand)]" />
                    <div>
                      <div className="font-medium">Visit Us</div>
                      <div className="text-[var(--ec-n-600)]">
                        123 Green Energy Way<br />
                        London, EC1A 1BB
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <Card className="p-6">
                <h4 className="font-semibold text-[var(--ec-secondary)] mb-4">
                  Why Choose EcoFlow?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[var(--ec-accent-sun)]" />
                    <span className="text-sm">ISO 14001 Environmental Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[var(--ec-brand)]" />
                    <span className="text-sm">10,000+ Satisfied Customers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[var(--ec-accent-sky)]" />
                    <span className="text-sm">25-Year Product Warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-[var(--ec-success)]" />
                    <span className="text-sm">Average 42% Cost Reduction</span>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <div className="bg-[var(--ec-n-200)] rounded-[var(--ec-r-lg)] h-64 flex items-center justify-center">
                <div className="text-center text-[var(--ec-n-600)]">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <div>Interactive Map</div>
                  <div className="text-sm">Find our office location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--ec-secondary)] text-[var(--ec-n-0)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6" />
                <span className="text-lg font-semibold">EcoFlow Solutions</span>
              </div>
              <p className="text-[var(--ec-n-200)] text-sm mb-6 leading-relaxed">
                Leading the transition to sustainable energy with innovative solar, storage, and EV solutions. 
                Together, we're building a cleaner, more sustainable future.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-medium">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-[var(--ec-n-0)]/10 border-[var(--ec-n-300)] text-[var(--ec-n-0)] placeholder:text-[var(--ec-n-300)]"
                  />
                  <EcoButton size="sm">
                    Subscribe
                  </EcoButton>
                </div>
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-3">Solutions</h4>
              <ul className="space-y-2 text-sm text-[var(--ec-n-200)]">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Solar Power</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Wind Energy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Energy Storage</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Smart Grids</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Sustainability Consulting</a></li>
              </ul>
            </div>
            
            {/* Industries */}
            <div>
              <h4 className="font-semibold mb-3">Industries</h4>
              <ul className="space-y-2 text-sm text-[var(--ec-n-200)]">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Residential</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Commercial</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Industrial</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Public Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Agriculture</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-[var(--ec-n-200)]">
                <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#team" className="hover:text-white transition-colors duration-200">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors duration-200">Impact Report</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-[var(--ec-n-300)]" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-sm text-[var(--ec-n-200)]">
                © 2024 EcoFlow Solutions. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs text-[var(--ec-n-300)]">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Certifications */}
              <div className="flex items-center gap-4 text-xs text-[var(--ec-n-300)]">
                <span>ISO 14001 Certified</span>
                <span>MCS Approved</span>
                <span>25-Year Warranty</span>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-0)]/10 transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-0)]/10 transition-colors duration-200">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-0)]/10 transition-colors duration-200">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-[var(--ec-r-md)] hover:bg-[var(--ec-n-0)]/10 transition-colors duration-200">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}