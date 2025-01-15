import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Project data (replace or extend with real data if needed)
  const projectData = [
    {
      id: '1',
      name: 'KalaaBazaar',
      description:
        'KalaaBazaar is an online platform dedicated to promoting artisans and their handmade products. It connects local craftspeople with a global audience, emphasizing eco-friendliness, sustainability, and fair trade. The platform features a user-friendly interface with search and filter options, detailed product pages, and a secure checkout process.',
      details: {
        goals: [
          'Increase visibility for artisans and handmade products.',
          'Promote sustainable and eco-friendly products.',
          'Provide a fair trade marketplace.'
        ],
        features: [
          'User-friendly search and filter system.',
          'Detailed product pages with reviews and ratings.',
          'Integrated secure payment gateway.'
        ],
        technologies: ['React','Firebase','Open AI API'],
      },
    },
    {
      id: '2',
      name: 'RightsRevive',
      description:
        'RightsRevive is a social impact project designed to educate and empower individuals about their basic legal and human rights. The platform includes interactive resources, tutorials, and quizzes to make learning engaging and accessible.',
      details: {
        goals: [
          'Raise awareness about fundamental rights.',
          'Provide simplified legal information.',
          'Engage users through interactive content.'
        ],
        features: [
          'Rights resource library.',
          'Interactive tutorials and quizzes.',
          'Content accessible in multiple languages.'
        ],
        technologies: ['React.js', 'Spring Boot', 'Bootstrap'],
      },
    },
  ];

  // Find the project based on the ID
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>Project not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 text-white font-montserrat">
      <h1 className="text-4xl font-bold mb-6 text-primaryPurple">{project.name}</h1>
      <p className="text-lg text-grayLight mb-4">{project.description}</p>

      {/* Goals Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-heading mb-2">Goals</h2>
        <ul className="list-disc pl-5 text-grayLight">
          {project.details.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>

      {/* Features Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-heading mb-2">Features</h2>
        <ul className="list-disc pl-5 text-grayLight">
          {project.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies Section */}
      <div>
        <h2 className="text-2xl font-semibold text-heading mb-2">Technologies Used</h2>
        <ul className="list-disc pl-5 text-grayLight">
          {project.details.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
