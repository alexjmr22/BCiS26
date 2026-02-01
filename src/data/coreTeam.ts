// Usamos o glob para importar todas as imagens da pasta de uma vez
const teamImages = import.meta.glob('../assets/images/03. CTImages/*.webp', {
  eager: true,
  query: '?url',
  import: 'default'
});

// Função auxiliar para facilitar o acesso às imagens pelo nome do ficheiro
const getImg = (name: string) => {
  const entries = Object.entries(teamImages);
  // Procura uma chave que contenha o nome (case-insensitive)
  const match = entries.find(([path]) =>
    path.toLowerCase().endsWith(`${name.toLowerCase()}.webp`)
  );
  return match ? (match[1] as string) : undefined;
};

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export const coreTeam: TeamMember[] = [
  {
    name: 'Diogo Silva',
    role: 'Main Organizer',
    linkedin: 'https://www.linkedin.com/in/diogo-marinheiro-da-silva/',
    email: 'diogo.marinheiro.silva@best-eu.org',
    image: getImg('Diogo')
  },
  {
    name: 'Melissa Soares',
    role: 'Main Organizer',
    linkedin: 'https://www.linkedin.com/in/melissa-soares-1915ba1ab/',
    email: 'melissa.soares@best-eu.org',
    image: getImg('Melissa')
  },
  {
    name: 'Joana Matos',
    role: 'BEST Coimbra President',
    linkedin: 'https://www.linkedin.com/in/joanamatos14/',
    email: 'joana.matos@best-eu.org',
    image: getImg('Joana')
  },
  {
    name: 'Filipa Mota',
    role: 'CR Responsible',
    linkedin: 'https://www.linkedin.com/in/filipa-mota-aa4316397/',
    email: 'ana.filipa.mota@best-eu.org',
    image: getImg('Filipa')
  },
  {
    name: 'Catarina Moreira',
    role: 'Logistics Responsible',
    linkedin: 'https://www.linkedin.com/in/catarina-moreira-110b1a250/',
    email: 'catarina.moreira@best-eu.org',
    image: getImg('Catarina')
  },
  {
    name: 'Leonor Miguel',
    role: 'Academics Responsible',
    linkedin: 'https://www.linkedin.com/in/leonor-da-silva-miguel-a395542b7',
    email: 'leonor.miguel@best-eu.org',
    image: getImg('Leonor')
  },
  {
    name: 'Carolina Pereira',
    role: 'Marketing Responsible',
    linkedin: 'https://www.linkedin.com/in/carolina-pereira-75a581395/',
    email: 'carolina.rei.pereira05@gmail.com',
    image: getImg('Carolina')
  },
  {
    name: 'João Barraca',
    role: 'Marketing Responsible',
    linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-barraca-2819a038b/',
    email: 'joaopl.barraca@gmail.com',
    image: getImg('Joao')
  }
];

export default coreTeam;
