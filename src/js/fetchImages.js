import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchImages(searchData, page, pageSize) {
  const res = await axios.get(
    `/?key=${API_KEY}&q=${searchData}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${pageSize}`,
  );
  return res.data;
}
