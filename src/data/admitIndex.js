// Admit Index Data Types and Storage (Firebase/Firestore)
import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';

// Collection name
const COLLECTION_NAME = 'admitEntries';

// Enums
export const AGE_BANDS = ['22-25', '26-29', '30-33', '34+'];
export const YEARS_EXPERIENCE = ['0-3', '4-6', '7-10', '10+'];
export const SCORE_TYPES = ['GMAT', 'GRE'];
export const GMAT_SCORE_BANDS = ['<650', '650-690', '700-730', '740+'];
export const GRE_SCORE_BANDS = ['<315', '315-324', '325-332', '333+'];
export const SCORE_BANDS = GMAT_SCORE_BANDS;
export const SCHOLARSHIP_BANDS = ['none', 'partial', 'full'];
export const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
export const APPLICATION_ROUNDS = ['Early Action', 'Round 1', 'Round 2', 'Round 3'];

// All African countries
export const COUNTRIES = [
  'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi',
  'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros',
  'Democratic Republic of Congo', 'Republic of Congo', 'Djibouti', 'Egypt',
  'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia',
  'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho',
  'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
  'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda',
  'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia',
  'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia',
  'Uganda', 'Zambia', 'Zimbabwe'
];

// Common industries (Pre-MBA)
export const INDUSTRIES = [
  'Consulting', 'Investment Banking', 'Private Equity', 'Venture Capital',
  'Technology', 'FMCG/Consumer Goods', 'Healthcare', 'Energy/Oil & Gas',
  'Telecommunications', 'Manufacturing', 'Financial Services', 'Government/Public Sector',
  'Non-Profit/NGO', 'Real Estate', 'Media/Entertainment', 'Agriculture', 'Other'
];

// Post-MBA Career Industries
export const POST_MBA_INDUSTRIES = [
  'Consulting', 'Investment Banking', 'Private Equity', 'Venture Capital',
  'Technology/Product Management', 'Technology/Software Engineering', 'Healthcare',
  'FMCG/Brand Management', 'Corporate Strategy', 'Entrepreneurship',
  'Social Impact/Non-Profit', 'Real Estate', 'Energy', 'Other'
];

// Top 30 MBA Schools
export const MBA_SCHOOLS = [
  'Harvard Business School', 'Stanford GSB', 'Wharton (UPenn)', 'MIT Sloan',
  'Booth (UChicago)', 'Kellogg (Northwestern)', 'Columbia Business School',
  'Haas (UC Berkeley)', 'Tuck (Dartmouth)', 'Yale SOM', 'Ross (UMich)',
  'Fuqua (Duke)', 'Darden (UVA)', 'Anderson (UCLA)', 'NYU Stern',
  'Johnson (Cornell)', 'Tepper (CMU)', 'McCombs (UT Austin)', 'Kenan-Flagler (UNC)',
  'Marshall (USC)', 'Foster (UW)', 'Goizueta (Emory)', 'McDonough (Georgetown)',
  'Jones (Rice)', 'Olin (WUSTL)', 'Owen (Vanderbilt)', 'Kelley (Indiana)',
  'Scheller (Georgia Tech)', 'Mendoza (Notre Dame)', 'Mays (Texas A&M)'
];

// Get all entries (for admin)
export const getAllEntries = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('created_at', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting all entries:', error);
    return [];
  }
};

// Get approved entries only (for public view)
export const getApprovedEntries = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', 'approved'),
      orderBy('created_at', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting approved entries:', error);
    return [];
  }
};

// Get pending entries only
export const getPendingEntries = async () => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('status', '==', 'pending'),
      orderBy('created_at', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting pending entries:', error);
    return [];
  }
};

// Add new entry
export const addEntry = async (entry) => {
  try {
    const newEntry = {
      ...entry,
      status: 'pending',
      created_at: serverTimestamp()
    };
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newEntry);
    return { id: docRef.id, ...newEntry };
  } catch (error) {
    console.error('Error adding entry:', error);
    throw error;
  }
};

// Update entry status (approve/reject)
export const updateEntryStatus = async (id, status) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, { status });
    return { id, status };
  } catch (error) {
    console.error('Error updating entry status:', error);
    throw error;
  }
};

// Update entry (for admin edits)
export const updateEntry = async (id, updates) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, updates);
    return { id, ...updates };
  } catch (error) {
    console.error('Error updating entry:', error);
    throw error;
  }
};

