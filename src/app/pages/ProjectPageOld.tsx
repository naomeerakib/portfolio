// OLD project page layouts, kept for reference only (not used by the site).
// Copy text or layouts from here when updating a project page.
import { useParams } from 'react-router';
import { useState } from 'react';
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
import resonance1 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_04.jpg';
import resonance2 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_05.jpg';
import resonance3 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_07.jpg';
import resonance4 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_08.jpg';
import resonance5 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_10.jpg';
import resonance6 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_11.jpg';
import resonance7 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_12.jpg';
import resonance8 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_13.jpg';
import resonance9 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_14.jpg';
import resonance10 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_15.jpg';
import resonance11 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_16.jpg';
import resonance12 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_17.jpg';
import resonance13 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_18.jpg';
import resonance14 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_20.jpg';
import resonance15 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_21.jpg';
import resonance16 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_22.jpg';
import resonance17 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_26.jpg';
import resonance18 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_27.jpg';
import resonance19 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_32.jpg';
import resonance20 from '../../imports/ARCH405_20250112_RAKIB_PRESENTATION_Page_19.jpg';
import resonance21 from '../../imports/ChatGPT_Image_Jan_14,_2026,_07_00_16_PM.png';
import resonance22 from '../../imports/ChatGPT_Image_Jan_14,_2026,_07_07_06_PM.png';
import resonance23 from '../../imports/ChatGPT_Image_Jan_14,_2026,_07_09_46_PM.png';

// Pamplemousse Magazine images
import pample1 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)0.png';
import pample2 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)5.png';
import pample3 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)4.png';
import pample4 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)3.png';
import pample5 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1)2.png';
import pample6 from '../../imports/0dac25b5c65400c1892208e0eb3e56cb_(1).png';

// Blackbox Gallery images
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
  'tropic-density': {
    title: 'tropic density',
    images: [tropicNew3, tropicNew4, tropicNew1, tropicNew5, tropicNew6, tropic1, tropic2, tropic3, tropic4, tropic5, tropic6, tropic7, tropic8, tropic9, tropic10]
  },
  'resonance-library': {
    title: 'resonance library',
    images: [resonance1, resonance2, resonance3, resonance4, resonance5, resonance6, resonance7, resonance8, resonance9, resonance10, resonance11, resonance12, resonance13, resonance14, resonance15, resonance16, resonance17, resonance18, resonance19, resonance20, resonance21, resonance22, resonance23]
  },
  'pamplemousse-magazine': {
    title: 'pamplemousse magazine',
    images: [pample6, pample5, pample4, pample3, pample2, pample1]
  },
  'blackbox-gallery': {
    title: 'blackbox gallery',
    images: [blackbox1, blackbox2, blackbox3, blackbox4, blackbox5, blackbox6, blackbox7, blackbox8, blackbox9, blackbox10, blackbox11, blackbox12, blackbox13, blackbox14, blackbox15, blackbox16, blackbox17, blackbox18, blackbox19, blackbox20, blackbox21],
    background: blackbox16
  },
  'fire-sanctuary': {
    title: 'fire sanctuary',
    images: [fire1, fire2, fire3, fire4, fire5, fire6]
  },
};

