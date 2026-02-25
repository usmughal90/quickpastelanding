import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsPage, getLatestBlogPosts } from '../endpoints/blog';
import NavbarClient from './NavbarClient';
import { BlogPostsResponse } from '../types/types';

export default async function Navbar() {
  const { visibleCount } = await getLatestBlogPosts();
  const blogs: BlogPostsResponse = await getBlogPostsPage({
    page: 1,
    pageSize: 1,
  });

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="w-full flex items-center justify-between px-16 h-20 bg-white dark:bg-gray-950/95 border border-black/10 dark:border-white/10">

        {/* LEFT SIDE: LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg transform transition-transform">
              <Image
                src="/logoweb.webp"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className='text-(--primary) font-bold text-xl'>Quick Paste</span>
          </Link>
        </div>

        {/* RIGHT SIDE: Client handles links + theme toggle */}
        <NavbarClient visibleCount={visibleCount} postCount={blogs.data.length} />
      </nav>
    </div>
  );
}