import { NextResponse } from "next/server";

// Define the invoice schema
const invoiceSchema = {
  clientSiret: "12345678900010", // French company identification number
  clientName: "Acme Corporation", // Name of the client
  items: [
    {
      description: "Professional Services", // Description of the item/service
      quantity: 10, // Number of units
      price: 150.0, // Price per unit
      unit: "hour", // Unit of the item (e.g., hour, item, service)
    },
  ],
  paymentMethod: "bank_transfer", // Payment method (e.g., bank_transfer, credit_card, paypal)
  selectors: {
    paymentMethods: ["bank_transfer", "credit_card", "paypal"], // Available payment methods
    itemUnits: ["hour", "item", "service"], // Units for items
  },
  metadata: {
    createdDate: "2025-04-16", // ISO 8601 date when the schema was generated
    version: "1.0.0", // Schema version
    language: "en-US", // Language of the schema
  },
};

// API handler to expose the invoice schema
export async function GET() {
  return NextResponse.json(invoiceSchema);
}
