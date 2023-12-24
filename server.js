import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  // Create Vite server in development
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Server-side rendering route
  app.get('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      // Render the app using Vite's SSR API
      const { render } = await vite.ssrLoadModule('/src/App.jsx');
      const appHtml = await render(url);

      // Send the rendered HTML back to the client
      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      console.error(error);
      res.status(500).end(error.message);
    }
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

createServer().catch((error) => {
  console.error('Error starting server:', error);
  // process.exit(1);
});
console.log('Starting server...');
