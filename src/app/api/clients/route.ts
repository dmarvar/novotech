import { NextRequest, NextResponse } from 'next/server';

// Define the clients list
export const mockClients = [
  {
    "client_name": "Petit Poirier SARL",
    "contact_name": "Isabelle Reynaud-Gillet",
    "address": {
      "line1": "92, rue Bailly",
      "line2": "",
      "postal_code": "40142",
      "city": "FaivreBourg",
      "country": "FR"
    },
    "email": "meunieranais@valentin.fr",
    "phone_number": "0507631547",
    "vat_number": "FR78 703 298 629",
    "gln": "2664616843475",
    "siren": "595 787 632"
  },
  {
    "client_name": "Marques",
    "contact_name": "Vincent Riou Le Pages",
    "address": {
      "line1": "46, chemin Alex Rolland",
      "line2": "",
      "postal_code": "73394",
      "city": "Regnierdan",
      "country": "FR"
    },
    "email": "mariecharles@reynaud.net",
    "phone_number": "+33 1 24 93 09 72",
    "vat_number": "FR36 570 257 897",
    "gln": "4769272256602",
    "siren": "105 135 444"
  },
  {
    "client_name": "Brun",
    "contact_name": "Robert Le Toussaint",
    "address": {
      "line1": "55, boulevard Valette",
      "line2": "",
      "postal_code": "46968",
      "city": "Imbert-sur-Seguin",
      "country": "FR"
    },
    "email": "adelaide01@leduc.net",
    "phone_number": "+33 (0)6 31 28 47 60",
    "vat_number": "FR74 413 376 916",
    "gln": "9235792933576",
    "siren": "759 313 677"
  },
  {
    "client_name": "Foucher",
    "contact_name": "Émilie Bodin",
    "address": {
      "line1": "858, chemin Salmon",
      "line2": "",
      "postal_code": "74374",
      "city": "Sainte Tristan",
      "country": "FR"
    },
    "email": "hortense24@lebreton.com",
    "phone_number": "+33 1 34 32 17 29",
    "vat_number": "FR12 511 872 256",
    "gln": "9039532241095",
    "siren": "503 349 461"
  },
  {
    "client_name": "Dupuy",
    "contact_name": "Stéphane Andre-Launay",
    "address": {
      "line1": "735, boulevard Cohen",
      "line2": "",
      "postal_code": "40226",
      "city": "Benardboeuf",
      "country": "FR"
    },
    "email": "dos-santosalfred@chauvet.com",
    "phone_number": "+33 (0)2 75 68 00 69",
    "vat_number": "FR94 636 947 734",
    "gln": "9784676985519",
    "siren": "482 982 947"
  },
  {
    "client_name": "Marion",
    "contact_name": "Frédéric Jourdan",
    "address": {
      "line1": "81, chemin de Roche",
      "line2": "",
      "postal_code": "19443",
      "city": "Saint Maggie",
      "country": "FR"
    },
    "email": "aurorebonnet@pottier.com",
    "phone_number": "+33 (0)8 05 68 68 58",
    "vat_number": "FR24 664 535 693",
    "gln": "4944880523494",
    "siren": "377 600 632"
  },
  {
    "client_name": "Lenoir",
    "contact_name": "Anouk Maillot",
    "address": {
      "line1": "boulevard de Maillot",
      "line2": "",
      "postal_code": "51647",
      "city": "Potier",
      "country": "FR"
    },
    "email": "vherve@masson.fr",
    "phone_number": "0128683198",
    "vat_number": "FR43 887 675 830",
    "gln": "4376649314690",
    "siren": "575 500 238"
  },
  {
    "client_name": "Jacob",
    "contact_name": "Marcel-Thierry Leroy",
    "address": {
      "line1": "8, avenue Claire Tanguy",
      "line2": "",
      "postal_code": "30066",
      "city": "Fouquet",
      "country": "FR"
    },
    "email": "leleugabrielle@lopez.fr",
    "phone_number": "+33 (0)5 94 02 14 34",
    "vat_number": "FR93 798 437 452",
    "gln": "0645649870975",
    "siren": "565 681 705"
  },
  {
    "client_name": "De Sousa et Fils",
    "contact_name": "Charles Laroche du Valette",
    "address": {
      "line1": "886, rue de Gay",
      "line2": "",
      "postal_code": "55465",
      "city": "Pichon-les-Bains",
      "country": "FR"
    },
    "email": "noemiroy@maillot.org",
    "phone_number": "0335044879",
    "vat_number": "FR28 796 443 256",
    "gln": "8708118325030",
    "siren": "928 810 614"
  },
  {
    "client_name": "Albert Bonneau S.A.R.L.",
    "contact_name": "Roger Petit",
    "address": {
      "line1": "4, rue Jacob",
      "line2": "",
      "postal_code": "07350",
      "city": "Gauthier",
      "country": "FR"
    },
    "email": "bouvetlaurence@louis.fr",
    "phone_number": "02 73 78 49 21",
    "vat_number": "FR10 262 186 847",
    "gln": "4901679736299",
    "siren": "397 196 818"
  },
  {
    "client_name": "Collet Rodrigues S.A.",
    "contact_name": "Luc Lesage",
    "address": {
      "line1": "588, chemin Lucy Mendès",
      "line2": "",
      "postal_code": "90601",
      "city": "Teixeira-sur-Mer",
      "country": "FR"
    },
    "email": "nathpicard@ruiz.com",
    "phone_number": "+33 2 62 49 59 03",
    "vat_number": "FR26 263 183 291",
    "gln": "3829671256236",
    "siren": "588 477 912"
  },
  {
    "client_name": "Barbier",
    "contact_name": "Louise Munoz",
    "address": {
      "line1": "56, rue Georges Guichard",
      "line2": "",
      "postal_code": "14478",
      "city": "Schneider",
      "country": "FR"
    },
    "email": "rlegrand@raymond.fr",
    "phone_number": "+33 (0)1 39 57 97 16",
    "vat_number": "FR82 746 914 278",
    "gln": "7516694917232",
    "siren": "370 569 156"
  },
  {
    "client_name": "Pasquier Georges S.A.S.",
    "contact_name": "Daniel Costa",
    "address": {
      "line1": "948, rue Colin",
      "line2": "",
      "postal_code": "93815",
      "city": "JacquotVille",
      "country": "FR"
    },
    "email": "agnesmartinez@tanguy.org",
    "phone_number": "+33 1 80 54 41 20",
    "vat_number": "FR20 149 285 397",
    "gln": "0129269371956",
    "siren": "907 308 915"
  },
  {
    "client_name": "Nguyen Bodin S.A.R.L.",
    "contact_name": "Jean Traore",
    "address": {
      "line1": "avenue Lucie Rémy",
      "line2": "",
      "postal_code": "84659",
      "city": "Hervé-sur-Mer",
      "country": "FR"
    },
    "email": "theophile00@ledoux.org",
    "phone_number": "01 38 02 08 78",
    "vat_number": "FR73 975 781 312",
    "gln": "3621525942025",
    "siren": "225 216 818"
  },
  {
    "client_name": "Klein",
    "contact_name": "Joséphine Diaz",
    "address": {
      "line1": "6, chemin Rossi",
      "line2": "",
      "postal_code": "86026",
      "city": "Lefebvredan",
      "country": "FR"
    },
    "email": "lefevrevictor@moulin.fr",
    "phone_number": "06 13 58 36 87",
    "vat_number": "FR39 954 852 128",
    "gln": "9406511998828",
    "siren": "403 215 317"
  },
  {
    "client_name": "Colas SA",
    "contact_name": "Gabrielle-Martine Lebon",
    "address": {
      "line1": "avenue de Pelletier",
      "line2": "",
      "postal_code": "17369",
      "city": "Chrétien",
      "country": "FR"
    },
    "email": "helene98@martins.org",
    "phone_number": "04 22 41 95 44",
    "vat_number": "FR84 278 883 681",
    "gln": "2710912322395",
    "siren": "962 381 688"
  },
  {
    "client_name": "Techer",
    "contact_name": "Julie Roche",
    "address": {
      "line1": "91, avenue de Mendès",
      "line2": "",
      "postal_code": "55914",
      "city": "Garcia",
      "country": "FR"
    },
    "email": "bessonnoemi@le.net",
    "phone_number": "03 13 84 75 37",
    "vat_number": "FR94 839 362 923",
    "gln": "9311155003268",
    "siren": "388 904 306"
  },
  {
    "client_name": "Maillard S.A.R.L.",
    "contact_name": "Stéphane Le Rodriguez",
    "address": {
      "line1": "20, chemin Michaud",
      "line2": "",
      "postal_code": "69775",
      "city": "Saint Grégoireboeuf",
      "country": "FR"
    },
    "email": "andreefaivre@bourgeois.net",
    "phone_number": "+33 (0)3 16 15 03 13",
    "vat_number": "FR63 627 326 607",
    "gln": "5897064070514",
    "siren": "652 402 810"
  },
  {
    "client_name": "Thierry SARL",
    "contact_name": "Alfred Petitjean",
    "address": {
      "line1": "88, avenue Camille Vallée",
      "line2": "",
      "postal_code": "40292",
      "city": "Pires-sur-Germain",
      "country": "FR"
    },
    "email": "mauriceroussel@germain.com",
    "phone_number": "+33 (0)4 53 90 46 39",
    "vat_number": "FR92 137 432 909",
    "gln": "0835513306918",
    "siren": "549 273 859"
  },
  {
    "client_name": "Collet Lemoine S.A.R.L.",
    "contact_name": "Geneviève Jacob-Colas",
    "address": {
      "line1": "75, rue de Delannoy",
      "line2": "",
      "postal_code": "53648",
      "city": "Courtois-sur-Mer",
      "country": "FR"
    },
    "email": "allardsimone@maillard.com",
    "phone_number": "+33 2 19 03 20 15",
    "vat_number": "FR76 249 567 890",
    "gln": "1086166506913",
    "siren": "461 994 902"
  }
]

// API handler to expose the clients list
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const siren = searchParams.get('siren');
    const clientName = searchParams.get('client_name');

    // Here you would typically query your database
    // For now, we'll return a mock response

    // Apply filters if provided
    let filteredClients = mockClients;
    
    if (siren) {
      filteredClients = filteredClients.filter(client => 
        client.siren.toLowerCase().includes(siren.toLowerCase())
      );
    }
    
    if (clientName) {
      filteredClients = filteredClients.filter(client => 
        client.client_name.toLowerCase().includes(clientName.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredClients
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch clients' 
      },
      { status: 500 }
    );
  }
}
