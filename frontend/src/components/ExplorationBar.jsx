import { LinkedIn, Instagram } from "@mui/icons-material";

const ExplorationBar = () => {
    return (
        <div className="hidden lg:flex fixed top-0 w-full bg-black text-white text-sm px-4 md:px-20 py-2 md:py-3 flex-col md:flex-row items-center justify-between z-50 border-b border-gray-800 h-auto md:h-12">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-4">
                <span className="hidden sm:inline">📞 +91 9876543210</span>
            </div>

            {/* Center: Promo */}
            <div className="text-teal-500 font-medium text-center text-base md:text-xl px-2">
                🌱 Try our new AI-Powered Business Tool – Free for 14 Days!
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="hover:text-teal-600 cursor-pointer" fontSize="medium" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="hover:text-teal-600 cursor-pointer" fontSize="medium" />
                </a>
            </div>
        </div>
    );
};

export default ExplorationBar;
