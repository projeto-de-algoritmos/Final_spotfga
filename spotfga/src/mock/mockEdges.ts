export const mockEdges = new Map();

// Aerosmith Members
mockEdges.set(1, [
  {
    id: 2,
    nome: 'Tom Hamilton',
    musics: ['Dream On', 'Pink'],
  },
  {
    id: 3,
    nome: 'Joe Perry',
    musics: ['Dream On', 'Hole In My Soul', 'Amazing'],
  },
  {
    id: 4,
    nome: 'Ozzy Osbourne',
    musics: ['Dreamer', 'Black Sabbath', 'Crazy Train'],
  },
]);

mockEdges.set(2, [
  {
    id: 1,
    nome: 'Steven Tyler',
    musics: ['Dream On', 'Crazy', 'Sweet Emotion'],
  },
  {
    id: 3,
    nome: 'Joe Perry',
    musics: ['Dream On', 'Hole In My Soul', 'Amazing'],
  },
]);

mockEdges.set(3, [
  {
    id: 1,
    nome: 'Steven Tyler',
    musics: ['Dream On', 'Crazy', 'Sweet Emotion'],
  },
  {
    id: 2,
    nome: 'Tom Hamilton',
    musics: ['Dream On', 'Pink'],
  },
]);

mockEdges.set(4, [
  {
    id: 1,
    nome: 'Steven Tyler',
    musics: ['Dream On', 'Crazy', 'Sweet Emotion'],
  },
  {
    id: 5,
    nome: 'David Bowie',
    musics: ['Crazy Train', 'Changes', 'Starman'],
  },
]);

mockEdges.set(5, [
  {
    id: 4,
    nome: 'Ozzy Osbourne',
    musics: ['Dreamer', 'Black Sabbath', 'Crazy Train'],
  },
]);
