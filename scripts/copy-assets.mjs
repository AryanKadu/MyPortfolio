import { cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const distPublic = 'dist/public';
const attachedAssets = 'attached_assets';

if (!existsSync(distPublic)) {
  mkdirSync(distPublic, { recursive: true });
}

if (existsSync(attachedAssets)) {
  cpSync(attachedAssets, join(distPublic, 'attached_assets'), { recursive: true });
  console.log('✓ Copied attached_assets to dist/public');
}

