/**
 * Single source of truth for the biopc.org homepage.
 *
 * Every figure, name and link below was taken from an existing BioPC property
 * (courses / olympiad / services), the founder's site at ahmedhridoy.com, or
 * the BioPC organisation brief. Nothing here is invented - if a number cannot
 * be traced to one of those sources it does not belong on this page.
 */

export const site = {
  org: 'BioPC',
  tagline: 'A Bioinformatics Lab of Research & Training',
  motto: 'Learn · Research · Innovate',
  url: 'https://biopc.org',
  founded: 2021,
  description:
    'BioPC is a research-and-training lab in bioinformatics: mentor-led courses, published computational and genomics research, GPU molecular dynamics services, and the national Biology & Bioinformatics Olympiad.',
  quote:
    'Challenge your intellect, test your skills, redefine the boundaries of scientific discoveries with BioPC.',
  email: 'research@biopc.org',
  altEmail: 'biopc.research@gmail.com',
  whatsapp: '+8801855310554',
  whatsappHref: '8801855310554',
  social: {
    facebookPage: 'https://www.facebook.com/BioPcLab/',
    facebookGroup: 'https://facebook.com/groups/5659344424181576/',
    linkedin: 'https://www.linkedin.com/company/biopc-a-bioinformatics-lab',
  },
} as const;

/** The four BioPC properties this homepage funnels into. */
export const domains = {
  academy: 'https://courses.biopc.org',
  internship: 'https://courses.biopc.org/internship',
  rProgramming: 'https://courses.biopc.org/r-programming',
  services: 'https://services.biopc.org',
  olympiad: 'https://olympiad.biopc.org',
  olympiadResults: 'https://olympiad.biopc.org/result/',
  olympiadCertificates: 'https://olympiad.biopc.org/certificate/',
  founder: 'https://ahmedhridoy.com',
  founderPublications: 'https://ahmedhridoy.com/publications',
  founderProjects: 'https://ahmedhridoy.com/projects',
  founderResearch: 'https://ahmedhridoy.com/research',
  founderAbout: 'https://ahmedhridoy.com/about',
  founderTeaching: 'https://ahmedhridoy.com/teaching',
  founderGallery: 'https://ahmedhridoy.com/gallery',
} as const;

/* -- Navigation ------------------------------------------------------ */

export type NavLink = { label: string; href: string; external?: boolean; note?: string };
export type NavGroup = { label: string; href: string; external?: boolean; items?: NavLink[] };

