import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900 dark:text-white">Isaiah Omulo</div>
          <div className="hidden md:flex gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="container max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Isaiah Ngare Omulo
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Full-Stack Developer & Systems Specialist
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Computer Science graduate with expertise in backend development, database administration, and system monitoring. Passionate about building scalable solutions and solving complex technical challenges.
              </p>
              <div className="flex gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-700"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Isaiah_CV.pdf";
                    link.download = "Isaiah_CV.pdf";
                    link.click();
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Isaiah-Omulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:omulodeveloper@gmail.com"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
                IO
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-slate-900 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  I'm a Computer Science graduate from Masinde Muliro University with a passion for building robust, scalable solutions. With experience spanning full-stack development, database administration, and systems support, I excel at translating complex business requirements into functional technical solutions.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  My approach combines strong analytical skills with practical problem-solving. I've successfully led end-to-end development projects, managed critical systems, and optimized performance across multiple platforms.
                </p>
              </div>
              <div>
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle>Key Highlights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300">25%+ database query optimization improvement</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300">15% reduction in support tickets through documentation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300">20% improvement in organizational program efficiency</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 dark:text-slate-300">Full-stack development from requirements to deployment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Backend & Web Technologies",
                  skills: ["Python", "PHP", "JavaScript", "C#", "Java", "C++"],
                },
                {
                  title: "Frameworks & Libraries",
                  skills: ["Laravel", "Flask", "Angular", "React"],
                },
                {
                  title: "Databases",
                  skills: ["MySQL", "PostgreSQL", "SQL Server", "SQLite", "MongoDB"],
                },
                {
                  title: "Database Skills",
                  skills: ["Advanced SQL Querying", "Data Extraction & Reporting", "Performance Tuning", "Database Design", "Backup & Recovery"],
                },
                {
                  title: "Support & Monitoring",
                  skills: ["Issue Diagnosis & Troubleshooting", "Root Cause Analysis", "Backend Log Analysis", "API Debugging", "System & Performance Monitoring"],
                },
                {
                  title: "Additional Skills",
                  skills: ["Data Analysis (Python, Excel, Stata, SPSS)", "RESTful APIs", "SOAP & OData", "Windows Server Configuration", "Active Directory"],
                },
              ].map((skillGroup, idx) => (
                <Card key={idx} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white dark:bg-slate-900 py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Work Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "ICT Intern (Developer)",
                  company: "Kenyatta University (via ICT Authority PDTP)",
                  period: "Jan 2025 – Present",
                  highlights: [
                    "Spearheaded development of Legal Case Management System from requirements to deployment",
                    "Designed normalized database structures for optimal data integrity and retrieval",
                    "Developed full-stack application using Laravel PHP framework",
                    "Conducted hands-on training for senior legal officers",
                    "Led Accommodation Services Occurrence Booking System development",
                    "Engineered scalable database designs ensuring data consistency",
                  ],
                },
                {
                  title: "Freelance Web Developer",
                  company: "Upwork/Independent",
                  period: "Jan 2022 – Dec 2024",
                  highlights: [
                    "Provided end-to-end technical support for client web applications",
                    "Optimized SQL queries to reduce database load times by 25%+",
                    "Administered MySQL and PostgreSQL databases with automated backup strategies",
                    "Executed SEO strategies and analyzed traffic using Google Analytics",
                  ],
                },
                {
                  title: "IT Support & Data Analyst (Attachment)",
                  company: "Rafiki Wa Maendeloo Trust",
                  period: "Apr 2021 – Aug 2021",
                  highlights: [
                    "Served as primary point of contact for technical support",
                    "Reduced recurring support tickets by 15% through documentation",
                    "Leveraged SQL and Python for data analysis and reporting",
                    "Contributed to 20% improvement in organizational program efficiency",
                  ],
                },
              ].map((exp, idx) => (
                <Card key={idx} className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="flex gap-3 text-slate-700 dark:text-slate-300">
                          <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Projects Section */}
        <section id="projects" className="py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
                <div className="space-y-6">
                  {[
                    {
                      school: "Masinde Muliro University",
                      degree: "Bachelor of Science in Computer Science",
                      date: "Dec 2022",
                      location: "Kakamega, Kenya",
                    },
                    {
                      school: "Rarieda Mixed Secondary School",
                      degree: "Kenya Certificate of Secondary Education",
                      date: "Dec 2017",
                      location: "Kenya",
                    },
                  ].map((edu, idx) => (
                    <Card key={idx} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-lg">{edu.school}</CardTitle>
                        <CardDescription>{edu.degree}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {edu.date} • {edu.location}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Side Projects</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Interactive Sales Dashboard",
                      description:
                        "Developed a dashboard using Metabase and Power BI to monitor key metrics by integrating data from multiple SQL sources. Provided insights into performance bottlenecks and sales trends.",
                    },
                    {
                      title: "Attendance System",
                      description:
                        "Built a cross-platform attendance application using JavaScript, Cordova, and PHP with a MySQL backend, demonstrating skills in building and supporting integrated mobile-backend systems.",
                    },
                    {
                      title: "BetGenius",
                      description:
                        "Created a data-driven application using Python and SQL to provide users with predictive insights, showcasing strong data processing and backend development skills.",
                    },
                  ].map((project, idx) => (
                    <Card key={idx} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:omulodeveloper@gmail.com"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                omulodeveloper@gmail.com
              </a>
              <a
                href="tel:+254746282760"
                className="inline-flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
              >
                <Phone className="w-5 h-5" />
                +254 746 282 760
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-400/30">
              <p className="text-blue-100">Follow me on GitHub</p>
              <a
                href="https://github.com/Isaiah-Omulo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors mt-3 font-semibold"
              >
                <Github className="w-5 h-5" />
                Isaiah-Omulo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2025 Isaiah Ngare Omulo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
