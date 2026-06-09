import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.jpg");

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0a0f"/>
      <stop offset="1" stop-color="#16121f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.22" r="0.6">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- violet accent bar -->
  <rect x="90" y="232" width="10" height="120" rx="5" fill="#8b5cf6"/>

  <text x="124" y="300" font-family="${font}" font-size="84" font-weight="800" fill="#ffffff" letter-spacing="-1.5">Jennifer Miranda</text>
  <text x="126" y="356" font-family="${font}" font-size="34" font-weight="600" fill="#c4b5fd">Computer Science Graduate</text>

  <text x="126" y="430" font-family="${font}" font-size="26" font-weight="600" fill="#9ca3af" letter-spacing="3">FULL-STACK  ·  BACKEND-FOCUSED  ·  APIs  ·  AUTOMATION</text>

  <text x="126" y="540" font-family="${font}" font-size="24" font-weight="500" fill="#71717a">jennifermiranda.com</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(out);
console.log("wrote", out);
