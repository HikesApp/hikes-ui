export const fetchHikes = () => fetch('https://hikes-service-dev.herokuapp.com/hikes').then(response => response.json());
