export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white grid-background"
      style={{
        backgroundColor: "var(--primary-dark)",
        color: "var(--primary-light)",
      }}
    >
        <div className="max-w-4xl mx-auto w-full px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-4 mt-6"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    Get in <span style={{ color: "var(--accent-color)" }}>Touch</span>
                </h2>
                <p
                    className="text-lg"
                    style={{ color: "var(--text-subtitle)" }}
                >
                    I'm always open to new opportunities, collaborations, or just a friendly chat about tech! Whether you have a project in mind, want to connect, or just want to say hi, feel free to reach out. You can find me on social media or send me an email. Looking forward to hearing from you!
                </p>
            </div>
            <div className="flex flex-col items-center gap-6">
                <a
                    href="mailto:iamchrisjohnlaxa@outlook.com"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Let's Discuss Opportunities
                </a>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/chrisjohnlaxa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/klaivehub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}
