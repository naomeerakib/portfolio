import { useMemo } from 'react';
import { useParams } from 'react-router';
import Slideshow, { type Slide } from '../components/Slideshow';
import { portfolioProjects } from '../data/portfolio';
import img1 from '../../imports/DSC01225.JPG';
import img2 from '../../imports/DSC01227.JPG';
import img3 from '../../imports/DSC01228.JPG';
import img4 from '../../imports/DSC01230.JPG';
import img5 from '../../imports/DSC01231.JPG';
import img6 from '../../imports/DSC01242.JPG';
import img7 from '../../imports/DSC01243.JPG';
import bgImage from '../../imports/grdr_2025-07-14_201707.643-1.jpg';

// Saltair images
import saltair1 from '../../imports/IMG_6606.JPG';
import saltair2 from '../../imports/IMG_6584.JPG';
import saltair3 from '../../imports/IMG_6586.JPG';
import saltair4 from '../../imports/IMG_6603.JPG';
import saltair5 from '../../imports/IMG_6608.JPG';
import saltair6 from '../../imports/IMG_6611.JPG';
import saltair7 from '../../imports/IMG_6614.JPG';
import saltair8 from '../../imports/IMG_6616.JPG';

// Verticality images
import vert1 from '../../imports/montreal_mist_.jpg';
import vert2 from '../../imports/palestina_libera.jpg';
import vert3 from '../../imports/000001440007.jpg';

// Suspended Noon images
import suspended1 from '../../imports/490B671A-4022-4A01-95FB-5C80C6D2B986_1_105_c.jpeg';
import suspended2 from '../../imports/3289165D-B493-4FAA-A08D-C38303F66193_1_105_c.jpeg';
import suspended3 from '../../imports/16570A98-9510-4126-83AB-0E9B3C356F5A_1_105_c.jpeg';
import suspended4 from '../../imports/29BBFF59-06CA-40AD-885C-253E047C3B19_1_105_c.jpeg';

// Jingumae Gate images
import jingumae1 from '../../imports/jingumae-gate-01.jpg';
import jingumae2 from '../../imports/jingumae-gate-02.jpg';
import jingumae3 from '../../imports/jingumae-gate-03.jpg';
import jingumae4 from '../../imports/jingumae-gate-04.jpg';
import jingumae5 from '../../imports/jingumae-gate-05.jpg';

// Performing+Architecture images
import performing1 from '../../imports/performing-architecture-01.jpg';
import performing2 from '../../imports/performing-architecture-02.jpg';
import performing3 from '../../imports/performing-architecture-03.jpg';
import performing4 from '../../imports/performing-architecture-04.jpg';
import performing5 from '../../imports/performing-architecture-05.jpg';

// In Praise of Shadows images
import shadows1 from '../../imports/in-praise-of-shadows-01.jpg';
import shadows2 from '../../imports/in-praise-of-shadows-02.jpg';
import shadows3 from '../../imports/in-praise-of-shadows-03.jpg';
import shadows4 from '../../imports/in-praise-of-shadows-04.jpg';
import shadows5 from '../../imports/in-praise-of-shadows-05.jpg';
import shadows6 from '../../imports/in-praise-of-shadows-06.jpg';

// Tropic Density images
import tropicNew1 from '../../imports/000003910026.jpg';
import tropicNew2 from '../../imports/000003910031.jpg';
import tropicNew3 from '../../imports/000003910033.jpg';
import tropicNew4 from '../../imports/000003910035.jpg';
import tropicNew5 from '../../imports/000003910036.jpg';
import tropicNew6 from '../../imports/000003910037.jpg';
import tropic1 from '../../imports/D9616322-755E-4D1D-90D1-E003A5086D58_1_105_c.jpeg';
import tropic2 from '../../imports/3DECAFCA-60AD-4B78-98BA-6A7D6F878D18_1_105_c.jpeg';
import tropic3 from '../../imports/0C01F3C0-E54B-435E-9B33-BF43FF951AF8_1_105_c.jpeg';
import tropic4 from '../../imports/435A6201-ABC1-4DE4-BF0B-B1168AD99324_1_105_c.jpeg';
import tropic5 from '../../imports/BBF454CF-65C7-4A3D-A195-6880F7F7524F_1_105_c.jpeg';
import tropic6 from '../../imports/FAF63CDE-D596-4E3A-82A5-99E4CEDEA11F_1_105_c.jpeg';
import tropic7 from '../../imports/D88A2BE7-DEB0-4CF1-B1C0-F99316A98AF2_1_105_c.jpeg';
import tropic8 from '../../imports/77FE2A16-8668-4E8E-AB9C-64EA30CA6F7E_1_105_c.jpeg';
import tropic9 from '../../imports/15CA8635-89EF-443C-A30E-8D951B0A2658_1_105_c.jpeg';
import tropic10 from '../../imports/D8D3CAC1-5674-48FC-9AAF-DEB069C99BB3_1_105_c.jpeg';

// Resonance Library images
import resonance1 from '../../imports/resonance-library-01.jpg';
import resonance2 from '../../imports/resonance-library-02.jpg';
import resonance3 from '../../imports/resonance-library-03.jpg';
import resonance4 from '../../imports/resonance-library-04.jpg';
import resonance5 from '../../imports/resonance-library-05.jpg';

// Pamplemousse Magazine images
import pample1 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)0.png';
import pample2 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)5.png';
import pample3 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)4.png';
import pample4 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)3.png';
import pample5 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)2.png';
import pample6 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1).png';

