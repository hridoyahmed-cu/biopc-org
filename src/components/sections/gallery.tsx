import { galleryPhotos } from '@/lib/site';
import { Reveal, SectionHeading } from '@/components/ui/reveal';

/**
 * The picture wall that closes the homepage: every programme poster we have
 * published, followed by photographs from the sessions behind them.
 *
 * Laid out in CSS columns rather than a grid. These are designed artwork and
 * candid photographs of differing shapes, and a grid can only make them line
 * up by cropping them. Columns let every image keep its own aspect ratio and
 * still tile without gaps.
 */
export function Gallery() {
  return (
    <section id="gallery" className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-20 sm:py-24">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              The work, <span className="text-gradient">in pictures</span>
            </>
          }
          lede="Every programme we have announced, and the workshops, laboratories and campus visits behind them."
        />

        <Reveal delay={120}>
          <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {galleryPhotos.map((image) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                loading="lazy"
                className="mb-4 w-full break-inside-avoid rounded-2xl border border-[rgb(var(--border))] shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
