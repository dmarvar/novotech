import { NextResponse } from 'next/server';

interface Invoice {
  id: string;
  client: string;
  total: number;
  numberOfArticles: number;
  vatRate: number;
  subtotalBeforeVat: number;
  vatAmount: number;
  createdAt: string;
  validatedAt: string;
  invoiceNumber: string;
}

const clients = [
  'Cegid',
  'Microsoft',
  'Apple',
  'Google',
  'Amazon',
  'Meta',
  'Oracle',
  'IBM',
  'SAP',
  'Salesforce',
  'Adobe',
  'Intel',
  'Cisco',
  'Dell',
  'HP',
  'Samsung',
  'Sony',
  'NVIDIA',
  'AMD',
  'Qualcomm'
];

const vatRates = [5, 10, 15, 20];

function generateRandomDate(start: Date, end: Date): string {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}

function generateInvoiceNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `INV-${year}-${random}`;
}

function generateInvoices(): Invoice[] {
  const invoices: Invoice[] = [];
  const now = new Date();
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, 1);

  // Generate Cegid invoices first
  const cegidInvoices = 4;
  for (let i = 0; i < cegidInvoices; i++) {
    const createdAt = generateRandomDate(
      new Date(2024, 1, 1), // February 1st, 2024
      new Date(2024, 2, 1)  // March 1st, 2024
    );
    const vatRate = i < 2 ? 20 : vatRates[Math.floor(Math.random() * vatRates.length)];
    const subtotalBeforeVat = Math.floor(Math.random() * 10000) + 1000;
    const vatAmount = subtotalBeforeVat * (vatRate / 100);
    const total = subtotalBeforeVat + vatAmount;

    invoices.push({
      id: `cegid-${i + 1}`,
      client: 'Cegid',
      total,
      numberOfArticles: Math.floor(Math.random() * 10) + 1,
      vatRate,
      subtotalBeforeVat,
      vatAmount,
      createdAt,
      validatedAt: createdAt,
      invoiceNumber: generateInvoiceNumber()
    });
  }

  // Generate remaining invoices
  const remainingInvoices = 46;
  for (let i = 0; i < remainingInvoices; i++) {
    const createdAt = generateRandomDate(threeMonthsAgo, now);
    const vatRate = vatRates[Math.floor(Math.random() * vatRates.length)];
    const subtotalBeforeVat = Math.floor(Math.random() * 10000) + 1000;
    const vatAmount = subtotalBeforeVat * (vatRate / 100);
    const total = subtotalBeforeVat + vatAmount;

    invoices.push({
      id: `invoice-${i + 1}`,
      client: clients[Math.floor(Math.random() * clients.length)],
      total,
      numberOfArticles: Math.floor(Math.random() * 10) + 1,
      vatRate,
      subtotalBeforeVat,
      vatAmount,
      createdAt,
      validatedAt: createdAt,
      invoiceNumber: generateInvoiceNumber()
    });
  }

  // Sort invoices by creation date
  return invoices.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function GET() {
  try {
    const invoices = generateInvoices();
    return NextResponse.json(invoices);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate invoices' },
      { status: 500 }
    );
  }
}
