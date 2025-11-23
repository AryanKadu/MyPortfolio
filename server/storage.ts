import { type ContactForm } from "@shared/schema";
import { randomUUID } from "crypto";

export interface ContactSubmission extends ContactForm {
  id: string;
  submittedAt: Date;
}

export interface IStorage {
  saveContactSubmission(form: ContactForm): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.contactSubmissions = new Map();
  }

  async saveContactSubmission(form: ContactForm): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...form,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
