import { contactDetails } from '../data/portfolio';

const isPlaceholderEmail = contactDetails.email === 'hello@your-domain.com';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-[#111111] md:px-10 md:pt-40 lg:px-16">
      <div className="max-w-[980px]">
        <p className="text-[11px] uppercase tracking-[0.24em] text-black/42">contact</p>

        <div className="mt-12 max-w-[760px] space-y-10">
          <h1
            className="text-[clamp(2.6rem,7vw,5.2rem)] font-light lowercase leading-[0.94] tracking-[-0.08em]"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            for commissions,
            <br />
            collaborations,
            <br />
            or conversation
          </h1>

          <div className="space-y-8 text-[15px] font-light leading-8 text-black/72 md:text-[17px]">
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-block text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.05em] text-[#111111] transition hover:text-[#0066ff]"
            >
              {contactDetails.email}
            </a>

            <p>
              Open to work across architecture, visual research, editorial projects, and image-based commissions.
            </p>

            {isPlaceholderEmail ? (
              <p className="text-black/45">This email is still a placeholder. Replace it before publishing.</p>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
