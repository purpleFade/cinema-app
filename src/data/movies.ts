export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  overview: string;
  runtime: number;
  showTimes: string[];
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Breaking Bad',
    posterUrl: '/src/assets/posters/breaking_bad.jpg',
    overview:
      "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's financial future.",
    runtime: 47,
    showTimes: ['14:00', '17:00', '20:00'],
  },
  {
    id: '2',
    title: 'Game of Thrones',
    posterUrl: '/src/assets/posters/game_of_thrones.jpg',
    overview:
      'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    runtime: 60,
    showTimes: ['15:30', '18:30', '21:30'],
  },
  {
    id: '3',
    title: 'Stranger Things',
    posterUrl: '/src/assets/posters/stranger_things.jpg',
    overview:
      'A group of young friends in a small town uncover a series of supernatural mysteries and government conspiracies.',
    runtime: 50,
    showTimes: ['16:00', '19:00', '22:00'],
  },
  {
    id: '4',
    title: 'Friends',
    posterUrl: '/src/assets/posters/friends.jpg',
    overview:
      'Six friends navigate life and love in New York City, supporting each other through the ups and downs of adulthood.',
    runtime: 22,
    showTimes: ['13:00', '16:00', '19:00'],
  },
  {
    id: '5',
    title: 'The Walking Dead',
    posterUrl: '/src/assets/posters/the_walking_dead.jpg',
    overview:
      "A sheriff's deputy wakes up from a coma to find a world overrun by zombies, leading a group of survivors in a fight for humanity's future.",
    runtime: 44,
    showTimes: ['14:30', '17:30', '20:30'],
  },
  {
    id: '6',
    title: 'Sherlock',
    posterUrl: '/src/assets/posters/sherlock.jpg',
    overview:
      'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    runtime: 88,
    showTimes: ['15:00', '18:00', '21:00'],
  },
  {
    id: '7',
    title: 'The Big Bang Theory',
    posterUrl: '/src/assets/posters/the_big_bang_theory.jpg',
    overview:
      'Two physicists with high IQs struggle to make sense of life outside of the laboratory.',
    runtime: 22,
    showTimes: ['13:30', '16:30', '19:30'],
  },
  {
    id: '8',
    title: 'Dexter',
    posterUrl: '/src/assets/posters/dexter.jpg',
    overview:
      'A forensic expert for the Miami Metro Police leads a secret life as a vigilante serial killer.',
    runtime: 53,
    showTimes: ['14:15', '17:15', '20:15'],
  },
  {
    id: '9',
    title: 'The Office',
    posterUrl: '/src/assets/posters/the_office.jpg',
    overview:
      "A documentary-style look at the everyday lives of office employees working at Dunder Mifflin's Scranton, PA branch.",
    runtime: 22,
    showTimes: ['15:45', '18:45', '21:45'],
  },
  {
    id: '10',
    title: 'Narcos',
    posterUrl: '/src/assets/posters/narcos.jpg',
    overview:
      "The true-life story of Colombia's infamously violent and powerful drug cartels.",
    runtime: 50,
    showTimes: ['16:30', '19:30', '22:30'],
  },
  {
    id: '11',
    title: 'Black Mirror',
    posterUrl: '/src/assets/posters/black_mirror.jpg',
    overview:
      'An anthology series exploring a twisted, high-tech multiverse that showcases the dark aspects of modern society.',
    runtime: 60,
    showTimes: ['14:00', '17:00', '20:00'],
  },
  {
    id: '12',
    title: 'Westworld',
    posterUrl: '/src/assets/posters/westworld.jpg',
    overview:
      'A futuristic theme park where guests can experience their wildest fantasies through artificial beings.',
    runtime: 62,
    showTimes: ['15:30', '18:30', '21:30'],
  },
  {
    id: '13',
    title: 'The Mandalorian',
    posterUrl: '/src/assets/posters/mandalorian.jpeg',
    overview:
      'The adventures of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    runtime: 40,
    showTimes: ['16:00', '19:00', '22:00'],
  },
  {
    id: '14',
    title: 'The Crown',
    posterUrl: '/src/assets/posters/crown.jpg',
    overview:
      'The story of the reign of Queen Elizabeth II and the events that shaped the second half of the 20th century.',
    runtime: 60,
    showTimes: ['13:30', '16:30', '19:30'],
  },
  {
    id: '15',
    title: 'Peaky Blinders',
    posterUrl: '/src/assets/posters/peaky_blinders.jpg',
    overview:
      'A gangster family epic set in 1919 Birmingham, England, following the exploits of the Peaky Blinders gang.',
    runtime: 60,
    showTimes: ['14:00', '17:00', '20:00'],
  },
  {
    id: '16',
    title: 'The Witcher',
    posterUrl: '/src/assets/posters/the_witcher.jpg',
    overview:
      'A solitary monster hunter struggles to find his place in a world where people often prove more wicked than beasts.',
    runtime: 60,
    showTimes: ['15:30', '18:30', '21:30'],
  },
  {
    id: '17',
    title: 'Fargo',
    posterUrl: '/src/assets/posters/fargo.jpg',
    overview:
      'A small-town Minnesota car salesman becomes entangled in an elaborate kidnapping scheme that goes awry.',
    runtime: 60,
    showTimes: ['16:00', '19:00', '22:00'],
  },
  {
    id: '18',
    title: 'True Detective',
    posterUrl: '/src/assets/posters/true_detective.jpg',
    overview:
      'Two detectives in Louisiana become involved in a complex case that spirals into a dark and disturbing investigation.',
    runtime: 55,
    showTimes: ['14:30', '17:30', '20:30'],
  },
  {
    id: '19',
    title: 'Money Heist',
    posterUrl: '/src/assets/posters/money_heist.jpg',
    overview:
      'A criminal mastermind plans the biggest heist in recorded history—to print billions of euros in the Royal Mint of Spain.',
    runtime: 60,
    showTimes: ['15:00', '18:00', '21:00'],
  },
  {
    id: '20',
    title: 'Better Call Saul',
    posterUrl: '/src/assets/posters/better_call_saul.jpg',
    overview:
      'The prequel to Breaking Bad, detailing the transformation of Jimmy McGill into the morally challenged lawyer, Saul Goodman.',
    runtime: 50,
    showTimes: ['16:30', '19:30', '22:30'],
  },
];
