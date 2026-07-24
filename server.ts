import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Assistant Route
  app.post('/api/chat', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is required');
      }

      const { messages } = req.body;
      
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are a virtual AI shopping assistant for "LUMIERE CO. JEWELL", a premium luxury jewelry brand. 
The brand tagline is "Jewelry That Speaks Softly & Shines Loudly." 
You should:
- Recommend jewelry based on style and occasion.
- Help customers choose gifts.
- Answer product and material questions (focus on high-quality craftsmanship, stainless steel, gold, tarnish-resistant pieces).
- Explain jewelry care.
- Assist with shipping and returns.
- Support conversations in both English and Urdu.
- Redirect complex requests to WhatsApp.
Tone: Elegant, polite, premium, and helpful.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: messages,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Chat error:', error);
      res.status(500).json({ error: error.message || 'Internal server error' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
