import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, visibleProjects } from '@/data/projects';
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
      card: p.slug === 'neuromode' ? 'summary_large_image' : 'summary',
      title: p.subtitle,
      description: p.description,
      images: p.slug === 'neuromode' ? ['/projects/neuromode/social-preview.jpg'] : [],
    },
    openGraph: {
      title: `${p.subtitle} — De’Andre Perry`,
      description: p.focus,
      url: `/work/${p.slug}`,
      images: p.slug === 'neuromode' ? ['/projects/neuromode/social-preview.jpg'] : [],
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
      nextProject={visibleProjects[(visibleProjects.findIndex((p) => p.slug === slug) + 1) % visibleProjects.length]}
    />
  );
}
