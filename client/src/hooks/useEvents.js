export const useEvents = () => {
  // TODO: Retrieve these events from the backend
  const events = [
    {
      id: 1,
      title: 'Lunch at the Park',
      description: 'Join us for a fun lunch at the park!',
      tags: ['food', 'outdoors'],
      date: '2022-12-01',
      time: '12:00',
    },
    {
      id: 2,
      title: 'Study Group',
      description: 'Study group for all computer science students.',
      tags: ['sfu', 'study', 'education', 'computer science'],
      date: '2022-12-02',
      time: '14:00',
    },
    {
      id: 3,
      title: 'Book Club Meeting',
      description: 'Monthly book club meeting.',
      tags: ['book club', 'reading', 'books'],
      date: '2022-12-03',
      time: '16:00',
    },
    {
      id: 4,
      title: 'Yoga Class',
      description: 'Weekly yoga class for all skill levels.',
      tags: ['yoga', 'exercise', 'wellness'],
      date: '2022-12-04',
      time: '18:00',
    },
    {
      id: 5,
      title: 'Coding Workshop',
      description: 'Introductory coding workshop for beginners.',
      tags: ['coding', 'workshop', 'education'],
      date: '2022-12-05',
      time: '10:00',
    },
    {
      id: 6,
      title: 'Art Exhibition',
      description: 'Art exhibition featuring local artists.',
      tags: ['art', 'exhibition', 'local'],
      date: '2022-12-06',
      time: '19:00',
    },
  ];

  return events;
};
