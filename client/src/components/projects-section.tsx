import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Enterprise ERP System',
      description: 'Complete ERP solution for Myanmar\'s largest ISP with billing, inventory, and customer management modules.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['Python', 'Odoo', 'PostgreSQL'],
      tagColors: ['bg-blue-600', 'bg-green-600', 'bg-purple-600']
    },
    {
      title: 'Restaurant POS System',
      description: 'Custom POS solution with Kasikorn Bank payment integration for Bangkok\'s premium restaurants.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['OWL JS', 'Odoo 18', 'Payment API'],
      tagColors: ['bg-yellow-600', 'bg-green-600', 'bg-red-600']
    },
    {
      title: 'SAP-Odoo Integration',
      description: 'Seamless integration between SAP and Odoo systems for enterprise workflow automation.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['SAP API', 'Odoo', 'REST API'],
      tagColors: ['bg-blue-600', 'bg-green-600', 'bg-orange-600']
    },
    {
      title: 'Warehouse Management',
      description: 'Comprehensive WMS for Myanmar Distribution Group with real-time inventory tracking and reporting.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['Odoo WMS', 'Python', 'Reports'],
      tagColors: ['bg-green-600', 'bg-blue-600', 'bg-yellow-600']
    },
    {
      title: 'Thailand Tax Reporting',
      description: 'Automated VAT and withholding tax reporting system compliant with Thai revenue regulations.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['Tax API', 'Odoo', 'Jasper'],
      tagColors: ['bg-red-600', 'bg-green-600', 'bg-purple-600']
    },
    {
      title: 'Marketplace Connectors',
      description: 'Multi-platform e-commerce integration with Shopee, TikTok Shop, and other major marketplaces.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      tags: ['Shopee API', 'TikTok API', 'Odoo'],
      tagColors: ['bg-pink-600', 'bg-black', 'bg-green-600']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${project.tagColors[tagIndex]} text-xs rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
