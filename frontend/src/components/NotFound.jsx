import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
            <h1 className="text-6xl font-bold text-teal-700 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
