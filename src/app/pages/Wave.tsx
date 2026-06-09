import VisualGallery from '../components/VisualGallery';
import { waveGalleryItems } from '../data/waveGallery';

export default function Wave() {
  return (
    <main className="min-h-screen bg-white px-0 pb-0 pt-24 md:pt-28 lg:pt-32">
      <div className="w-full">
        <VisualGallery items={waveGalleryItems} />
      </div>
    </main>
  );
}
