import FeatureCard from "../components/FeatureCard";
import DashboardIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ReplayIcon from "@mui/icons-material/Replay";

const featureData = [
  {
    Icon: DashboardIcon,
    title: "Complete Business Dashboard",
    description:
      "Gain a unified business view with real-time insights and customizable dashboards for smarter, faster decision-making.",
  },
  {
    Icon: SettingsIcon,
    title: "Smart Workflow Automation",
    description:
      "Automate repetitive tasks and optimize operations using intelligent, seamless, and adaptive workflow.",
  },
  {
    Icon: TipsAndUpdatesIcon,
    title: "Industry Intelligence Engine",
    description:
      "Leverage industry-specific insights and benchmarks to make informed decisions and maintain a competitive edge.",
  },
  {
    Icon: ReplayIcon,
    title: "Proactive Alert System",
    description:
      "Stay informed with real-time alerts and notifications about key business updates, changes, and critical opportunities.",
  },
];

const FeaturedCards = () => (
  <section id="features" className="section-padding bg-black text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center text-teal-400">SniperThink Features</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {featureData.map((item, idx) => (
          <FeatureCard
            key={idx}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
            index={idx}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCards;
