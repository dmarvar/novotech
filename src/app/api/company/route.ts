import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const companyInfo = {
      company: {
        name: "TechnoVision Solutions",
        legal_name: "TechnoVision Solutions SAS",
        registration_info: {
          siren: "123 456 789",
          siret: "123 456 789 00001",
          vat_number: "FR 32 123456789",
          registration_date: "2015-03-15",
          rcs: "Paris B 123 456 789"
        },
        contact: {
          email: "contact@technovision-solutions.fr",
          phone: "+33 (0)1 23 45 67 89",
          website: "www.technovision-solutions.fr"
        },
        address: {
          street: "42 Avenue de l'Innovation",
          complement: "Bâtiment B",
          postal_code: "75008",
          city: "Paris",
          country: "France"
        },
        legal_info: {
          capital: "250000",
          currency: "EUR",
          legal_form: "Société par Actions Simplifiée (SAS)",
          activity_code: {
            ape_naf: "6202A",
            description: "Conseil en systèmes et logiciels informatiques"
          }
        },
        banking_info: {
          bank_name: "Banque Nationale de Paris",
          iban: "FR76 3000 1234 1234 1234 1234 123",
          bic: "BNPAFRPP"
        },
        certifications: [
          {
            name: "ISO 27001",
            validity: "2024-12-31"
          },
          {
            name: "HDS",
            validity: "2024-12-31"
          }
        ],
        insurance: {
          provider: "AXA Assurances",
          policy_number: "XFR123456789",
          coverage_amount: "5000000",
          currency: "EUR"
        }
      },
      metadata: {
        last_updated: new Date().toISOString(),
        version: "1.0"
      }
    };

    return NextResponse.json({
      success: true,
      data: companyInfo
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch company information'
      },
      { status: 500 }
    );
  }
} 