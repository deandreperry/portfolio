import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { CaseStudy } from '@/components/case-study';
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return { title: 'Project not found' };
  return {
    title: p.subtitle,
    description: p.description,
    alternates: { canonical: `/work/${p.slug}` },
    twitter: {
      card: 'summary',
      title: p.subtitle,
      description: p.description,
      images: [],
    },
    openGraph: {
      title: `${p.subtitle} — De’Andre Perry`,
      description: p.focus,
      url: `/work/${p.slug}`,
      images: [],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  return (
    <CaseStudy
      project={projects[index]}
      nextProject={projects[(index + 1) % projects.length]}
    />
  );
}
