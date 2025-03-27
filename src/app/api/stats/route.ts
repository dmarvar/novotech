import { NextResponse } from 'next/server';

interface PaymentAnalytics {
  client: string;
  totalInvoices: number;
  totalAmount: number;
  averageDaysToPay: number;
  medianDaysToPay: number;
  standardDeviation: number;
  paymentDistribution: {
    onTime: number;      // Within 30 days
    late: number;        // 31-60 days
    veryLate: number;    // >60 days
    early: number;       // <30 days
  };
  riskScore: number;     // 1-5, where 1 is lowest risk
  lastPaymentDate: string;
  paymentTrend: 'improving' | 'stable' | 'worsening';
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

function calculateMedian(numbers: number[]): number {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

function calculateStandardDeviation(numbers: number[]): number {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const squareDiffs = numbers.map(num => Math.pow(num - mean, 2));
  const avgSquareDiff = squareDiffs.reduce((sum, num) => sum + num, 0) / numbers.length;
  return Math.sqrt(avgSquareDiff);
}

function calculateRiskScore(analytics: Omit<PaymentAnalytics, 'riskScore'>): number {
  let score = 3; // Start with neutral score

  // Adjust based on average days to pay
  if (analytics.averageDaysToPay <= 25) score += 1;
  else if (analytics.averageDaysToPay >= 45) score -= 1;

  // Adjust based on payment distribution
  if (analytics.paymentDistribution.onTime >= 70) score += 1;
  else if (analytics.paymentDistribution.onTime <= 40) score -= 1;

  // Adjust based on standard deviation
  if (analytics.standardDeviation <= 10) score += 1;
  else if (analytics.standardDeviation >= 20) score -= 1;

  // Adjust based on payment trend
  if (analytics.paymentTrend === 'improving') score += 1;
  else if (analytics.paymentTrend === 'worsening') score -= 1;

  // Ensure score stays within 1-5 range
  return Math.max(1, Math.min(5, score));
}

function generatePaymentAnalytics(): PaymentAnalytics[] {
  const now = new Date();
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, 1);

  return clients.map(client => {
    // Generate random number of invoices (between 10 and 30)
    const numberOfInvoices = Math.floor(Math.random() * 21) + 10;
    
    // Generate payment days for each invoice
    const paymentDays: number[] = [];
    let totalAmount = 0;
    
    for (let i = 0; i < numberOfInvoices; i++) {
      // Generate random days to pay (between 0 and 90 days)
      const daysToPay = Math.floor(Math.random() * 91);
      paymentDays.push(daysToPay);
      
      // Generate random amount between 1000 and 50000
      totalAmount += Math.floor(Math.random() * 49000) + 1000;
    }
    
    // Calculate statistics
    const averageDaysToPay = paymentDays.reduce((sum, days) => sum + days, 0) / numberOfInvoices;
    const medianDaysToPay = calculateMedian(paymentDays);
    const standardDeviation = calculateStandardDeviation(paymentDays);
    
    // Calculate payment distribution
    const distribution = {
      early: paymentDays.filter(days => days < 30).length,
      onTime: paymentDays.filter(days => days === 30).length,
      late: paymentDays.filter(days => days > 30 && days <= 60).length,
      veryLate: paymentDays.filter(days => days > 60).length
    };
    
    // Convert to percentages
    const paymentDistribution = {
      early: (distribution.early / numberOfInvoices) * 100,
      onTime: (distribution.onTime / numberOfInvoices) * 100,
      late: (distribution.late / numberOfInvoices) * 100,
      veryLate: (distribution.veryLate / numberOfInvoices) * 100
    };
    
    // Generate random last payment date
    const lastPaymentDate = new Date(threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime())).toISOString();
    
    // Randomly assign payment trend
    const paymentTrends = ['improving', 'stable', 'worsening'] as const;
    const paymentTrend = paymentTrends[Math.floor(Math.random() * paymentTrends.length)];
    
    const analytics: Omit<PaymentAnalytics, 'riskScore'> = {
      client,
      totalInvoices: numberOfInvoices,
      totalAmount,
      averageDaysToPay,
      medianDaysToPay,
      standardDeviation,
      paymentDistribution,
      lastPaymentDate,
      paymentTrend
    };

    return {
      ...analytics,
      riskScore: calculateRiskScore(analytics)
    };
  });
}

export async function GET() {
  try {
    const analytics = generatePaymentAnalytics();
    return NextResponse.json(analytics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate payment analytics' },
      { status: 500 }
    );
  }
} 