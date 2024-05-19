export const useEvents = () => {
  // TODO: Retrieve these events from the backend
  const events = [
    {
      id: 1,
      title: 'Lunch at the Park',
      description: "Hey guys, let's grab some grub and chill at the park! Bring ur fav snacks!",
      tags: ['food', 'outdoors'],
      date: '2022-12-01',
      time: '12:00',
    },
    {
      id: 2,
      title: 'Study Group',
      description:
        "CS students, let's ace those exams together! Study sesh this Friday, don't miss out!",
      tags: ['sfu', 'study', 'education', 'cs'],
      date: '2022-12-02',
      time: '14:00',
    },
    {
      id: 3,
      title: 'Book Club Meeting',
      description:
        "Bookworms, assemble! Let's discuss our latest read and pick the next one. Can't wait to see u there!",
      tags: ['book club', 'reading', 'books'],
      date: '2022-12-03',
      time: '16:00',
    },
    {
      id: 4,
      title: 'Yoga Class',
      description:
        "Need a break? Join our yoga class this week. All levels welcome, so don't be shy!",
      tags: ['yoga', 'exercise', 'wellness'],
      date: '2022-12-04',
      time: '18:00',
    },
    {
      id: 5,
      title: 'Coding Workshop',
      description:
        'Wanna learn to code? Join our beginner-friendly workshop. No experience needed, promise!',
      tags: ['coding', 'workshop', 'education'],
      date: '2022-12-05',
      time: '10:00',
    },
    {
      id: 6,
      title: 'Art Exhibition',
      description:
        "Art lovers, this one's for u! Come check out some cool pieces by local artists. See u there!",
      tags: ['art', 'exhibition', 'local'],
      date: '2022-12-06',
      time: '19:00',
    },
  ];

  return events;
};