// Blackbox Gallery images
import blackboxNew1 from '../../imports/blackbox-gallery-01.jpg';
import blackboxNew2 from '../../imports/blackbox-gallery-02.jpg';
import blackboxNew3 from '../../imports/blackbox-gallery-03.jpg';
import blackboxNew4 from '../../imports/blackbox-gallery-04.jpg';
import blackbox1 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_02.jpg';
import blackbox2 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_03.jpg';
import blackbox3 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_04.jpg';
import blackbox4 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_05.jpg';
import blackbox5 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_06.jpg';
import blackbox6 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_07.jpg';
import blackbox7 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_08.jpg';
import blackbox8 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_09.jpg';
import blackbox9 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_10.jpg';
import blackbox10 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_11.jpg';
import blackbox11 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_12.jpg';
import blackbox12 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_13.jpg';
import blackbox13 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_14.jpg';
import blackbox14 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_15.jpg';
import blackbox15 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_16.jpg';
import blackbox16 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_17.jpg';
import blackbox17 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_23.jpg';
import blackbox18 from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_24.jpg';
import blackbox19 from '../../imports/ChatGPT_Image_Jan_14,_2026,_06_39_42_PM-1.png';
import blackbox20 from '../../imports/ChatGPT_Image_Jan_14,_2026,_06_42_32_PM-1.png';
import blackbox21 from '../../imports/ChatGPT_Image_Jan_14,_2026,_06_44_19_PM-1.png';

// Fire Sanctuary images
import fire1 from '../../imports/Screenshot_2025-12-12_221718.png';
import fire2 from '../../imports/Screenshot_2025-12-12_224410.png';
import fire3 from '../../imports/Screenshot_2025-12-12_224639.png';
import fire4 from '../../imports/Screenshot_2025-12-12_234232.png';
import fire5 from '../../imports/Screenshot_2025-12-12_234729.png';
import fire6 from '../../imports/Screenshot_2025-12-12_235608.png';
import fireSketch from '../../imports/fire-sanctuary-sketch.jpeg';
import fireSketch2 from '../../imports/fire-sanctuary-sketch-2.jpeg';
import fireAviaryTwilight from '../../imports/fire-sanctuary-aviary-twilight.png';
import fireSeedPlatformNight from '../../imports/fire-sanctuary-seed-platform-night.png';
import fireThresholdMorning from '../../imports/fire-sanctuary-threshold-morning.png';

/*
 * Project pages: a full-screen, no-scroll slideshow with 10 invisible
 * vertical hover strips (same as moynihanben.com). Each project shows the
 * images in its list below, in order; edit a list to change what appears.
 * A project with more than 10 images gets one strip per image.
 * The previous long-form layouts (with all the written text) are kept in
 * ProjectPageOld.tsx for reference. That file is not used by the site.
 */

// Project data structure
const projectData: Record<string, {
  title: string;
  images: string[];
  background?: string;
}> = {
  'rue-in-berlin': {
    title: 'ru(e) in berlin',
    images: [img1, img2, img3, img4, img5, img6, img7],
    background: bgImage
  },
  'saltair': {
    title: 'saltair',
    images: [saltair1, saltair2, saltair3, saltair4, saltair5, saltair6, saltair7, saltair8]
  },
  'verticality': {
    title: 'verticality',
    images: [vert1, vert2, vert3]
  },
  'suspended-noon': {
    title: 'suspended noon',
    images: [suspended1, suspended2, suspended3, suspended4]
  },
  'jingumae-gate': {
    title: 'jingumae gate',
    images: [jingumae1, jingumae2, jingumae3, jingumae4, jingumae5]
  },
  'performing-architecture': {
    title: 'performing+architecture',
    images: [performing1, performing2, performing3, performing4, performing5]
  },
  'in-praise-of-shadows': {
    title: 'in praise of shadows',
    images: [shadows1, shadows2, shadows3, shadows4, shadows5, shadows6]
  },
  'tropic-density': {
    title: 'tropic density',
    images: [tropicNew3, tropicNew4, tropicNew1, tropicNew5, tropicNew6, tropic1, tropic2, tropic3, tropic4, tropic5, tropic6, tropic7, tropic8, tropic9, tropic10]
  },
  'resonance-library': {
    title: 'resonance library',
    images: [resonance1, resonance2, resonance3, resonance4, resonance5]
  },
  'pamplemousse-magazine': {
    title: 'pamplemousse magazine',
    images: [pample6, pample5, pample4, pample3, pample2, pample1]
  },
  'blackbox-gallery': {
    title: 'blackbox gallery',
    images: [blackbox1, blackbox2, blackbox3, blackbox4, blackbox5, blackbox6, blackbox7, blackbox8, blackbox9, blackbox10, blackboxNew1, blackboxNew2, blackboxNew3, blackboxNew4],
    background: blackbox16
  },
  'fire-sanctuary': {
    title: 'fire sanctuary',
    images: [fireAviaryTwilight, fireSeedPlatformNight, fireThresholdMorning, fire1, fire2, fire3, fire4, fire5, fire6, fireSketch]
  },
};

export default function ProjectPage() {
  const { projectId = '' } = useParams();

  const title =
    projectData[projectId]?.title ??
    portfolioProjects.find((p) => p.slug === projectId)?.title ??
    projectId.replace(/-/g, ' ');

  const slides = useMemo<Slide[]>(
    () =>
      (projectData[projectId]?.images ?? []).map((src, index) => ({
        id: `${projectId}-${index}`,
        src,
        alt: `${title}, image ${index + 1}`,
        caption: title,
      })),
    [projectId, title],
  );

  return (
    <Slideshow
      key={projectId}
      slides={slides}
      cols={Math.max(10, slides.length)}
      rows={1}
      emptyCaption={`${title} (images coming soon)`}
    />
  );
}
