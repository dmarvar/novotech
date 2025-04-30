import { NextRequest, NextResponse } from 'next/server';

// Define the providers list
export const mockProviders = [
  {
    "provider_name": "Tech Solutions SARL",
    "contact_name": "Jean Dupont",
    "address": {
      "line1": "123 rue de la Paix",
      "line2": "",
      "postal_code": "75001",
      "city": "Paris",
      "country": "FR"
    },
    "email": "contact@techsolutions.fr",
    "phone_number": "+33 1 23 45 67 89",
    "vat_number": "FR12 345 678 901",
    "gln": "1234567890123",
    "siren": "123 456 789"
  }
  
];

// API handler to expose the providers list
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const siren = searchParams.get('siren');
    const providerName = searchParams.get('provider_name');

    // Apply filters if provided
    let filteredProviders = mockProviders;
    
    if (siren) {
      filteredProviders = filteredProviders.filter(provider => 
        provider.siren.toLowerCase().includes(siren.toLowerCase())
      );
    }
    
    if (providerName) {
      filteredProviders = filteredProviders.filter(provider => 
        provider.provider_name.toLowerCase().includes(providerName.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredProviders
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch providers' 
      },
      { status: 500 }
    );
  }
}
