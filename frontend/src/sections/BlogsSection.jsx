const blogs = [
    {
        title: "How AI is Revolutionizing Sustainability",
        image: "https://media.licdn.com/dms/image/v2/D5612AQHECEEQPr9UKg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678963608054?e=2147483647&v=beta&t=oxrUkn4JRIuXO3tsU8JsFynxt11Vq4NtrgMIm0PYSBI",
        url: "https://www.sciencedirect.com/science/article/pii/S2773207X24001386",
    },
    {
        title: "5 Ways to Reduce Your Carbon Footprint",
        image: "https://live.staticflickr.com/65535/50911013966_a4db77b90a_z.jpg",
        url: "https://csd-i.org/reduce-your-carbon-footprint-50-percent-8-steps/?gad_source=1&gad_campaignid=22533092567&gbraid=0AAAAADt1TeEntH4_BH9njsS0ZETkz9JEU&gclid=CjwKCAjw6ZTCBhBOEiwAqfwJd5tEhGuZIvrMQTaQzn0QblCUtpNGfflLfoQa3KVj96orBcbQX0_gDBoCQ-cQAvD_BwE",
    },
    {
        title: "Building Smart Energy Solutions",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51HNnDeAvAumXYZOb_QcrIavdXl9sMzXelA&s",
        url: "https://example.com/blog/smart-energy",
    },
    {
        title: "Innovations in Green Tech",
        image: "https://i0.wp.com/pswordpress-production.s3.amazonaws.com/2024/10/cover-green-technology-innovations-1.jpg?fit=1700%2C956&ssl=1",
        url: "https://instituteofsustainabilitystudies.com/insights/lexicon/green-technologies-innovations-opportunities-challenges/",
    },
];

const BlogsSection = () => {
    return (
        <div id="blogs" className="w-full flex justify-center items-start px-4 py-16 mt-10">
            <section className="bg-gradient-to-br from-gray-500 to-gray-800 rounded-xl p-10 max-w-7xl w-full">
                <h2 className="text-4xl font-bold text-white text-center mb-10">
                    Resources & Blogs
                </h2>

                <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide">
                    {blogs.map((blog, index) => (
                        <a
                            key={index}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-w-[280px] max-w-sm bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white text-center">{blog.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogsSection;