// Delete entry
export const deleteEntry = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return { id, deleted: true };
  } catch (error) {
    console.error('Error deleting entry:', error);
    throw error;
  }
};

// Subscribe to approved entries (real-time)
export const subscribeToApprovedEntries = (callback) => {
  const colRef = collection(db, COLLECTION_NAME);

  return onSnapshot(colRef, (snapshot) => {
    const allEntries = snapshot.docs.map(d => ({
      id: d.id,
      ...d.data()
    }));
    const approved = allEntries
      .filter(entry => entry.status === "approved")
      .sort((a, b) => {
        const dateA = a.created_at?.toDate?.() || new Date(0);
        const dateB = b.created_at?.toDate?.() || new Date(0);
        return dateB - dateA;
      });
    callback(approved);
  }, (error) => {
    console.error("Error subscribing to approved entries:", error);
    callback([]);
  });
};

// Subscribe to all entries (for admin, real-time)
export const subscribeToAllEntries = (callback) => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('created_at', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const entries = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(entries);
  }, (error) => {
    console.error('Error subscribing to all entries:', error);
    callback([]);
  });
};

// Filter entries (client-side)
export const filterEntries = (entries, filters) => {
  return entries.filter(entry => {
    // Country filter (multi-select)
    if (filters.countries && filters.countries.length > 0) {
      if (!filters.countries.includes(entry.country)) return false;
    }

    // Age band filter
    if (filters.age_band && filters.age_band !== 'all') {
      if (entry.age_band !== filters.age_band) return false;
    }

    // Years experience filter
    if (filters.years_experience && filters.years_experience !== 'all') {
      if (entry.years_experience !== filters.years_experience) return false;
    }

    // Industry filter (multi-select)
    if (filters.industries && filters.industries.length > 0) {
      if (!filters.industries.includes(entry.industry)) return false;
    }

    // Score band filter
    if (filters.score_band && filters.score_band !== 'all') {
      if (entry.score_band !== filters.score_band) return false;
    }

    // Scholarship band filter
    if (filters.scholarship_band && filters.scholarship_band !== 'all') {
      if (entry.scholarship_band !== filters.scholarship_band) return false;
    }

    // Cycle year filter
    if (filters.cycle_year && filters.cycle_year !== 'all') {
      if (entry.cycle_year !== parseInt(filters.cycle_year)) return false;
    }

    return true;
  });
};

