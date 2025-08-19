import { Mountain, Film, Bike, Dumbbell } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies' },
    { number: '3', label: 'Countries' },
  ];

  const interests = [
    { icon: Mountain, label: 'Trekking' },
    { icon: Film, label: 'Movies' },
    { icon: Bike, label: 'Motorcycling' },
    { icon: Dumbbell, label: 'Fitness' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              As a passionate software engineer with over 6 years of experience, I specialize in developing 
              innovative ERP solutions and full-stack applications that solve complex business problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise in Odoo, Python, and modern web technologies has allowed me to deliver 
              high-quality software products across various industries, from ISP companies to distribution 
              networks and financial services.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently based in Thailand, I work as a Senior Odoo Developer at Creative Dev Co., Ltd, 
              focusing on complex integrations, custom module development, and system optimizations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional software development workspace" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            
            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Personal Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <interest.icon className="text-cyan-400" size={20} />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
