import { NextResponse } from 'next/server';

export async function GET() {
  const xmlString = `<!--
===========================================
Annotated XML Invoice Template for AI Agent
Based on example: F20220028 (LE FOURNISSEUR -> LE CLIENT)
===========================================
-->
<?xml version="1.0" encoding="UTF-8"?>
<rsm:CrossIndustryInvoice xmlns:qdt="urn:un:unece:uncefact:data:standard:QualifiedDataType:100"
xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100"
xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100"
xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

    <rsm:ExchangedDocumentContext>
        <ram:BusinessProcessSpecifiedDocumentContextParameter>
            <ram:ID><!-- Mandatory: Business Process ID. Example: "A1" --></ram:ID>
        </ram:BusinessProcessSpecifiedDocumentContextParameter>
        <ram:GuidelineSpecifiedDocumentContextParameter>
            <ram:ID><!-- Mandatory: Guideline ID. Example: "urn:cen.eu:en16931:2017" --></ram:ID>
        </ram:GuidelineSpecifiedDocumentContextParameter>
    </rsm:ExchangedDocumentContext>

    <rsm:ExchangedDocument>
        <ram:ID><!-- Mandatory: Invoice Number. Example: "F20220028" --></ram:ID>
        <ram:TypeCode><!-- Mandatory: Type Code for Invoice. Usually "381" for standard invoice --></ram:TypeCode>
        <ram:IssueDateTime>
            <udt:DateTimeString format="102"><!-- Mandatory: Issue Date in format YYYYMMDD. Example: "20220131" --></udt:DateTimeString>
        </ram:IssueDateTime>

        <!-- Optional: Legal mentions and notes on the invoice -->
        <ram:IncludedNote>
            <ram:Content><!-- Optional: Note content, like capital information --></ram:Content>
            <ram:SubjectCode><!-- Optional: Note subject code (e.g., REG, ABL, AAI) --></ram:SubjectCode>
        </ram:IncludedNote>
    </rsm:ExchangedDocument>

    <!-- Supply Chain Trade Transaction: details about products and services -->
    <rsm:SupplyChainTradeTransaction>
        <ram:IncludedSupplyChainTradeLineItem>
            <ram:AssociatedDocumentLineDocument>
                <ram:LineID><!-- Mandatory: Line item ID. Example: "1", "2", etc. --></ram:LineID>
            </ram:AssociatedDocumentLineDocument>

            <ram:SpecifiedTradeProduct>
                <ram:GlobalID schemeID="0160"><!-- Optional: Product Global ID (EAN etc.). Example: "598785412598745" --></ram:GlobalID>
                <ram:Name><!-- Mandatory: Product/Service name. Example: "PRESTATION SUPPORT" --></ram:Name>
                <ram:Description><!-- Optional: Short description. Example: "Description" --></ram:Description>
            </ram:SpecifiedTradeProduct>

            <ram:SpecifiedLineTradeAgreement>
                <ram:GrossPriceProductTradePrice>
                    <ram:ChargeAmount><!-- Mandatory: Unit price before discount. Example: "60.00" --></ram:ChargeAmount>
                    <ram:BasisQuantity unitCode="C62"><!-- Mandatory: Quantity basis. Example: "1.00" --></ram:BasisQuantity>
                </ram:GrossPriceProductTradePrice>
                <ram:NetPriceProductTradePrice>
                    <ram:ChargeAmount><!-- Mandatory: Final price per unit after any discount. Example: "60.00" --></ram:ChargeAmount>
                    <ram:BasisQuantity unitCode="C62"><!-- Mandatory: Quantity basis. Example: "1.00" --></ram:BasisQuantity>
                </ram:NetPriceProductTradePrice>
            </ram:SpecifiedLineTradeAgreement>

            <ram:SpecifiedLineTradeDelivery>
                <ram:BilledQuantity unitCode="C62"><!-- Mandatory: Quantity billed. Example: "1.00" --></ram:BilledQuantity>
            </ram:SpecifiedLineTradeDelivery>

            <ram:SpecifiedLineTradeSettlement>
                <ram:ApplicableTradeTax>
                    <ram:TypeCode><!-- Mandatory: Tax Type. Example: "VAT" --></ram:TypeCode>
                    <ram:CategoryCode><!-- Mandatory: Tax Category. Example: "S" for standard rate --></ram:CategoryCode>
                    <ram:RateApplicablePercent><!-- Mandatory: VAT Rate. Example: "10.00" --></ram:RateApplicablePercent>
                </ram:ApplicableTradeTax>
                <ram:BillingSpecifiedPeriod>
                    <ram:StartDateTime>
                        <udt:DateTimeString format="102"><!-- Optional: Service period start (YYYYMMDD) --></udt:DateTimeString>
                    </ram:StartDateTime>
                    <ram:EndDateTime>
                        <udt:DateTimeString format="102"><!-- Optional: Service period end (YYYYMMDD) --></udt:DateTimeString>
                    </ram:EndDateTime>
                </ram:BillingSpecifiedPeriod>
                <ram:SpecifiedTradeSettlementLineMonetarySummation>
                    <ram:LineTotalAmount><!-- Mandatory: Line total amount without VAT. Example: "60.00" --></ram:LineTotalAmount>
                </ram:SpecifiedTradeSettlementLineMonetarySummation>
            </ram:SpecifiedLineTradeSettlement>
        </ram:IncludedSupplyChainTradeLineItem>

        <!-- More <ram:IncludedSupplyChainTradeLineItem> as needed per line -->

    </rsm:SupplyChainTradeTransaction>

</rsm:CrossIndustryInvoice>
`;

  return NextResponse.json({
    schema: xmlString
  });
}
