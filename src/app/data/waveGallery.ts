import type { ProjectCategory } from './portfolio';

// One image per project, in menu order (design, then archive)
import jingumae from '../../imports/wave-jingumae.jpg';
import resonance from '../../imports/wave-resonance.jpg';
import pamplemousse from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1).png';
import blackbox from '../../imports/wave-blackbox.jpg';
import fire from '../../imports/wave-fire.jpg';
import performing from '../../imports/wave-performing.jpg';
import saltair from '../../imports/IMG_6606.JPG';
import verticality from '../../imports/palestina_libera.jpg';
import suspended from '../../imports/490B671A-4022-4A01-95FB-5C80C6D2B986_1_105_c.jpeg';
import shadows from '../../imports/in-praise-of-shadows-01.jpg';
import tropic from '../../imports/000003910033.jpg';
import desire from '../../imports/desire-01.jpg';
import rue from '../../imports/DSC01225.JPG';

export type WaveGalleryItem = {
  id: string;
  projectSlug: string;
  category: ProjectCategory;
  src: string;
  alt: string;
  imageClassName?: string;
  priority?: boolean;
  /** Page colour while showing: true = black, false = white, omitted = automatic */
  dark?: boolean;
};

const item = (
  projectSlug: string,
  category: ProjectCategory,
  src: string,
  alt: string,
  dark?: boolean,
): WaveGalleryItem => ({
  id: projectSlug,
  projectSlug,
  category,
  src,
  alt,
  dark,
});

export const waveGalleryItems: WaveGalleryItem[] = [
  item('jingumae-gate', 'design', jingumae, 'Jingumae Gate site analysis', false),
  item('resonance-library', 'design', resonance, 'Resonance Library', true),
  item('pamplemousse-magazine', 'design', pamplemousse, 'Pamplemousse magazine spread'),
  item('blackbox-gallery', 'design', blackbox, 'Blackbox gallery', true),
  item('fire-sanctuary', 'design', fire, 'Fire Sanctuary renders', false),
  item('performing-architecture', 'design', performing, 'Performing+Architecture', false),
  item('saltair', 'archive', saltair, 'Saltair photograph'),
  item('verticality', 'archive', verticality, 'Verticality photograph'),
  item('suspended-noon', 'archive', suspended, 'Suspended noon photograph'),
  item('in-praise-of-shadows', 'archive', shadows, 'In praise of shadows photographs'),
  item('tropic-density', 'archive', tropic, 'Tropic density photograph'),
  item('desire', 'archive', desire, 'Désiré photograph'),
  item('rue-in-berlin', 'archive', rue, 'ru(e) in berlin photograph'),
];
