// app/robots.txt/route.ts
export async function GET() {
  const body = `
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/admin/
Disallow: /_next/
Disallow: /admin/login

Sitemap: https://bismillahtufftiles.vercel.app/sitemap.xml
Host: https://bismillahtufftiles.vercel.app
  `.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
