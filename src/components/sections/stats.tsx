import { stats } from '@/lib/site';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';

export function Stats() {
  return (
    <section className="border-y border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))] py-12">
      <div className="container-tight grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="text-center">
            <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
            </p>
            <p className="mt-2 text-sm font-semibold">{stat.label}</p>
            <p className="mt-1 text-xs text-muted">{stat.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
