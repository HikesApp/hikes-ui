export const fetchHikes = () => fetch('http://localhost:8080/hikes').then(response => response.json());

