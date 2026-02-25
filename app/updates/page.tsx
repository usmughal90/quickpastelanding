// "use client";
import UpdateItem from "../components/UpdateItem";
import { updatePosts } from "../data/updatesData";
import BottomCTA from "../components/BottomCTA";
import { getLatestBlogPosts } from "../endpoints/blog";
import { Article } from "../types/types";


export default async function UpdatesPage() {
      const {visibleUpdates} = await getLatestBlogPosts();
  
    return (
        <div className="min-h-screen bg-transparent dark:bg-gray-950 pt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                <div className="flex flex-col">
                    {visibleUpdates.map((updateFeature:Article) => (
                        <UpdateItem
                            key={updateFeature.slug ?? updateFeature.id}
                            data={updateFeature}
                        />
                    ))}
                </div>
            </div>
            <BottomCTA />
        </div>
    );
}
