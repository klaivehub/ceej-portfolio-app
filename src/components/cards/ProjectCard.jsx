import { useState } from "react";

export default function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!project) return null;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group hover:shadow-xl transition-shadow duration-300">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* View More Button */}
                <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                    View Project
                </button>
            </div>
        </div>
    );
}
