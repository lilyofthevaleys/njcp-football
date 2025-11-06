export type SupportStaff = {
  name: string;
  role: string;
  slug: string;
  bio?: string;
};

export const supportStaff: SupportStaff[] = [
  { name: 'Tim Arnold', role: 'Defensive Analyst / Assistant DL Coach', slug: 'tim-arnold' },
  { name: 'Matt Heacock', role: 'Defensive Analyst / Assistant Linebackers', slug: 'matt-heacock' },
  { name: "Jake Schenk", role: "Offensive Analyst / Assistant RB's Coach", slug: 'jake-schenk' },
  { name: 'Braiden Hall', role: 'Athletic Equipment Coordinator (FB)', slug: 'braiden-hall' },
  { name: 'Jacob Stokes', role: 'Graduate Assistant / Offensive Assistant', slug: 'jacob-stokes' },
  { name: 'Megan Kelling', role: 'Football Administrative Assistant', slug: 'megan-kelling' },
];