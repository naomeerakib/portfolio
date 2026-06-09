import aboutPortrait from '../../imports/about-naomee.jpeg';

export default function About() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32 text-[#111111] md:pt-40">
      <div className="space-y-8">
        <div className="w-full">
          <img
            src={aboutPortrait}
            alt="Black and white portrait of Naomee Rakib"
            className="aspect-video w-full object-cover object-bottom grayscale"
          />
        </div>

        <div className="px-6 md:px-10 lg:px-16">
          <div
            className="mx-auto max-w-[760px] space-y-3 text-center text-[15px] font-light leading-[1.45] text-black/72 md:text-[17px]"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            <p>
              Naomee Rakib is a multidisciplinary designer working across architecture, photography, and visual
              storytelling. Based in Montreal and originally from Dhaka, Bangladesh, her work explores themes of
              identity, migration, cultural preservation, and belonging. Through spatial design, research, and
              visual narratives, she investigates how architecture and storytelling can create meaningful
              connections between people, memory, and place.
            </p>

            <p>
              Contact: naomee.rakib@mail.mcgill.ca
            </p>

            <p>
              Education: B.Sc. (Architecture), McGill University, 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
