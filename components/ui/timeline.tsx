import React from 'react';
import { Calendar, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const TimelineItem = ({ date, title, organization, points, icon: Icon }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0">
      <div className="bg-blue-500 rounded-full p-2">
        <Icon size={16} className="text-white" />
      </div>
      <div className="absolute top-10 left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
    </div>
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="text-sm text-gray-500 mb-1">{date}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="text-md text-gray-700 mb-2">{organization}</div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-600 text-sm">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Timeline = () => {
  const experiences = [
    {
      date: "July 2024 - Present",
      title: "Software Engineering Research Intern",
      organization: "Oracle Labs",
      icon: Briefcase,
      points: [
        "Helping increase security of Oracle Cloud services",
        "Working with Oracle Linux team on threat detection for build systems",
        "Writing research paper on findings",
        "Experience with Java, Go, and microservices",
        "Research in confidential computing for cyber security",
        "Hardening build systems with remote software attestation"
      ]
    },
    {
      date: "September 2024 - Present",
      title: "Startup Co-Founder and Full Stack Engineer",
      organization: "SeatFinder",
      icon: Code,
      points: [
        "Founded startup helping users find reward seat flights",
        "Grew to 2500+ users with 100+ paying subscribers",
        "Full stack development with React, FastAPI, Google Cloud, and Docker",
        "Experience with TypeScript and Python"
      ]
    },
    {
      date: "November 2023 - February 2024",
      title: "Software Engineering Intern",
      organization: "Opengear",
      icon: Briefcase,
      points: [
        "C programming for Linux Kernel development",
        "Yocto development for Linux OS",
        "Python tool development and testing with Pytest",
        "Agile development experience",
        "Strong embedded systems experience"
      ]
    },
    {
      date: "July 2022 - Present",
      title: "Academic Tutor",
      organization: "The University of Queensland",
      icon: GraduationCap,
      points: [
        "Tutored 4 software courses including CSSE2002, COMP4403, CSSE3200 and CSSE3012",
        "Taught Java, OOP, and software processes",
        "Gained public speaking and communication experience",
        "Covered large-scale system design principles"
      ]
    }
  ];

  const education = [
    {
      date: "Graduation: July 2025",
      title: "Bachelor of Engineering Honours",
      organization: "The University of Queensland",
      icon: GraduationCap,
      points: [
        "Bachelor of Engineering Honours (Software Engineering)",
        "Dean's Commendation for Academic Excellence (2022, 2023)",
        "Last Semester GPA of 6"
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h2>
      <div className="space-y-2">
        {experiences.map((experience, index) => (
          <TimelineItem key={index} {...experience} />
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 my-8">Education</h2>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <TimelineItem key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};
