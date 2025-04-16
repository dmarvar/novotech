import { NextResponse } from "next/server";
import { clients } from "../clients/route";

// Define types for the invoice schema and items
interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  unit: string;
  total?: number;
  tva?: number;
}

interface InvoiceSchema {
  clientSiret: string;
  clientName: string;
  items: InvoiceItem[];
  paymentMethod: string;
  selectors?: {
    paymentMethods: string[];
    itemUnits: string[];
  };
  metadata?: {
    createdDate: string;
    version: string;
    language: string;
  };
}

// POST handler to process the invoice schema and return a complete facture
export async function POST(request: Request) {
  try {
    const invoiceSchema: InvoiceSchema = await request.json();

    // Validate the input schema (basic validation)
    if (
      !invoiceSchema ||
      !invoiceSchema.items ||
      !Array.isArray(invoiceSchema.items)
    ) {
      return NextResponse.json(
        { error: "Invalid invoice schema" },
        { status: 400 },
      );
    }

    // Find the client by SIRET
    const client = clients.find(
      (c: { clientSiret: string }) =>
        c.clientSiret === invoiceSchema.clientSiret,
    );
    if (!client) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    // Calculate totals and TVA (20%)
    const items = invoiceSchema.items.map((item: InvoiceItem) => {
      const total = item.quantity * item.price;
      const tva = total * 0.2; // 20% TVA
      return {
        ...item,
        total,
        tva,
      };
    });

    const totalHT = items.reduce(
      (sum: number, item: InvoiceItem) => sum + (item.total || 0),
      0,
    ); // Total before TVA
    const totalTVA = items.reduce(
      (sum: number, item: InvoiceItem) => sum + (item.tva || 0),
      0,
    ); // Total TVA
    const totalTTC = totalHT + totalTVA; // Total including TVA

    // Construct the complete facture
    const facture = {
      ...invoiceSchema,
      clientDetails: {
        name: client.clientName,
        phone: client.phone,
        address: client.address,
      },
      items,
      totals: {
        totalHT,
        totalTVA,
        totalTTC,
      },
    };

    return NextResponse.json(facture);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process the invoice" },
      { status: 500 },
    );
  }
}
