import blackboxCover from '../../imports/ARCH303_04UrbanArtGallery_JM_Gauthier_Hou_Rakib_Page_16.jpg';
import resonanceCover from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_14.jpg';
import fireCover from '../../imports/Screenshot_2025-12-12_234232.png';
import saltairCover from '../../imports/IMG_6614.JPG';
import verticalityCover from '../../imports/montreal_mist_.jpg';
import calligraphyArt from '../../imports/Elegant_blue_calligraphy_design.png';
import drawingStudy from '../../imports/DSC00114.png';
import inkStudy from '../../imports/DSC00137.png';
import palestinaLibera from '../../imports/palestina_libera.jpg';

export type ProjectCategory = 'design' | 'archive' | 'motion';

export type PortfolioProject = {
  title: string;
  slug: string;
  category: ProjectCategory;
  year?: string;
  blurb: string;
  image?: string;
};

export const categoryRoutes: Record<ProjectCategory, string> = {
  design: 'design',
  archive: 'archive',
  motion: 'motion',
};

export const categoryLabels: Record<ProjectCategory, string> = {
  design: 'design',
  archive: 'archive',
  motion: 'motion',
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'resonance library',
    slug: 'resonance-library',
    category: 'design',
    year: '2025',
    blurb: 'A speculative library project shaped by spatial rhythm, storytelling, and public intimacy.',
    image: resonanceCover,
  },
  {
    title: 'pamplemousse magazine',
    slug: 'pamplemousse-magazine',
    category: 'design',
    year: '2025',
    blurb: 'An editorial exploration where image, typography, and pacing carry equal weight.',
  },
  {
    title: 'blackbox gallery',
    slug: 'blackbox-gallery',
    category: 'design',
    year: '2025',
    blurb: 'An urban art gallery proposal focused on atmosphere, sequence, and encounters with light.',
    image: blackboxCover,
  },
  {
    title: 'fire sanctuary',
    slug: 'fire-sanctuary',
    category: 'design',
    year: '2025',
    blurb: 'A landscape-scale sanctuary imagining architecture as a form of ecological healing.',
    image: fireCover,
  },
  {
    title: 'language/architecture',
    slug: 'bhashar-merudondo',
    category: 'design',
    blurb: 'A language-centered spatial investigation still being documented for the web archive.',
  },
  {
    title: 'vinkhuizen-zuid urban redevelopment',
    slug: 'vinkhuizen-zuid-urban-redevelopment',
    category: 'design',
    blurb: 'Urban redevelopment work centered on adaptation, public life, and future density.',
  },
  {
    title: 'a world of one',
    slug: 'a-world-of-one',
    category: 'design',
    blurb: 'A conceptual design study balancing solitude, fiction, and spatial narrative.',
  },
  {
    title: 'wool-integrated clay tile',
    slug: 'wool-integrated-clay-tile',
    category: 'design',
    blurb: 'A material research project linking craft, sustainability, and building performance.',
  },
  {
    title: 'oddwave studio',
    slug: 'oddwave-studio',
    category: 'design',
    blurb: 'Identity and space-building explorations for a practice in formation.',
  },
  {
    title: 'saltair',
    slug: 'saltair',
    category: 'archive',
    year: '2024',
    blurb: 'A photographic sequence attentive to residue, weather, and coastal drift.',
    image: saltairCover,
  },
  {
    title: 'verticality',
    slug: 'verticality',
    category: 'archive',
    year: '2024',
    blurb: 'An image series tracing towers, posters, sky, and urban compression.',
    image: verticalityCover,
  },
  {
    title: 'suspended noon',
    slug: 'suspended-noon',
    category: 'archive',
    blurb: 'Fragments of midday stillness held in warm light and careful framing.',
  },
  {
    title: 'in praise of shadows',
    slug: 'in-praise-of-shadows',
    category: 'archive',
    blurb: 'Notes from transit, displacement, and temporary forms of belonging.',
  },
  {
    title: 'tropic density',
    slug: 'tropic-density',
    category: 'archive',
    blurb: 'A dense visual study of tropical materiality, color, and layered street life.',
  },
  {
    title: 'held/spaces',
    slug: 'heldspaces',
    category: 'archive',
    blurb: 'A quiet archive of rooms, edges, and the emotional afterlife of interiors.',
  },
  {
    title: 'ru(e) in berlin',
    slug: 'rue-in-berlin',
    category: 'archive',
    blurb: 'A photographic essay reading Berlin through facades, rhythm, and interruption.',
  },
  {
    title: '26paris',
    slug: '26paris',
    category: 'archive',
    blurb: 'Travel fragments and architectural observations collected in short sequences.',
  },
  {
    title: 'roma norte',
    slug: 'roma-norte',
    category: 'archive',
    blurb: 'A neighborhood study attentive to texture, memory, and daily choreography.',
  },
  {
    title: 'guest appearances',
    slug: 'guest-appearances',
    category: 'archive',
    blurb: 'Unplanned encounters, fleeting subjects, and the poetics of being briefly there.',
  },
  {
    title: 'toronto, sometime early october 2023',
    slug: 'toronto-sometime-early-october-2023',
    category: 'motion',
    year: '2023',
    blurb: 'A moving-image piece built from atmosphere, seasonality, and urban drift.',
  },
  {
    title: 'jewels of the diaspora',
    slug: 'jewels-of-the-diaspora',
    category: 'motion',
    blurb: 'A motion study around memory, identity, and cultural inheritance.',
  },
];

export const featuredProjects = portfolioProjects.filter((project) =>
  ['resonance-library', 'blackbox-gallery', 'fire-sanctuary', 'saltair'].includes(project.slug),
);

export const artWorks = [
  {
    title: 'blue calligraphy',
    medium: 'Digital composition',
    image: calligraphyArt,
    note: 'A typographic study that lets rhythm and ornament carry emotion before legibility.',
  },
  {
    title: 'drawing study i',
    medium: 'Mixed media',
    image: drawingStudy,
    note: 'Line work as a way of testing balance, tension, and the softness of unfinished forms.',
  },
  {
    title: 'drawing study ii',
    medium: 'Mixed media',
    image: inkStudy,
    note: 'A companion study built from contrast, texture, and incremental gestures.',
  },
  {
    title: 'palestina libera',
    medium: 'Poster / image work',
    image: palestinaLibera,
    note: 'An image-led piece where political feeling and graphic immediacy meet.',
  },
];

export const writingExcerpt = {
  title: 'between motion and memory',
  source: 'sao paulo reflections',
  text: `The first thing I noticed about São Paulo was that it moved differently. Not forward, not in lines, but in swells like something breathing. Standing there, in the middle of it, I felt something I did not expect to feel so far from home: recognition.`,
};

export const contactDetails = {
  email: 'hello@your-domain.com',
  instagram: '',
  linkedin: '',
};

export function getProjectsByCategory(category: ProjectCategory) {
  return portfolioProjects.filter((project) => project.category === category);
}
