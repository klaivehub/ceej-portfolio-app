export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 active:scale-95 transition-all duration-200 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}