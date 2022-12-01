import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "14ee315ea9msh517e83cbc5cc84ap1029ebjsn04728512f6c9",
    },
  });
    
  return data;
}