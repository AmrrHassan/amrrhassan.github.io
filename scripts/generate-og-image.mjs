import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_PATH = path.join(__dirname, '../public/og-image.png');

const generateOGImage = () => {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background gradient (dark theme)
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#0a0a0a');
  gradient.addColorStop(0.5, '#1a1a2e');
  gradient.addColorStop(1, '#16213e');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 72px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Amr Hassan', WIDTH / 2, 200);

  // Title
  ctx.fillStyle = '#a78bfa';
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.fillText('Full-Stack Engineer', WIDTH / 2, 280);

  // Tech stack
  ctx.fillStyle = '#e5e7eb';
  ctx.font = '36px Arial, sans-serif';
  ctx.fillText('React · Next.js · Flutter · TypeScript', WIDTH / 2, 360);

  // Projects count
  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 42px Arial, sans-serif';
  ctx.fillText('35+ Projects Delivered', WIDTH / 2, 450);

  // URL
  ctx.fillStyle = '#9ca3af';
  ctx.font = '28px Arial, sans-serif';
  ctx.fillText('amrrhassan.github.io', WIDTH / 2, 550);

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(OUTPUT_PATH, buffer);
  console.log('✅ OG image generated successfully at:', OUTPUT_PATH);
};

generateOGImage();