export default function ProjectPageOld() {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get project data or use defaults
  const project = projectId ? projectData[projectId] : null;
  const title = project?.title || projectId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '';
  const images = project?.images || [];
  const background = project?.background;

  // Check if this is the saltair project which has special layout
  const isSaltair = projectId === 'saltair';
  const isVerticality = projectId === 'verticality';
  const isSuspendedNoon = projectId === 'suspended-noon';
  const isTropicDensity = projectId === 'tropic-density';
  const isResonanceLibrary = projectId === 'resonance-library';
  const isPamplemousseMagazine = projectId === 'pamplemousse-magazine';
  const isBlackboxGallery = projectId === 'blackbox-gallery';
  const isFireSanctuary = projectId === 'fire-sanctuary';

  if (isFireSanctuary) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        <div className="pt-32 px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-light mb-4 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
              fire sanctuary
            </h1>
            <p className="text-base mb-16" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', fontWeight: 300 }}>
              Dadia National Park, Greece
            </p>

            <style>{`
              .hover-title:hover {
                color: #0066ff !important;
              }
            `}</style>

            <div className="space-y-8" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                The 2023 wildfire in Dadia National Park, northern Greece, consumed almost ninety thousand hectares of forest. This fire constituted the largest ever documented within the European Union. It resulted in a landscape that resembled not a location, but rather a body recuperating from profound stress. Raptors that had been here for generations forfeited their nesting habitats. Parts of the original woodland fell to ash. However, conservation organizations saw young Cinereous Vultures returning in a few months. Little plants started to emerge from the scorched ground. Slowly but steadily, signs of recovery emerged.
              </p>

              <p>
                This moment gives rise to the Fire Sanctuary. The notion that architecture may contribute to ecological healing is where it all starts. The sanctuary functions as a network of areas dispersed over the damaged land rather than as a single edifice. It provides a means for humans to stroll through the aftermath without turning away from it, helps the forest regain moisture, collects seeds, and makes safe havens for birds to return to.
              </p>

              <p>
                The sanctuary's shapes are derived from two historical sources. The first is the Liver of Piacenza, an Etruscan bronze representation of a sheep's liver used for divination. Each of the zones that made up the liver was associated with a distinct heavenly force. Vitruvius's De Architectura, which discusses nature, climate, and elemental balance, is the second. When taken as a whole, these sources provide a means of interpreting the land as a living body with meaning and memory. A new spatial layout was created by superimposing the zones of the liver on aerial photos of the burned forest. A distinct aspect of the healing process took shape in each zone.
              </p>

              <p>
                I completed all of my development work digitally. I investigated how the charred landscape of Dadia might blend with the Liver of Piacenza using collage, layering, and tracing. This method made it easier for me to see the sanctuary as a healing environment that is adaptable and flexible.
              </p>
            </div>

            <div className="mt-12">
              <img
                src={fireSketch}
                alt="Fire Sanctuary sketchbook drawing"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="space-y-8 mt-12" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <h2 className="text-2xl font-light mt-12 mb-6" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-2px', textTransform: 'lowercase' }}>
                process
              </h2>

              <p>
                I began by working directly with satellite imagery of Dadia National Park. Using publicly available maps, I took screenshots of the forest after the 2023 wildfire and identified the areas that appeared most heavily charred. These burned zones were clearly visible from above, forming dark, irregular patterns across the landscape. I then digitally traced these areas, isolating the most severely affected regions of the park. This tracing allowed me to read the fire not just as an event, but as a spatial condition etched into the surface of the land.
              </p>
            </div>

            <div className="mt-12 space-y-0">
              {images.slice(0, 3).map((image, index) => (
                <div key={index} style={{ margin: 0, padding: 0, display: 'block' }}>
                  <img
                    src={image}
                    alt={`Process image ${index + 1}`}
                    className="w-full h-auto"
                    style={{ display: 'block', margin: 0, padding: 0 }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-8" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                After tracing the most heavily burned areas of Dadia National Park, I introduced a second layer of interpretation based on the methodology of the Liver of Piacenza. Rather than treating the traced fire scars as fixed shapes, I began to draw concentric circles around them, using each burned zone as a center. This process echoes the way the Liver of Piacenza organizes the body into radiating, symbolic fields rather than precise anatomical measurements.
              </p>

              <p>
                As the concentric circles accumulated and overlapped, a new spatial pattern emerged. Areas that had originally appeared as negative space in the fire tracing began to read as distinct zones of their own. These spaces were not directly marked by fire, yet they were shaped by its presence. In this way, the drawing shifted from a representation of damage to a diagram of relational fields, where destruction and absence generated new spatial possibilities. The resulting pattern no longer described only what was burned but suggested how healing zones might form around and between areas of loss.
              </p>
            </div>

            <div className="mt-12 space-y-0">
              {images.slice(3, 5).map((image, index) => (
                <div key={index + 3} style={{ margin: 0, padding: 0, display: 'block' }}>
                  <img
                    src={image}
                    alt={`Process image ${index + 4}`}
                    className="w-full h-auto"
                    style={{ display: 'block', margin: 0, padding: 0 }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-8" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                From the concentric field drawing, I began to identify areas where the pattern felt spatially stable and intentional rather than accidental. Within the overlapping circles, certain shapes emerged that suggested zones of pause, gathering, or protection. These were often areas that had originally appeared as negative space in the earlier tracing but now read as coherent figures once the concentric logic was applied.
              </p>

              <p>
                Using this reading, I selected several of these shapes as potential locations for the programs of the medicine building. I then extracted them and created a simplified outline that reduced the complexity of the earlier layers into a legible spatial framework. This outline does not represent buildings in a conventional sense. Instead, it functions as a territorial diagram that marks where different healing actions might occur across the landscape. The result is a loose but intentional map of programmatic zones that grows directly out of the burned land and the divinatory logic of the Liver of Piacenza.
              </p>
            </div>

            <div className="mt-12">
              <img
                src={images[5]}
                alt="Programmatic zones diagram"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="mt-12 space-y-8" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                Once the outlines of the programmatic zones were established, I began to assign each shape a specific role within the Fire Sanctuary. Rather than starting from a predefined building type, I let the size, position, and relationship of each zone suggest its function. Some shapes felt suited for movement and transition, while others read as places of pause or protection. These intuitions guided the naming of the spaces, which became part of the design process rather than a final label applied afterward.
              </p>

              <p>
                <strong>Threshold of Ashes:</strong> The entrance to the sanctuary sits among the charred trunks. Visitors step onto the burned soil and become aware of its scent, texture, and silence. This first space marks the shift from ordinary ground to a landscape in recovery.
              </p>

              <p>
                <strong>Hall of Remembering Fire:</strong> A colonnade built from salvaged burnt timber forms a quiet passage. This is a place to acknowledge what was lost. It holds the memory of the fire without trying to erase it.
              </p>

              <p>
                <strong>Seed Platform:</strong> This open terrace collects wind and directs it across the land. Seeds and spores are released from baskets and natural materials so they scatter into the burned clearings. The platform supports the slow work of replanting and natural regeneration.
              </p>

              <p>
                <strong>Mist Garden:</strong> Small pools and misting stones restore moisture to a dehydrated landscape. These gardens create pockets of humidity that help new plants germinate and support insects and small animals returning to the area.
              </p>

              <p>
                <strong>Aviary Towers:</strong> These structures provide nesting ledges for raptors and vultures returning to the park. They are shaped by the vertical divisions of the liver diagram. Each tower functions as both habitat and watchpoint.
              </p>

              <p>
                <strong>Observatory of Renewal:</strong> An elevated walkway rises above the recovering forest. From here, people can observe the gradual return of vegetation and wildlife. The platform faces sunrise and symbolizes the ongoing cycle of healing.
              </p>
            </div>

            <div className="mt-12 space-y-8" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                Instead of starting with formal design, I started with a translation. I began by redrawing the Liver of Piacenza as a schematic, using it as a generating tool rather than an archeological relic. Its internal divisions, compartmental logic, and radial divisions piqued my curiosity about how they might be used to organize space symbolically rather than practically. The project&apos;s basis was laid by this first sketch. Instead of using a traditional architectural plan, the medical building would be organized using zones, thresholds, and directional pressures.
              </p>
            </div>

            <div className="mt-12">
              <img
                src={fireSketch2}
                alt="Fire Sanctuary sketchbook study"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="mt-12 space-y-6" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                The architectural forms didn&apos;t start to solidify until this spatial story was formed. The aviary towers appeared as vertical studies in later designs. One remained a more rectilinear prism, whereas the other became tapered and faceted. Both were perforated with tiny holes and divided by horizontal bands. These illustrations investigated how the towers might serve as observation points and shelters without becoming prominent landmarks. Rather than being enormous structures, they were intended to be instruments within the landscape.
              </p>

              <p>
                <strong>Final Project: Fire Sanctuary, Dadia National Park</strong>
              </p>
            </div>

            <div className="mt-12">
              <img
                src={fireAviaryTwilight}
                alt="Aviary Towers at Twilight"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="mt-8 space-y-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                <strong>1. Aviary Towers at Twilight</strong>
              </p>

              <p>
                The aviary towers are conceived as minimal vertical markers within the post-fire landscape, functioning simultaneously as habitats for avian species and as instruments of observation. Their slender proportions, elevated stance, and limited apertures reduce physical and ecological disturbance while offering protected nesting environments for birds returning to Dadia National Park following the 2023 wildfire. Positioned against the fading light of twilight, the towers register a temporal threshold between day and night, emphasizing vigilance, care, and continuity within a landscape undergoing slow ecological recovery. The towers do not dominate the terrain but stand as calibrated presences, acknowledging the fragility of reinhabitation.
              </p>
            </div>

            <div className="mt-12">
              <img
                src={fireSeedPlatformNight}
                alt="Seed Platform and Mist Garden at Night"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="mt-8 space-y-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                <strong>2. Seed Platform and Mist Garden at Night</strong>
              </p>

              <p>
                At the core of the Fire Sanctuary is a low, stepped seed platform that operates as a space of regeneration rather than monumentality. Here, seeds are gathered, stored, and redistributed to support the gradual reconstitution of the forest. A mist garden introduces moisture into the air and soil, establishing a localized microclimate that aids regrowth. At night, the platform becomes a quiet, collective ground where human and ecological processes intersect through patience, care, and restraint.
              </p>
            </div>

            <div className="mt-12">
              <img
                src={fireThresholdMorning}
                alt="Threshold of Ashes and Hall of Remembering Fire in the Morning"
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>

            <div className="mt-8 space-y-4" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                <strong>3. Threshold of Ashes and Hall of Remembering Fire in the Morning</strong>
              </p>

              <p>
                The threshold sequence marks the entry into the sanctuary and acknowledges the fire as an irreversible event rather than an erased condition. Columns softened by vine growth form a porous boundary between destruction and renewal, allowing memory and regeneration to coexist. In the morning light, the Hall of Remembering Fire becomes a reflective passage where traces of ash, material erosion, and vegetation intertwine. This space does not seek closure but invites contemplation, positioning remembrance as an essential component of ecological healing before movement continues into the regenerating forest beyond.
              </p>
            </div>

            <div className="mt-12 space-y-6" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a', fontWeight: 300 }}>
              <p>
                <strong>Final Reflection</strong>
              </p>

              <p>
                This project evolved through a sustained reconsideration of what architectural intervention can mean within a landscape marked by ecological trauma. While the Fire Sanctuary began as an exploration of symbolic zoning and spatial ritual, it gradually became an architectural system that operates through restraint, mediation, and temporal awareness. Rather than rejecting architecture, I reframed its role in relation to the damaged conditions of Dadia National Park. The scale and severity of the wildfire made it clear that architecture could not function here as a singular, dominant object without overshadowing the processes of ecological recovery already underway.
              </p>

              <p>
                As a result, architectural form was introduced deliberately and selectively. Towers, platforms, thresholds, and columns are deployed as calibrated spatial instruments rather than as closed buildings. These elements provide shelter, orientation, and sites of pause, while allowing the landscape itself to remain legible as a recovering body. In this way, architecture does not overwrite damage but works alongside it, acknowledging loss while supporting regeneration over time.
              </p>

              <p>
                My conceptual sketches played a crucial role in this shift. Working by hand allowed me to explore architecture as a sequence of conditions rather than as a resolved form. These drawings informed the digital development of the project, where atmosphere, scale, and material softness became central design tools. Across the final images, architecture operates through pacing, thresholds, and microclimates, shaping how humans and non-human species inhabit the site without asserting control over it.
              </p>

              <p>
                Importantly, this project remains architectural in its intent and execution. It proposes spatial organization, structural form, material presence, and inhabitable conditions as active agents in healing, even as it resists monumentality. What changed most since the draft was my understanding of architecture, not as an act of repair, but as a long-term ethical framework that supports coexistence with damage, uncertainty, and ecological time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if ((isSaltair || isSuspendedNoon || isTropicDensity) && images.length > 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        <div className="pt-32 px-8">
          <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
            {title}
          </h1>
        </div>

        <style>{`
          .hover-title:hover {
            color: #0066ff !important;
          }

          .image-hover-container {
            position: relative;
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            opacity: 0;
            transition: opacity 0.3s ease;
            overflow-y: auto;
          }

          .image-hover-container:hover .image-overlay {
            opacity: 1;
          }

          .overlay-text {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            color: white;
            text-align: left;
            margin: 0;
            letter-spacing: 0;
          }
        `}</style>

        <div className="w-full">
          {images.map((image, index) => (
            <div key={index} className="w-full relative image-hover-container" style={{ margin: 0, padding: 0, display: 'block' }}>
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
              {index === 0 && projectId === 'tropic-density' && (
                <div className="image-overlay" style={{ paddingRight: '50%' }}>
                  <p className="overlay-text">
                    <strong>Between Motion and Memory</strong><br /><br />
                    The first thing I noticed about São Paulo was that it moved differently. Not forward, not in lines, but in swells—like something breathing. The city did not rush so much as it folded into itself. Buses exhaled. Voices rose and dissolved. The air carried rain before it arrived, and the smell of frying oil lingered long after it should have left.<br /><br />
                    Standing there, in the middle of it, I felt something I did not expect to feel so far from home: recognition.<br /><br />
                    It was not in anything obvious. It was in the cracks along the pavement, in the heat that clung stubbornly to glass buildings, in the quiet presence of stray dogs weaving through people who barely noticed them. It was in the way the city refused to be orderly. Dhaka, somehow, had rearranged itself here—scattered, translated, but still intact.<br /><br />
                    I did not feel like a stranger. I felt like I had arrived somewhere that already knew me.<br /><br />
                    There are moments when learning does not feel like learning at all. It feels like unlearning—like loosening something you had held too tightly. In São Paulo, I began to understand that knowledge does not always arrive in structured forms. It seeps in through conversations, through the cadence of a language you do not fully understand, through the way people speak about the world as if they are inside it, not above it.<br /><br />
                    In one place, sustainability was not a concept to be presented or defended. It was a way of existing. Not separate from business, not an afterthought, but braided into it—like roots that cannot be pulled apart without killing the whole. It made me question the narrowness of what we are taught to call progress. It made me wonder who defines it, and for whom.<br /><br />
                    And then there was Liberdade.<br /><br />
                    It did not announce itself loudly. It revealed itself slowly—red gates rising between buildings, paper lanterns suspended above streets tangled with electrical wires, the scent of miso and incense weaving through the air. It felt less like a district and more like a memory layered onto another memory.<br /><br />
                    I stood outside a small shop and watched an elderly woman fold origami cranes with a precision that seemed almost sacred. She spoke Portuguese with ease, her hands moving in another language entirely. It reminded me of something deeply familiar—the quiet choreography of diaspora. The way identity travels. The way it bends, softens, resurfaces.<br /><br />
                    I thought of my parents, in Montreal, speaking Bangla and English in the same breath. Of meals that belonged to one geography but were eaten in another. Of the small, invisible negotiations that shape a life lived between places.<br /><br />
                    In Liberdade, identity did not feel fixed. It felt layered. Accumulated. Like textures pressed into a surface over time.<br /><br />
                    For the first time, I understood that belonging is not always about return. Sometimes, it is about expansion.<br /><br />
                    After that, São Paulo changed. Or maybe I did. The city no longer felt like something to decode. It felt like something to move through. A composite of everywhere and nowhere. A place that held contradictions without trying to resolve them.<br /><br />
                    And then, the ocean.<br /><br />
                    In Ubatuba, time loosened its grip. The air smelled of salt and overripe fruit. Days stretched without urgency. There was nothing to solve, nothing to prove. Just the quiet rhythm of waves folding into themselves again and again, as if rehearsing something eternal.<br /><br />
                    We walked for hours without speaking much. Ate food that tasted like memory. Watched the sky change color in ways that felt almost excessive. Here, learning took another form—the kind that asks nothing of you except presence.<br /><br />
                    And then Rio.<br /><br />
                    Rio did not unfold gently. It arrived all at once. Mountains plunging into water so blue it felt unreal. Music spilling into streets that refused silence. Light touching everything, insisting on being noticed.<br /><br />
                    It felt cinematic, but not in a distant way. In a way that pulled you into it, made you complicit in its beauty.<br /><br />
                    At the base of Christ the Redeemer, the clouds moved like something alive, curling around outstretched arms that seemed both protective and indifferent. There was a stillness there that did not belong to the place itself, but to something larger. Something that made you aware—briefly, sharply—of your own smallness.<br /><br />
                    Later, in a stadium filled with bodies and sound, the stillness dissolved. The noise was immense, collective, unapologetic. It carried something familiar. I thought of nights in Bangladesh, when entire neighborhoods would gather under flickering screens, cheering for a country that was not theirs but somehow felt like it was.<br /><br />
                    That same energy, amplified, moved through me again. A thread stretched between places I thought were separate.<br /><br />
                    That night, on the back of a motorbike, the city opened itself in fragments—light, shadow, wind. The air tasted faintly of sugarcane. Everything felt temporary and infinite at once.<br /><br />
                    I remember thinking: maybe freedom is not something you arrive at. Maybe it is something that happens to you, briefly, unexpectedly. A moment you cannot hold, only remember.<br /><br />
                    Rio did not ask me to understand it. It asked me to feel it. And in doing so, it rearranged something I did not know was unsettled.<br /><br />
                    By the time I returned to São Paulo, the city had softened. Or maybe I had learned how to meet it halfway. It no longer felt vast or overwhelming. It felt like something I was leaving behind, not something I was escaping.<br /><br />
                    On my last day, I walked without direction. Sat in cafés that smelled of coffee and dust. Bought small things I did not need. Watched the light thin out as the city slipped into evening.<br /><br />
                    It felt like saying goodbye to someone you had just begun to understand.<br /><br />
                    Brazil did not feel like a place I had visited. It felt like a conversation—unfinished, still echoing. It changed the way I think about learning, about movement, about what it means to belong somewhere, even briefly.<br /><br />
                    It reminded me that knowledge is not always something you acquire. Sometimes, it is something that happens to you quietly, through texture and rhythm and chance encounters.<br /><br />
                    And that the most meaningful shifts occur not when you stand still and observe, but when you step into motion—and allow yourself to be moved.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isVerticality && images.length > 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        <div className="pt-32 px-8 pb-16">
          <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
            {title}
          </h1>

          <style>{`
            .hover-title:hover {
              color: #0066ff !important;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isResonanceLibrary && images.length > 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'white' }}>
        <div className="pt-32 px-8">
          <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
            {title}
          </h1>
        </div>

        <style>{`
          .hover-title:hover {
            color: #0066ff !important;
          }
        `}</style>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {images.slice(0, 2).map((image, index) => (
              <div key={index} style={{ margin: 0, padding: 0, display: 'block' }}>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                />
              </div>
            ))}

            <div className="px-8 py-12">
              <h2 className="text-4xl font-light hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
                site analysis
              </h2>
            </div>

            {images.slice(2, 4).map((image, index) => (
              <div key={index + 2} style={{ margin: 0, padding: 0, display: 'block' }}>
                <img
                  src={image}
                  alt={`Project image ${index + 3}`}
                  className="w-full h-auto"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                />
              </div>
            ))}

            <div className="px-8 py-12">
              <h2 className="text-4xl font-light hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
                form + function
              </h2>
            </div>

            {images.slice(4, 20).map((image, index) => (
              <div key={index + 4} style={{ margin: 0, padding: 0, display: 'block' }}>
                <img
                  src={image}
                  alt={`Project image ${index + 5}`}
                  className="w-full h-auto"
                  style={{ display: 'block', margin: 0, padding: 0 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 w-full">
          {images.slice(20).map((image, index) => (
            <div key={index + 20} style={{ margin: 0, padding: 0, display: 'block' }}>
              <img
                src={image}
                alt={`Project image ${index + 21}`}
                className="w-full h-auto"
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isPamplemousseMagazine && images.length > 0) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'black' }}>
        <div className="pt-32 px-8 pb-16">
          <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: 'white', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
            {title}
          </h1>

          <style>{`
            .hover-title:hover {
              color: #0066ff !important;
            }
            .image-clickable {
              cursor: pointer;
              transition: opacity 0.2s ease;
            }
            .image-clickable:hover {
              opacity: 0.8;
            }
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000;
            }
            .modal-image {
              max-width: 90vw;
              max-height: 90vh;
              object-fit: contain;
            }
            .close-button {
              position: absolute;
              top: 20px;
              right: 20px;
              background: white;
              border: none;
              font-size: 24px;
              cursor: pointer;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
              color: black;
              transition: background-color 0.2s ease;
            }
            .close-button:hover {
              background-color: #0066ff;
              color: white;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto image-clickable"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    );
  }

  if (isBlackboxGallery && images.length > 0) {
    return (
      <div className="min-h-screen" style={{ position: 'relative', backgroundColor: 'white' }}>
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${background})`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.5,
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="pt-32 px-8">
            <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
              {title}
            </h1>
          </div>

          <style>{`
            .hover-title:hover {
              color: #0066ff !important;
            }
          `}</style>

          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              {images.map((image, index) => (
                <div key={index} style={{ margin: 0, padding: 0, display: 'block' }}>
                  <img
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-auto"
                    style={{ display: 'block', margin: 0, padding: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-32 px-8"
      style={background ? {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : { backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-light mb-12 hover-title" style={{ fontFamily: 'Arial, sans-serif', color: background ? 'white' : '#1a1a1a', letterSpacing: '-5px', transition: 'color 0.2s ease', textTransform: 'lowercase' }}>
          {title}
        </h1>

        <style>{`
          .hover-title:hover {
            color: #0066ff !important;
          }

          .image-hover-container {
            position: relative;
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .image-hover-container:hover .image-overlay {
            opacity: 1;
          }

          .overlay-text {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            color: white;
            text-align: left;
            margin: 0;
            letter-spacing: 0;
          }
        `}</style>

        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {images.map((image, index) => (
              <div key={index} className="w-full relative image-hover-container">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto m-[0px]"
                  style={index === 0 && projectId === 'rue-in-berlin' ? {
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    aspectRatio: '2/3',
                    height: 'auto'
                  } : {}}
                />
                {index === 0 && projectId === 'rue-in-berlin' && (
                  <div className="image-overlay">
                    <p className="overlay-text">
                      rusafa, berlin, midsummer 2025<br /><br />
                      In the long, white light of a Berlin summer, Rusafa stands and slips, appears and dissolves. The flash is too much and not enough at once, holding her in brightness while letting her blur at the edges. These images gather small, shifting selves, caught somewhere between being seen and becoming.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
