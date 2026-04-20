
import UpdateItem from "../components/UpdateItem";
import BottomCTA from "../components/BottomCTA";
import { getFeatures,  } from "../endpoints/blog";
import { Article } from "../types/types";


export default async function UpdatesPage() {
      const features = await getFeatures();
  
    return (
        <div className="min-h-screen bg-transparent dark:bg-gray-950 pt-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                <div className="flex flex-col">
                    {features?.map((updateFeature:Article) => (
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
