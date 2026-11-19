import Slideshow, { type Slide } from '../components/Slideshow';
import aboutPortrait from '../../imports/about-naomee-web.jpg';

/*
 * About: same full-screen slideshow as the landing page, with 2 vertical
 * hover strips. Left half shows the portrait, right half shows the text.
 * Always black background with blue text.
 */

const slides: Slide[] = [
  {
    id: 'about-portrait',
    src: aboutPortrait,
    alt: 'Black and white portrait of Naomee Rakib',
    caption: 'about',
  },
  {
    id: 'about-text',
    caption: 'about',
    content: (
      <div className="mx-auto max-w-[760px] space-y-3 px-4 text-center text-[15px] md:text-[17px]">
        <p>
          Naomee Rakib is a multidisciplinary designer working across architecture, photography, and visual
          storytelling. Based in Montreal and originally from Dhaka, Bangladesh, her work explores themes of
          identity, migration, cultural preservation, and belonging. Through spatial design, research, and
          visual narratives, she investigates how architecture and storytelling can create meaningful
          connections between people, memory, and place.
        </p>

        <p>Contact: naomee.rakib@mail.mcgill.ca</p>

        <p>Education: B.Sc. (Architecture), McGill University, 2026</p>
      </div>
    ),
  },
];

export default function About() {
  return <Slideshow slides={slides} cols={2} rows={1} alwaysDark />;
}
