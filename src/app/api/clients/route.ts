import { NextResponse } from "next/server";

// Define the clients list
const clients = [
  { id: 1, name: "Apple", clientSiret: "12345678900001", clientName: "Apple Inc.", phone: "1-800-MY-APPLE", address: "123 Apple Street, Cupertino, CA 95014, USA" },
  { id: 2, name: "Microsoft", clientSiret: "12345678900002", clientName: "Microsoft Corporation", phone: "1-800-642-7676", address: "456 Microsoft Way, Redmond, WA 98052, USA" },
  { id: 3, name: "Cegid", clientSiret: "12345678900003", clientName: "Cegid Group", phone: "+33 4 26 29 50 20", address: "789 Cegid Avenue, Lyon, France" },
  { id: 4, name: "Google", clientSiret: "12345678900004", clientName: "Google LLC", phone: "1-650-253-0000", address: "101 Google Lane, Mountain View, CA 94043, USA" },
  { id: 5, name: "Amazon", clientSiret: "12345678900005", clientName: "Amazon.com, Inc.", phone: "1-888-280-4331", address: "202 Amazon Blvd, Seattle, WA 98109, USA" },
  { id: 6, name: "Facebook", clientSiret: "12345678900006", clientName: "Meta Platforms, Inc.", phone: "1-650-543-4800", address: "303 Facebook Drive, Menlo Park, CA 94025, USA" },
  { id: 7, name: "Tesla", clientSiret: "12345678900007", clientName: "Tesla, Inc.", phone: "1-650-681-5000", address: "404 Tesla Road, Palo Alto, CA 94304, USA" },
  { id: 8, name: "Netflix", clientSiret: "12345678900008", clientName: "Netflix, Inc.", phone: "1-408-540-3700", address: "505 Netflix Street, Los Gatos, CA 95032, USA" },
  { id: 9, name: "Adobe", clientSiret: "12345678900009", clientName: "Adobe Inc.", phone: "1-408-536-6000", address: "606 Adobe Avenue, San Jose, CA 95110, USA" },
  { id: 10, name: "Intel", clientSiret: "12345678900010", clientName: "Intel Corporation", phone: "1-408-765-8080", address: "707 Intel Parkway, Santa Clara, CA 95054, USA" },
  { id: 11, name: "IBM", clientSiret: "12345678900011", clientName: "International Business Machines Corporation", phone: "1-800-426-4968", address: "808 IBM Road, Armonk, NY 10504, USA" },
  { id: 12, name: "Oracle", clientSiret: "12345678900012", clientName: "Oracle Corporation", phone: "1-800-633-0738", address: "909 Oracle Parkway, Redwood Shores, CA 94065, USA" },
  { id: 13, name: "Salesforce", clientSiret: "12345678900013", clientName: "Salesforce, Inc.", phone: "1-800-667-6389", address: "101 Salesforce Tower, San Francisco, CA 94105, USA" },
  { id: 14, name: "SAP", clientSiret: "12345678900014", clientName: "SAP SE", phone: "+49 6227 747474", address: "102 SAP Street, Walldorf, Germany" },
  { id: 15, name: "Spotify", clientSiret: "12345678900015", clientName: "Spotify AB", phone: "+46 8 578 000 00", address: "103 Spotify Lane, Stockholm, Sweden" },
  { id: 16, name: "Uber", clientSiret: "12345678900016", clientName: "Uber Technologies, Inc.", phone: "1-800-593-7069", address: "104 Uber Avenue, San Francisco, CA 94103, USA" },
  { id: 17, name: "Airbnb", clientSiret: "12345678900017", clientName: "Airbnb, Inc.", phone: "1-855-424-7262", address: "105 Airbnb Road, San Francisco, CA 94103, USA" },
  { id: 18, name: "Slack", clientSiret: "12345678900018", clientName: "Slack Technologies, LLC", phone: "1-888-746-8225", address: "106 Slack Street, San Francisco, CA 94105, USA" },
  { id: 19, name: "Zoom", clientSiret: "12345678900019", clientName: "Zoom Video Communications, Inc.", phone: "1-888-799-9666", address: "107 Zoom Lane, San Jose, CA 95113, USA" },
  { id: 20, name: "Dropbox", clientSiret: "12345678900020", clientName: "Dropbox, Inc.", phone: "1-888-414-8124", address: "108 Dropbox Avenue, San Francisco, CA 94107, USA" },
  { id: 21, name: "Twitter", clientSiret: "12345678900021", clientName: "Twitter, Inc.", phone: "1-415-222-9670", address: "109 Twitter Road, San Francisco, CA 94103, USA" },
  { id: 22, name: "LinkedIn", clientSiret: "12345678900022", clientName: "LinkedIn Corporation", phone: "1-650-687-3600", address: "110 LinkedIn Lane, Sunnyvale, CA 94085, USA" },
  { id: 23, name: "eBay", clientSiret: "12345678900023", clientName: "eBay Inc.", phone: "1-866-540-3229", address: "111 eBay Street, San Jose, CA 95125, USA" },
  { id: 24, name: "PayPal", clientSiret: "12345678900024", clientName: "PayPal Holdings, Inc.", phone: "1-888-221-1161", address: "112 PayPal Avenue, San Jose, CA 95131, USA" },
  { id: 25, name: "Square", clientSiret: "12345678900025", clientName: "Block, Inc.", phone: "1-855-700-6000", address: "113 Square Road, San Francisco, CA 94103, USA" },
  { id: 26, name: "Shopify", clientSiret: "12345678900026", clientName: "Shopify Inc.", phone: "1-888-746-7439", address: "114 Shopify Lane, Ottawa, Canada" },
  { id: 27, name: "Stripe", clientSiret: "12345678900027", clientName: "Stripe, Inc.", phone: "1-888-963-8955", address: "115 Stripe Avenue, San Francisco, CA 94103, USA" },
  { id: 28, name: "GitHub", clientSiret: "12345678900028", clientName: "GitHub, Inc.", phone: "1-877-448-4824", address: "116 GitHub Road, San Francisco, CA 94107, USA" },
  { id: 29, name: "Bitbucket", clientSiret: "12345678900029", clientName: "Atlassian Bitbucket", phone: "1-800-123-4567", address: "117 Bitbucket Lane, Sydney, Australia" },
  { id: 30, name: "Atlassian", clientSiret: "12345678900030", clientName: "Atlassian Corporation", phone: "1-800-123-4568", address: "118 Atlassian Avenue, Sydney, Australia" },
];

// API handler to expose the clients list
export async function GET() {
  return NextResponse.json(clients);
}
