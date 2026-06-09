import { artWorks } from '../data/portfolio';

export default function Art() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-[#111111] md:px-10 md:pt-40 lg:px-16">
      <div className="max-w-[1600px]">
        <p className="text-[11px] uppercase tracking-[0.24em] text-black/42">art</p>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {artWorks.map((work, index) => (
            <article
              key={work.title}
              className={`${
                index === 0
                  ? 'lg:col-span-7'
                  : index === 1
                    ? 'lg:col-span-3 lg:pt-20'
                    : index === 2
                      ? 'lg:col-span-2 lg:pt-10'
                      : 'lg:col-span-5 lg:pt-16'
              }`}
            >
              <img src={work.image} alt={work.title} className="h-auto w-full" />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
