"use client";

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const slug = (params?.slug as string) || '';

  const convertSlugToTitle = (slug: string) => {
    return slug.replace(/-/g, ' ');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Blog Title:</h1>
      <p>{convertSlugToTitle(slug)}</p>
    </div>
  );
  
}
