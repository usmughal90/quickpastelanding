export interface UpdatePost {
    id: number;
    date: string;
    title: string;
    description: string;
    imageUrl?: string;
    actionLink: string;
    blogLink: string;
}

export const updatePosts: UpdatePost[] = [
    {
        id: 1,
        date: "DECEMBER 9, 2025",
        title: "Power Search in Paste",
        description: "Paste introduces Power Search, a breakthrough that makes your clipboard faster, smarter, and more intuitive than ever.\n\nWith smart filters, text recognition, and intelligent suggestions, Paste helps you instantly find anything you've ever copied across all your devices. Filter by type, app, or date, or even search text inside screenshots.\n\nPower Search brings speed, precision, and clarity to your clipboard, helping you stay focused on your ideas, not on where you saved them.",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 2,
        date: "NOVEMBER 15, 2025",
        title: "New iOS Widget Support",
        description: "Access your clipboard history directly from your home screen with our new interactive iOS widgets. Pin your most used items and get quick access to your shared pinboards without opening the app.",
        imageUrl: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 3,
        date: "OCTOBER 22, 2025",
        title: "Paste for Vision Pro",
        description: "Experience clipboard management in spatial computing. Paste for Vision Pro brings a floating, immersive clipboard interface that integrates seamlessly with your spatial workflow.",
        imageUrl: "https://images.unsplash.com/photo-1625314876503-6e6a760596d6?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 4,
        date: "SEPTEMBER 05, 2025",
        title: "Enhanced Security Features",
        description: "We've added end-to-end encryption for all synced data, ensuring that your clipboard history remains private and secure across all your devices.",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 5,
        date: "AUGUST 12, 2025",
        title: "Team Collaboration 2.0",
        description: "Share pinboards with your team more effectively with granular permissions, comment threads on items, and real-time sync improvements.",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 6,
        date: "JULY 30, 2025",
        title: "Customizable Keyboard Shortcuts",
        description: "You asked, we listened. You can now fully customize the keyboard shortcuts for opening Paste, selecting items, and managing your pinboards.",
        imageUrl: "https://images.unsplash.com/photo-1587829741301-379b39e78262?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 7,
        date: "JUNE 18, 2025",
        title: "Improved Plain Text Mode",
        description: "Strip formatting from copied text automatically. Our improved Plain Text Mode ensures that pasted content matches the destination style perfect every time.",
        imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 8,
        date: "MAY 01, 2025",
        title: "Paste on Android",
        description: "Paste is finally coming to Android! Join the beta to experience cross-platform clipboard synchronization between your Mac, iPad, iPhone, and Android devices.",
        imageUrl: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 9,
        date: "APRIL 14, 2025",
        title: "Smart Link Previews",
        description: "Hover over links in your clipboard history to see rich previews of the content before you paste it. Works with YouTube, Twitter, and common web pages.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
    {
        id: 10,
        date: "MARCH 05, 2025",
        title: "Accessibility Improvements",
        description: "We've improved screen reader support and keyboard navigation throughout the app to make Paste more accessible to everyone.",
        imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?auto=format&fit=crop&w=800&q=80",
        actionLink: "#",
        blogLink: "/blog",
    },
];
