import { LinkedIn, Instagram } from "@mui/icons-material";

const ExplorationBar = () => {
    return (
        <div className="bg-black text-white text-sm px-20 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-gray-800">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-4">
                <span className="hidden sm:inline">📞 +91 9876543210</span>
            </div>

            {/* Center: Promo */}
            <div className="text-teal-500 font-medium text-xl">
                🌱 Try our new AI-Powered Business Tool – Free for 14 Days!
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4 mr-5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="hover:text-teal-600 cursor-pointer" fontSize="large" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="hover:text-teal-600 cursor-pointer" fontSize="large" />
                </a>
            </div>
        </div>
    );
};

export default ExplorationBar;
