// Loan agencies that provide financing for African students - NO COSIGNER REQUIRED

export const loanAgencies = [
  {
    id: 'prodigy',
    name: 'Prodigy Finance',
    logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop',
    description: 'Specializes in loans for international students pursuing graduate degrees at top universities worldwide. No cosigner or collateral required.',
    website: 'https://prodigyfinance.com',
    eligibility: ['International students', 'Top MBA programs', 'No cosigner needed', 'No collateral'],
    loanAmount: '$15,000 - $100,000+',
    interestRate: 'Variable, typically 7-12%',
    repayment: 'Starts 6 months after graduation',
    africaFriendly: true,
    noCosigner: true,
    highlights: ['No cosigner required', 'No collateral needed', 'Covers tuition + living expenses', 'Community-based funding'],
    countries: ['All African countries eligible']
  },
  {
    id: 'mpower',
    name: 'MPOWER Financing',
    logo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=100&h=100&fit=crop',
    description: 'Provides loans to international students studying in the US and Canada. No cosigner, no collateral, no credit history required.',
    website: 'https://mpowerfinancing.com',
    eligibility: ['International students', 'US/Canada schools', 'No cosigner required', 'No US credit history needed'],
    loanAmount: 'Up to $100,000',
    interestRate: 'Fixed rates from 13.23%',
    repayment: 'Starts after graduation',
    africaFriendly: true,
    noCosigner: true,
    highlights: ['No cosigner required', 'Fixed interest rates', 'No prepayment penalty', 'Career support included'],
    countries: ['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Ethiopia', 'and 200+ countries']
  },
  {
    id: '8b',
    name: '8B Education Investments',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop',
    description: 'Income Share Agreement (ISA) provider for international students. No upfront payments, no cosigner - you pay a percentage of income after graduation.',
    website: 'https://8b.is',
    eligibility: ['International students', 'Top MBA/graduate programs', 'No cosigner needed', 'No upfront cost'],
    loanAmount: 'Up to $150,000',
    interestRate: 'ISA: % of future income',
    repayment: 'Starts when earning above threshold',
    africaFriendly: true,
    noCosigner: true,
    highlights: ['No cosigner required', 'Income Share Agreement', 'No upfront payments', 'Pay only when employed'],
    countries: ['All African countries eligible']
  }
];

export default loanAgencies;
