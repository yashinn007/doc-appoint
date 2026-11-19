import { FiShield, FiClock, FiHeart, FiUsers } from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Verified Doctors",
    description:
      "Every specialist on DocAppoint is vetted, licensed, and reviewed by real patients.",
  },
  {
    icon: FiClock,
    title: "Instant Booking",
    description:
      "Skip the calls. Reserve a slot in seconds and get instant confirmation.",
  },
  {
    icon: FiHeart,
    title: "Patient-First Care",
    description:
      "Transparent fees, clear availability, and a smooth experience from start to finish.",
  },
  {
    icon: FiUsers,
    title: "Trusted by Thousands",
    description:
      "Join a growing community managing their health smartly with DocAppoint.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-3xl">
            Why Choose <span className="text-[#069c6e]">DocAppoint?</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Built around your health and your time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white dark:bg-[#18181b] px-6 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#069c6e]/40 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#5ddda9] text-white dark:text-black shadow-md shadow-[#069c6e]/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-gray-400">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
