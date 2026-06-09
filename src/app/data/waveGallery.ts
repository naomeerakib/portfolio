import type { ProjectCategory } from './portfolio';

import rue1 from '../../imports/DSC01228.JPG';
import saltair1 from '../../imports/IMG_6606.JPG';
import suspended1 from '../../imports/3289165D-B493-4FAA-A08D-C38303F66193_1_105_c.jpeg';
import tropic1 from '../../imports/000003910033.jpg';
import resonance3 from '../../imports/ChatGPT_Image_Jan_14,_2026,_07_09_46_PM.png';
import pample2 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)5.png';
import blackbox1 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_05.jpg';
import fire3 from '../../imports/fire-sanctuary-aviary-twilight.png';

export type WaveGalleryItem = {
  id: string;
  projectSlug: string;
  category: ProjectCategory;
  src: string;
  alt: string;
  imageClassName?: string;
  priority?: boolean;
};

export const waveGalleryItems: WaveGalleryItem[] = [
  {
    id: 'saltair-01',
    projectSlug: 'saltair',
    category: 'archive',
    src: saltair1,
    alt: 'Saltair photograph with shoreline light and muted tones',
    priority: true,
  },
  {
    id: 'pamplemousse-01',
    projectSlug: 'pamplemousse-magazine',
    category: 'design',
    src: pample2,
    alt: 'Second-last Pamplemousse magazine spread with layered editorial composition',
  },
  {
    id: 'blackbox-01',
    projectSlug: 'blackbox-gallery',
    category: 'design',
    src: blackbox1,
    alt: 'Blackbox gallery drawing showing exterior materiality and atmosphere',
  },
  {
    id: 'fire-02',
    projectSlug: 'fire-sanctuary',
    category: 'design',
    src: fire3,
    alt: 'Fire Sanctuary aviary towers at twilight',
  },
  {
    id: 'rue-01',
    projectSlug: 'rue-in-berlin',
    category: 'archive',
    src: rue1,
    alt: 'Photograph from rue in berlin showing a quiet urban facade study',
    priority: true,
  },
  {
    id: 'tropic-01',
    projectSlug: 'tropic-density',
    category: 'archive',
    src: tropic1,
    alt: 'Tropic density photo with layered urban textures and lush color',
  },
  {
    id: 'suspended-01',
    projectSlug: 'suspended-noon',
    category: 'archive',
    src: suspended1,
    alt: 'Suspended noon image with soft light and sculptural figure',
  },
  {
    id: 'resonance-03',
    projectSlug: 'resonance-library',
    category: 'design',
    src: resonance3,
    alt: 'Resonance library final concept image with atmospheric visual narrative',
  },
];
