const teamMembers = [
    {
        name: "Jane Doe",
        role: "CEO",
        bio: "Visionary leader driving innovation and growth.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "John Smith",
        role: "Founder",
        bio: "Passionate about creating impactful solutions.",
        img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Emily Johnson",
        role: "CMO",
        bio: "Expert in brand building and marketing strategy.",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "Michael Brown",
        role: "CFO",
        bio: "Financial strategist with a knack for numbers.",
        img: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        name: "Sophia Lee",
        role: "CTO",
        bio: "Tech innovator leading our engineering team.",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const MeetOurTeam = () => {
    return (
        <div className="w-full flex justify-center items-start px-1 py-16 mt-10">
            <section className="bg-[#111] rounded-xl p-10 max-w-7xl w-full gap-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {teamMembers.map(({ name, role, bio, img }) => (
                        <div
                            key={name}
                            className="bg-orange-400 cursor-pointer hover:bg-orange-600 rounded-lg shadow p-6 flex flex-col items-center"
                        >
                            <img
                                src={img}
                                alt={name}
                                className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold">{name}</h3>
                            <p className="text-white font-medium">{role}</p>
                            {bio && (
                                <p className="mt-2 text-white text-sm">{bio}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="/about"
                        className="inline-block bg-orange-400 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow transition"
                    >
                        About Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MeetOurTeam;