// Validation helpers
export const validateEntry = (entry) => {
  const errors = {};

  // Email validation
  if (!entry.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!entry.gender) errors.gender = 'Gender is required';
  if (!entry.application_round) errors.application_round = 'Application round is required';
  if (!entry.country) errors.country = 'Country is required';
  if (!entry.age_band) errors.age_band = 'Age band is required';
  if (!entry.undergrad_major?.trim()) errors.undergrad_major = 'Undergrad major is required';
  if (!entry.industry) errors.industry = 'Industry is required';
  if (!entry.post_mba_industry) errors.post_mba_industry = 'Post-MBA industry is required';
  if (!entry.years_experience) errors.years_experience = 'Years of experience is required';

  // Score validation - handle waived scores
  if (!entry.score_waived) {
    if (!entry.score_type) errors.score_type = 'Score type is required';
    if (!entry.score_band) errors.score_band = 'Score band is required';
  }

  if (!entry.scholarship_band) errors.scholarship_band = 'Scholarship band is required';
  if (!entry.cycle_year) errors.cycle_year = 'MBA Class year is required';

  // Schools admitted validation (1-4 items)
  if (!entry.schools_admitted || entry.schools_admitted.length === 0) {
    errors.schools_admitted = 'At least one admitted school is required';
  } else if (entry.schools_admitted.length > 4) {
    errors.schools_admitted = 'Maximum 4 schools allowed';
  }

  // Tips/insights validation (optional, max 200 words if provided)
  if (entry.differentiator_text?.trim()) {
    const wordCount = entry.differentiator_text.trim().split(/\s+/).length;
    if (wordCount > 200) {
      errors.differentiator_text = `Maximum 200 words allowed (currently ${wordCount})`;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Word count helper
export const getWordCount = (text) => {
  if (!text?.trim()) return 0;
  return text.trim().split(/\s+/).length;
};

// Get scholarship label
export const getScholarshipLabel = (band) => {
  switch (band) {
    case 'none': return 'No Scholarship';
    case 'partial': return 'Partial Scholarship';
    case 'full': return 'Full Scholarship';
    default: return band;
  }
};

// Generate dynamic anonymous name based on profile data
export const generateDisplayName = (entry) => {
  if (entry.display_name && entry.display_name.trim() && entry.display_name !== 'Anonymous') {
    return entry.display_name;
  }

  const parts = [];

  // Add country demonym (e.g., Nigerian, Kenyan)
  if (entry.country) {
    const demonyms = {
      'Nigeria': 'Nigerian', 'Kenya': 'Kenyan', 'Ghana': 'Ghanaian',
      'South Africa': 'South African', 'Ethiopia': 'Ethiopian', 'Egypt': 'Egyptian',
      'Tanzania': 'Tanzanian', 'Uganda': 'Ugandan', 'Rwanda': 'Rwandan',
      'Cameroon': 'Cameroonian', 'Senegal': 'Senegalese', 'Ivory Coast': 'Ivorian',
      'Morocco': 'Moroccan', 'Algeria': 'Algerian', 'Tunisia': 'Tunisian',
      'Zimbabwe': 'Zimbabwean', 'Zambia': 'Zambian', 'Botswana': 'Motswana',
      'Namibia': 'Namibian', 'Mozambique': 'Mozambican', 'Angola': 'Angolan',
      'Democratic Republic of Congo': 'Congolese', 'Republic of Congo': 'Congolese',
      'Mali': 'Malian', 'Burkina Faso': 'Burkinabè', 'Niger': 'Nigerien',
      'Benin': 'Beninese', 'Togo': 'Togolese', 'Liberia': 'Liberian',
      'Sierra Leone': 'Sierra Leonean', 'Guinea': 'Guinean', 'Gambia': 'Gambian',
      'Mauritius': 'Mauritian', 'Madagascar': 'Malagasy', 'Malawi': 'Malawian',
      'Eswatini': 'Swazi', 'Lesotho': 'Mosotho', 'Gabon': 'Gabonese',
      'Equatorial Guinea': 'Equatoguinean', 'Chad': 'Chadian', 'Sudan': 'Sudanese',
      'South Sudan': 'South Sudanese', 'Eritrea': 'Eritrean', 'Djibouti': 'Djiboutian',
      'Somalia': 'Somali', 'Seychelles': 'Seychellois', 'Cape Verde': 'Cape Verdean',
      'Comoros': 'Comorian', 'Mauritania': 'Mauritanian', 'Libya': 'Libyan',
      'Burundi': 'Burundian', 'Central African Republic': 'Central African',
      'Sao Tome and Principe': 'São Toméan', 'Guinea-Bissau': 'Bissau-Guinean'
    };
    parts.push(demonyms[entry.country] || entry.country);
  }

  // Add gender if provided
  if (entry.gender && entry.gender !== 'Prefer not to say') {
    parts.push(entry.gender);
  }

  // Shorten industry names
  const shortenIndustry = (industry) => {
    const shortcuts = {
      'Investment Banking': 'IB',
      'Private Equity': 'PE',
      'Venture Capital': 'VC',
      'Technology': 'Tech',
      'FMCG/Consumer Goods': 'FMCG',
      'Financial Services': 'Finance',
      'Government/Public Sector': 'Public Sector',
      'Non-Profit/NGO': 'Non-Profit',
      'Media/Entertainment': 'Media',
      'Energy/Oil & Gas': 'Energy',
      'Technology/Product Management': 'Tech PM',
      'Technology/Software Engineering': 'Tech SWE',
      'FMCG/Brand Management': 'Brand Mgmt',
      'Corporate Strategy': 'Strategy',
      'Social Impact/Non-Profit': 'Social Impact'
    };
    return shortcuts[industry] || industry;
  };

  // Add career path
  if (entry.industry && entry.post_mba_industry) {
    const preShort = shortenIndustry(entry.industry);
    const postShort = shortenIndustry(entry.post_mba_industry);
    if (preShort !== postShort) {
      parts.push(`${preShort} → ${postShort}`);
    } else {
      parts.push(preShort);
    }
  } else if (entry.industry) {
    parts.push(shortenIndustry(entry.industry));
  }

  return parts.length > 0 ? parts.join(' | ') : 'MBA Candidate';
};
