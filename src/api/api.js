const HIKES_URL = 'https://hikes-service-dev.herokuapp.com/hikes';
// const HIKES_URL = 'http://localhost:8080/hikes';

const toJson = response => response.json();

const post = (hike) => fetch(HIKES_URL, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(hike),
});

export const fetchHikes = () => fetch(HIKES_URL).then(toJson);
export const saveHike = (hike) => post(hike).then(toJson);
export const deleteHike = (hikeId) => fetch(`${HIKES_URL}/${hikeId}`, { method: 'DELETE' });
