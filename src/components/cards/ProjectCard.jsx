import { useState } from "react";

export default function ProjectCard({ projects }) {

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group">

            {/* Existing Image Section */}
            <div className="h-48 overflow-hidden bg-gray-100">
                {projects.image ? (
                    <img
                        src={projects.image}
                        alt={projects.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            {/* Existing Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{color: "var(--text-dark)"}}>{projects.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {projects.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {projects.technologies.map((tech) => (
                        <span
                            key={tech.id}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
