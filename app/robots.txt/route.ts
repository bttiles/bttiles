// app/robots.txt/route.ts
export async function GET() {
  const content = `
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/admin/
Disallow: /_next/
Disallow: /admin/login

Sitemap: https://bismillahtufftiles.vercel.app/sitemap.xml
Host: https://bismillahtufftiles.vercel.app
  `.trim()

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}