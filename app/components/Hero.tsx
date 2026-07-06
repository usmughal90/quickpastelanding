import Image from "next/image";
import Link from "next/link";
import ChooseButton from "./shared/ChooseButton";

const floatingChips = [
  {
    icon: "📋",
    title: "Text saved",
    subtitle: "One tap away",
    className: "top-[4%] left-0 sm:-left-[5%] animate-hero-chip-a",
  },
  {
    icon: "🖼️",
    title: "Image copied",
    subtitle: "From any app",
    className: "top-[76%] -right-1 sm:-right-[10%] animate-hero-chip-b",
  },
  {
    icon: "🔗",
    title: "Link stored",
    subtitle: "Paste anywhere",
    className: "bottom-[17%] left-[6%] sm:-left-[5%] animate-hero-chip-c",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="bg-(--secondary) dark:bg-gray-950 text-black dark:text-white min-h-full lg:h-dvh flex items-center justify-center px-6 lg:px-16 overflow-hidden relative mt-0 py-14 lg:py-12">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-[#0766ad]/20 blur-[120px] animate-hero-blob-a" />
        <div className="absolute bottom-0 left-[-10%] w-[420px] h-[420px] rounded-full bg-[#5eb3f0]/15 blur-[100px] animate-hero-blob-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_38%,rgba(7,102,173,0.16),transparent_60%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_70%_38%,rgba(7,102,173,0.32),transparent_60%)]" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,102,173,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,102,173,0.06)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_70%_at_60%_45%,#000_10%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]" /> */}
      </div>

      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-12 relative z-10">
        {/* left side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="animate-fade-in inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 border border-primary/15 dark:border-white/10 backdrop-blur-md shadow-sm shadow-primary/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-semibold text-primary dark:text-[#5eb3f0] tracking-wide">
              Available on iOS · Free
            </span>
          </div>

          <h1 className="animate-fade-in text-[10vw] sm:text-6xl md:text-7xl lg:text-[4rem] font-bold tracking-tighter leading-[1.05] w-full [animation-delay:120ms]">
            <span className="block xl:whitespace-nowrap">Clipboard Manager</span>
            <span className="mt-2 block bg-linear-to-r from-[#0766ad] via-[#3d9ae8] to-[#0766ad] bg-size-[200%_auto] bg-clip-text text-transparent animate-hero-shimmer">
              Quick Paste
            </span>
          </h1>

          <p className="animate-fade-in mt-6 text-lg md:text-xl text-zinc-700 dark:text-gray-400 max-w-lg font-medium leading-relaxed [animation-delay:220ms]">
            A secure iOS clipboard manager that saves text, images, and links — then pastes them anywhere in one tap.
          </p>

          <div className="animate-fade-in mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 [animation-delay:300ms]">
            {["Text", "Images", "Links","Files", "Messages"].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/60 dark:bg-white/5 text-zinc-700 dark:text-gray-300 border border-zinc-200/80 dark:border-white/10 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="animate-fade-in mt-9 flex flex-col sm:flex-row gap-4 flex-wrap items-center lg:items-start [animation-delay:380ms]">
            <Link
              target="_blank"
              href="https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352"
            >
              <button className="cursor-pointer bg-linear-to-r from-[#0766ad] to-[#0a7fd4] text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:scale-102 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-primary/40 dark:from-[#0766ad] dark:to-[#3d9ae8]">
                Download on App Store
              </button>
            </Link>
            <ChooseButton />
          </div>
        </div>

        {/* right side — phone showcase */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative group">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {/* rotating spotlight */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] w-[95%] max-w-[360px] aspect-[10/16] rounded-[3rem] overflow-hidden">
              <div className="absolute inset-[-60%] bg-[conic-gradient(from_0deg,#0766ad,#5eb3f0,#ddeefc,#0766ad)] opacity-35 dark:opacity-45 animate-hero-spin blur-3xl" />
            </div> */}

            {/* glass pedestal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] w-[82%] max-w-[320px] h-[74%] max-h-[560px] rounded-[2.75rem] border border-white/60 dark:border-white/12 bg-linear-to-b from-white/50 via-white/10 to-white/0 dark:from-white/10 dark:via-white/4 dark:to-transparent shadow-[0_24px_80px_-20px_rgba(7,102,173,0.35)] backdrop-blur-md" />

            {/* floor reflection */}
            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[70%] max-w-[280px] h-8 rounded-[100%] bg-[#0766ad]/20 blur-xl" />
          </div>

          {/* floating feature chips */}
          {floatingChips.map((chip) => (
            <div
              key={chip.title}
              aria-hidden
              className={`absolute z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/85 dark:bg-gray-900/75 backdrop-blur-xl border border-white/70 dark:border-white/10 shadow-[0_8px_32px_rgba(7,102,173,0.12)] ${chip.className}`}
            >
              <span className="text-xl leading-none">{chip.icon}</span>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-800 dark:text-white leading-tight">{chip.title}</p>
                <p className="text-[10px] text-zinc-500 dark:text-gray-400">{chip.subtitle}</p>
              </div>
            </div>
          ))}

          <div className="relative z-10 w-full transition-transform duration-700 ease-out group-hover:animate-premium-float">
            <Image
              src="/header.png"
              alt="Clipboard Manager Quick Paste"
              width={400}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_40px_80px_-20px_rgba(7,102,173,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
