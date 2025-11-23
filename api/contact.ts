import type { VercelRequest, VercelResponse } from '@vercel/node';
import { contactFormSchema } from '../shared/schema';
import { storage } from '../server/storage';
import { z } from 'zod';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const validatedData = contactFormSchema.parse(req.body);
    const submission = await storage.saveContactSubmission(validatedData);
    
    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: submission.id,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
    });
  }
}

