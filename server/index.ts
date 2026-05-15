import cors from 'cors';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const PROJECT_ROOT = path.resolve(__dirname, '..');

const DIST_SPA = path.join(PROJECT_ROOT, 'dist', 'spa');

const app = express();
app.use(cors({ origin: true }));

if (process.env.NODE_ENV === 'production' && fs.existsSync(DIST_SPA)) {
  app.use(express.static(DIST_SPA));
  app.use((req, res) => {
    if (req.path.startsWith('/api')) {
      res.status(404).end();
      return;
    }
    res.sendFile(path.join(DIST_SPA, 'index.html'));
  });
}

const PORT = Number(process.env.SANDBOX_API_PORT ?? 8787);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sandbox dev server (${PROJECT_ROOT}) listening on ${PORT}`);
});
