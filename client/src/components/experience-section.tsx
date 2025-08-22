export default function ExperienceSection() {
  const experiences = [
    {
      period: 'Sep 2024 - Aug 2025',
      title: 'Senior Odoo Developer',
      company: 'Creative Dev Co., Ltd - Pathum Thani, Thailand',
      responsibilities: [
        'Thailand TAX Reporting & VAT Systems',
        'SAP-Odoo Integration & Process Workflows',
        'POS Customization with OWL Javascript',
        'Kasikorn Bank Payment Integration'
      ],
      color: 'bg-cyan-400'
    },
    {
      period: 'Feb 2024 - May 2024',
      title: 'Remote Senior Odoo Developer',
      company: 'GNext Co., Ltd - Yangon, Myanmar',
      responsibilities: [
        'Android-Odoo API Infrastructure',
        'Custom Module Development',
        'Project-based Remote Development'
      ],
      color: 'bg-blue-500'
    },
    {
      period: 'Nov 2022 - Feb 2024',
      title: 'Senior Odoo Developer',
      company: 'Myanmar Distribution Group Co., Ltd',
      responsibilities: [
        'Full ERP Module Development (Sales, Purchase, CRM, HR)',
        'WordPress & Flutter Integration',
        'Functional Software Consulting',
        'Multi-version Odoo Expertise (8, 13, 15, 16)'
      ],
      color: 'bg-blue-500'
    },
    {
      period: 'Nov 2018 - Jul 2022',
      title: 'Associate Software Engineer',
      company: 'Frontiir Co., Ltd - Yangon',
      responsibilities: [
        'ERP Development for Myanmar\'s Largest ISP',
        'Android TV Project Integration',
        'Python/PostgreSQL/JavaScript Development',
        'Data Migration & Performance Optimization'
      ],
      color: 'bg-blue-500'
    },
    {
      period: 'May 2018 - August 2018',
      title: 'Software Developer Intern',
      company: 'Frontiir Co., Ltd - Yangon',
      responsibilities: [
        'Research of RDBMS and NoSQL such as Hadoop, Hbase, Spark',
        'Backend Development with Flask',
        'Learn to Build a Web Application with Software fom the ground up'
      ],
      color: 'bg-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${exp.color} rounded-full`}></div>
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}>
                  <div className="bg-slate-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="text-sm text-cyan-400 font-semibold">{exp.period}</div>
                    <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                    <div className="text-slate-400 mb-4">{exp.company}</div>
                    <ul className="text-slate-300 space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>• {resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
