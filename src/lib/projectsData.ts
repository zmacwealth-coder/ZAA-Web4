export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  layoutVariant: 'large-left' | 'offset-right' | 'column-left' | 'center-wide';
  scaleLabel?: string;
  area?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    title: 'Folded Zinc & Basalt Pavilion',
    location: 'Eko Atlantic, Lagos',
    year: '2024',
    category: 'Private Residence',
    image: '/images/project_1.jpg',
    layoutVariant: 'large-left',
    area: '1,420 m²',
  },
  {
    id: '02',
    title: 'Ikoyi Teak & Cantilevered Villa',
    location: 'Ikoyi Waterfront, Lagos',
    year: '2024',
    category: 'Residential Enclave',
    image: '/images/project_2.jpg',
    layoutVariant: 'offset-right',
    area: '980 m²',
  },
  {
    id: '03',
    title: 'Calabar Terracotta Brick Atelier',
    location: 'Calabar, Cross River',
    year: '2023',
    category: 'Cultural Center',
    image: '/images/project_3.jpg',
    layoutVariant: 'column-left',
    area: '2,800 m²',
  },
  {
    id: '04',
    title: 'Maitama Sloped Timber Pavilion',
    location: 'Maitama Hills, Abuja',
    year: '2023',
    category: 'Private Pavilion',
    image: '/images/project_4.jpg',
    layoutVariant: 'center-wide',
    area: '740 m²',
  },
  {
    id: '05',
    title: 'Victoria Island Research Monolith',
    location: 'Victoria Island, Lagos',
    year: '2022',
    category: 'Institutional',
    image: '/images/project_5.jpg',
    layoutVariant: 'offset-right',
    area: '4,150 m²',
  },
  {
    id: '06',
    title: 'Banana Island Travertine Estate',
    location: 'Banana Island, Lagos',
    year: '2024',
    category: 'Luxury Villa',
    image: '/images/project_6.jpg',
    layoutVariant: 'large-left',
    area: '1,650 m²',
  },
  {
    id: '07',
    title: 'Asokoro Minimalist Sanctuary',
    location: 'Asokoro, Abuja',
    year: '2023',
    category: 'Residential',
    image: '/images/project_7.jpg',
    layoutVariant: 'offset-right',
    area: '1,100 m²',
  },
];
