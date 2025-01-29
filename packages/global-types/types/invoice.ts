import { z } from 'zod';

export const InvoiceStatusSchema = z.enum(['INITIAL', 'PENDING', 'SUCCESSFUL', 'UNSUCCESSFUL', 'EXPIRED', 'CANCELLED']);

export const InvoiceSchema = z.object({
  // General config props
  id: z.string(),
  referenceId: z.number(),
  referenceType: z.enum(['DEPOSIT', 'WITHDRAWAL']),
  regenerationCount: z.number(),
  merchantMethod: z.enum(['QPAY', 'SOCIALPAY', 'MERCHANT']),
  userId: z.string(),
  // Amount props
  transactionAmount: z.number(),
  transactionCurrency: z.string(),
  amountInUsd: z.number(),
  // Status props
  invoiceStatus: InvoiceStatusSchema,
  executionStatus: InvoiceStatusSchema,
  message: z.string(),
  metadata: z.string(),
  postDate: z.string(),
  createdAt: z.number()
});

export type Invoice = z.infer<typeof InvoiceSchema>;
