const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchHikes = () => {
  const hikes = [{
    name: 'hike1',
    startDate: '2016-01-01',
  }];
  return delay(500).then(() => hikes);
};