export const nav: NavGroup[] = [
  {
    label: 'About',
    href: '#about',
    items: [
      { label: 'Who We Are', href: '#about' },
      { label: 'Mission & Vision', href: '#about' },
      { label: 'Milestones', href: '#milestones' },
      { label: 'Founder', href: '#founder' },
    ],
  },
  {
    label: 'Academy',
    href: '#academy',
    items: [
      { label: 'Bioinformatics Research Internship 4.0', href: domains.internship, external: true, note: 'Running' },
      { label: 'R Programming for Biologists', href: domains.rProgramming, external: true },
      { label: 'All Courses', href: domains.academy, external: true },
    ],
  },
  {
    label: 'Research',
    href: '#publications',
    items: [
      { label: 'Published Papers', href: '#publications' },
      { label: 'Manuscripts in Preparation', href: '#manuscripts' },
      { label: 'Ongoing Projects', href: '#projects' },
      { label: 'Research Programme', href: domains.founderResearch, external: true },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    items: [
      { label: 'MD Simulation', href: domains.services, external: true },
      { label: 'Deliverables & Packages', href: domains.services + '/#packages', external: true },
      { label: 'Request a Quotation', href: domains.services + '/#quotation', external: true },
    ],
  },
  {
    label: 'Olympiad',
    href: '#olympiad',
    items: [
      { label: 'BBO 3.0 (2026)', href: domains.olympiad, external: true },
      { label: 'Results', href: domains.olympiadResults, external: true },
      { label: 'Certificates', href: domains.olympiadCertificates, external: true },
    ],
  },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

/* -- Impact numbers -------------------------------------------------- */

export const stats = [
  { value: 3000, suffix: '+', label: 'Learners trained', detail: 'Across several countries since 2021' },
  { value: 25, suffix: '', label: 'Training programmes', detail: 'Courses, workshops and traineeships' },
  { value: 30, suffix: '+', label: 'Universities reached', detail: 'Olympiad and course participants' },
  { value: 4, suffix: '', label: 'Peer-reviewed papers', detail: 'Two in Q1 journals' },
] as const;

/* -- The four pillars ------------------------------------------------ */

export type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
  external?: boolean;
  icon: 'academy' | 'research' | 'services' | 'olympiad';
};

export const pillars: Pillar[] = [
  {
    id: 'academy',
    eyebrow: 'Training',
    title: 'BioPC Academy',
    body: 'Live, mentor-led courses that take biologists from zero coding to publication-ready analysis.',
    points: ['Research internships', 'Live cohort courses', 'Certificates'],
    href: domains.academy,
    cta: 'Visit the Academy',
    external: true,
    icon: 'academy',
  },
  {
    id: 'publications',
    eyebrow: 'Science',
    title: 'Research & Publications',
    body: 'Peer-reviewed computational and genomics research, plus bench-led cohort studies in preparation.',
    points: ['4 published papers', '3 manuscripts in preparation', '15+ research projects'],
    href: '#publications',
    cta: 'See the research',
    icon: 'research',
  },
  {
    id: 'services',
    eyebrow: 'Services',
    title: 'MD Simulation Service',
    body: 'GPU-accelerated molecular dynamics from 100 ns to 5 microseconds, delivered as publication-ready figures and data.',
    points: ['GROMACS · Desmond · AMBER', 'PCA, FEL, DCCM', 'MM/PBSA & MM/GBSA'],
    href: domains.services,
    cta: 'Explore services',
    external: true,
    icon: 'services',
  },
  {
    id: 'olympiad',
    eyebrow: 'Community',
    title: 'Biology & Bioinformatics Olympiad',
    body: 'A national competition for university students, now in its third edition.',
    points: ['3rd edition, 2026', 'Two-round format', 'Free to enter'],
    href: domains.olympiad,
    cta: 'Go to the Olympiad',
    external: true,
    icon: 'olympiad',
  },
];

/* -- Academy courses ------------------------------------------------- */

export const courses = [
  {
    status: 'Running' as const,
    name: 'Bioinformatics Research Internship 4.0',
    blurb:
      'A four-month online cohort covering CADD, network pharmacology, DFT, vaccine design, cancer bioinformatics and manuscript writing - with real deliverables and a pathway to TA/RA roles.',
    meta: ['4 months', '7 modules', 'Online cohort'],
    href: domains.internship,
    cta: 'View course',
  },
  {
    status: 'Previous' as const,
    name: 'R Programming for Biologists',
    blurb:
      'A hands-on, beginner-friendly live course that takes biologists from zero coding to confident data analysis, statistics and bioinformatics in R.',
    meta: ['6 weeks', 'Live online', 'Certificate'],
    href: domains.rProgramming,
    cta: 'View course page',
  },
];

/* -- Publications ---------------------------------------------------- */

export type Paper = {
  title: string;
  journal: string;
  publisher: string;
  year: number;
  tier: string;
  role: string;
  status: string;
  domain: string;
  href?: string;
  doi?: string;
};

export const papers: Paper[] = [
  {
    title:
      'From Association to Mechanism: Regulatory Annotation and Pathway Mapping of Genes Surrounding Breast Cancer Risk Variants',
    journal: 'Computational and Systems Oncology',
    publisher: 'Wiley',
    year: 2026,
    tier: 'Q2',
    role: 'Corresponding author',
    status: 'Published',
    domain: 'Cancer Genomics',
    doi: '10.1002/cso2.70024',
    href: 'https://onlinelibrary.wiley.com/doi/10.1002/cso2.70024',
  },
  {
    title: 'Molecular Pharming: Advances, Applications, and Future Prospects in Biotechnology and Medicine',
    journal: 'Engineering in Life Sciences',
    publisher: 'Wiley',
    year: 2026,
    tier: 'Q2',
    role: 'First & corresponding author',
    status: 'In press',
    domain: 'Plant Biotechnology',
  },
  {
    title:
      'A structure-based drug design approach for the identification of antiviral compounds targeting the Chikungunya virus RdRp protein',
    journal: 'Chemical Physics Impact',
    publisher: 'Elsevier',
    year: 2024,
    tier: 'Q1',
    role: 'First author',
    status: 'Published',
    domain: 'Computational Drug Discovery',
    doi: '10.1016/j.chphi.2023.100450',
    href: 'https://www.sciencedirect.com/science/article/pii/S266702242300289X',
  },
  {
    title:
      'An immuno-informatics approach for annotation of hypothetical proteins and multi-epitope vaccine design against the Mpox virus',
    journal: 'Journal of Biomolecular Structure and Dynamics',
    publisher: 'Taylor & Francis',
    year: 2023,
    tier: 'Q1',
    role: 'First author',
    status: 'Published',
    domain: 'Immunoinformatics & Vaccine Design',
    doi: '10.1080/07391102.2023.2239921',
    href: 'https://doi.org/10.1080/07391102.2023.2239921',
  },
];

/** Bench-led cohort studies. Status is stated explicitly and never implied. */
export const manuscripts = [
  {
    title: 'Variant Spectrum of Autosomal Dominant Polycystic Kidney Disease in a Bangladeshi Cohort',
    status: 'In preparation',
    cohort: '37 patients · 9-gene panel',
    domain: 'Clinical Variant Discovery',
    finding:
      'Fourteen pathogenic or likely pathogenic variants across PKD1, PKD2 and PKHD1 - the first ADPKD variant spectrum reported from Bangladesh.',
  },
  {
    title: 'Common Polymorphisms and Rare Coding Variants in Bangladeshi Women with PCOS',
    status: 'In preparation',
    cohort: '300 patients · 300 controls',
    domain: 'Human Disease Genetics',
    finding:
      'Common and rare variation converge on the same gonadotropin, insulin and androgen signalling pathways.',
  },
  {
    title: 'Clone- and Plasmid-Structured Antimicrobial Resistance in ESBL-Producing Escherichia coli',
    status: 'In preparation',
    cohort: '38 isolates · 3 regions',
    domain: 'Genomic Epidemiology & AMR',
    finding:
      'Seventeen sequence types resolved; resistance is structured by clone and plasmid rather than by geography.',
  },
];

/** Running computational work, drawn from the founder's project register. */
export const projects = [
  {
    title: 'MMP1, MMP3 & MMP9 Variant Profiling in Periodontitis and Diabetes',
    status: 'Ongoing',
    field: 'Molecular Genetics',
  },
  { title: 'Lead Optimisation for Viral Targets', status: 'Ongoing', field: 'Computer-Aided Drug Design' },
  { title: 'Reverse Vaccinology for Chlamydia trachomatis', status: 'Submitted', field: 'Vaccine Design' },
  {
    title: 'Whole-Exome Sequencing: Variant Discovery Pipeline',
    status: 'Completed',
    field: 'NGS & Pipeline Development',
  },
];

/* -- MD services ----------------------------------------------------- */

export const services = [
  { number: '01', title: 'System setup & equilibration', detail: 'Force fields, protonation, solvation, NVT/NPT' },
  { number: '02', title: 'Production MD simulation', detail: '100 ns to 5 microseconds on dedicated GPUs' },
  { number: '03', title: 'Trajectory & stability analysis', detail: 'RMSD, RMSF, Rg, SASA, DSSP' },
  { number: '04', title: 'Protein-ligand interactions', detail: 'H-bond occupancy, salt bridges, contact maps' },
  { number: '05', title: 'Advanced analysis', detail: 'PCA, free energy landscape, DCCM, clustering' },
  { number: '06', title: 'Binding free energy', detail: 'MM/PBSA, MM/GBSA, per-residue decomposition' },
];

export const figures = [
  { src: '/figures/rmsd.png', label: 'RMSD' },
  { src: '/figures/rmsf.png', label: 'RMSF' },
  { src: '/figures/fel.png', label: 'Free energy landscape' },
  { src: '/figures/pca.png', label: 'PCA' },
  { src: '/figures/dccm.png', label: 'DCCM' },
  { src: '/figures/mmpbsa.png', label: 'MM/PBSA' },
];

/* -- Milestones ------------------------------------------------------ */

export const milestones = [
  {
    year: '2021',
    title: 'Learn Bioinformatics with BioPC',
    body: 'The founding programme. Over 600 applicants, 200 trained in basic bioinformatics, drug design and vaccine design; the top 30 joined BioPC research projects as interns.',
  },
  {
    year: '2022',
    title: 'First publication',
    body: 'The first BioPC research project appeared in the Journal of Biomolecular Structure and Dynamics - a peer-reviewed international journal - within a year of founding.',
  },
  {
    year: '2023',
    title: '1st Biology & Bioinformatics Olympiad',
    body: 'The first olympiad built for university students in Bangladesh. 3,000+ registrations from 30+ universities; 500 reached the final round, and the top 30 were offered internships.',
  },
  {
    year: '2023',
    title: 'Free workshops & career guidance',
    body: 'Free bioinformatics and higher-studies workshops covering research design, publication, SOP and CV writing, and funding for study abroad.',
  },
  {
    year: '2024',
    title: '2nd Olympiad & Research Traineeship',
    body: 'The second olympiad ran with seven university club partners. A two-month Research Traineeship Program covered methodology, manuscript writing, CADD, vaccine design and SPSS.',
  },
  {
    year: '2024',
    title: 'DNA Day & Cancer Awareness Day',
    body: 'BioPC moved offline - a World Cancer Day rally at the University of Chittagong, and a DNA Day quiz and content-writing contest on 25 April.',
  },
  {
    year: '2026',
    title: 'Olympiad 3.0, Internship 4.0 and MD services',
    body: 'The third olympiad, the fourth research internship cohort, and a dedicated GPU molecular dynamics simulation service for external research groups.',
  },
];

/* -- People ---------------------------------------------------------- */

export const founder = {
  name: 'Md. Hridoy Ahmed',
  role: 'Founder & Head Coordinator, BioPC',
  affiliation: 'Research Associate, Functional Genomics & Proteomics Laboratory, University of Chittagong',
  photo: '/founder.jpg',
  credentials: [
    'M.Sc. Genetic Engineering & Biotechnology, University of Chittagong - First Class, 2nd position',
    'B.Sc. Genetic Engineering & Biotechnology, University of Chittagong - First Class, 4th position',
    'Four peer-reviewed publications, two in Q1 journals',
  ],
  statement: [
    'I started BioPC in 2021 with one observation: in Bangladesh, research is something students are told about, not something they are given the chance to do. Bioinformatics made that gap fixable. It needs a laptop, an internet connection and a mentor who will sit with you through the first failed analysis - not a million-taka facility.',
    'What began as a single online course has become a lab of research and training. More than three thousand learners have come through our programmes. Our interns have co-authored papers in international journals. Our olympiads have brought students from more than thirty universities into the same competition. And our own research now runs from the bench to the genome - patient cohorts, targeted panels, exomes, and the computational work that makes sense of them.',
    'If you are a student wondering whether research is for you, it is. Come and find out with us.',
  ],
  href: domains.founder,
};

export type Member = { name: string; role: string; dept: string; photo: string };

export const team: Member[] = [
  {
    name: 'Md. Hridoy Ahmed',
    role: 'Founder & Head Coordinator',
    dept: 'Genetic Engineering & Biotechnology, University of Chittagong',
    photo: '/team/hridoy-ahmed.jpg',
  },
  {
    name: 'Md. Mustak Khan',
    role: 'Head of Extracurricular Activities',
    dept: 'Biochemistry & Molecular Biology, University of Chittagong',
    photo: '/team/mustak-khan.jpg',
  },
  {
    name: 'Shishir Dutta',
    role: 'Head of IT & Media',
    dept: 'Soil Science, University of Chittagong',
    photo: '/team/shishir-dutta.jpg',
  },
  {
    name: 'Mohammad Shariful Islam',
    role: 'Head of Outreach',
    dept: 'Zoology, University of Chittagong',
    photo: '/team/shariful-islam.jpg',
  },
  {
    name: 'Md. Foyzur Rahman',
    role: 'Head of Question Making',
    dept: 'Pharmacy, Dhaka International University',
    photo: '/team/foyzur-rahman.jpg',
  },
  {
    name: 'Tanjuma Tasnim Hira',
    role: 'Head of Cultural Affairs',
    dept: 'Fisheries, Bangladesh Agricultural University',
    photo: '/team/tanjuma-hira.jpg',
  },
  {
    name: 'Ifthesum',
    role: 'Head of Promotional Team',
    dept: 'Botany, University of Chittagong',
    photo: '/team/ifthesum.jpg',
  },
  {
    name: 'Tasnin Neha',
    role: 'Deputy Head of Cultural Affairs',
    dept: 'Genetic Engineering & Biotechnology, East West University',
    photo: '/team/tasnin-neha.jpg',
  },
  {
    name: 'Aishee Devi',
    role: 'Deputy Head of Promotional Team',
    dept: 'Biochemistry & Biotechnology, USTC',
    photo: '/team/aishee-devi.jpg',
  },
];

export const partners = [
  { name: 'BMB Higher Studies & Research Club, Cox Bazar City College', logo: '/partners/bmb-cox-bazar.jpg' },
  { name: 'BRAC University Society for Biotechnology', logo: '/partners/busb-brac.jpg' },
  { name: 'MIU EEE Club', logo: '/partners/miu-eee.jpg' },
  { name: 'MIU Pharmacy Club', logo: '/partners/miu-pharmacy.jpg' },
  { name: 'USTC Pharma Science Club', logo: '/partners/ustc-pharma.jpg' },
];

export const programPhotos = [
  '/programs/program-1.jpg',
  '/programs/program-2.jpg',
  '/programs/program-3.jpg',
  '/programs/program-4.jpg',
  '/programs/program-5.jpg',
  '/programs/program-6.jpg',
];
