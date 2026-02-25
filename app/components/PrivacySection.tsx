import Image from "next/image";
interface FeatureCardProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  description?: string;
}

const featuredCardData: FeatureCardProps[] = [
  {
    iconSrc: "/images/on-device-storage.png",
    title: "On-device Storage",
    iconAlt: "On-device Storage Icon",
  },
  {
    iconSrc: "/images/face-id-protection.png",
    title: "Face ID Protection",
    iconAlt: "Face ID Protection Icon",
  },
  {
    iconSrc: "/images/no-account-setup.png",
    title: "No Account Setup",
    iconAlt: "No Account Setup Icon",
  },
];

export default function PrivacySection() {
  return (
    <section className="bg-white dark:bg-gray-950 pt-20 pb-12 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: On-device storage */}
          {featuredCardData.map((featuredItem: FeatureCardProps) => (
            <FeatureCard
              key={featuredItem.title}
              iconSrc={featuredItem.iconSrc}
              title={featuredItem.title}
              iconAlt={featuredItem.iconAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  iconSrc,
  iconAlt = "",
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center px-4 py-8 rounded-2xl bg-white shadow-sm shadow-gray-200 hover:shadow-2xl  dark:shadow-transparent dark:bg-[#111111] transition-all duration-300 group
                  dark:hover:shadow-2xl dark:hover:shadow-white-500/10"
    >
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={50}
        height={50}
        className="text-[#ddeefc] group-hover:text-black dark:text-white object-contain"
      />

      <h3 className="text-xl mt-3 font-semibold text-black dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// Usage example:
//
// <FeatureCard
//   iconSrc="/icons/storage.png"
//   iconAlt="Storage icon"
//   title="On-device storage"
//   description="Your data stays on your device, always private and secure."
// />
