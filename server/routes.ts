import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const submission = await storage.saveContactSubmission(validatedData);
      
      res.json({
        success: true,
        message: "Contact form submitted successfully",
        submissionId: submission.id,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form",
        });
      }
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({
        success: true,
        submissions,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contact submissions",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
