import axios from "axios";

export async function getImage(query, page) {
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/search/photos";
  const url = BASE_URL + END_POINT;
  const params = {
    query: query,
    page: page,
    per_page: 20,
    client_id: "rDRiqwZj1h1zIzC3oWMOrUNqS9Cup9qJ3E-8TCEjPyI",
  };

  const { data } = await axios.get(url, { params });
  return data;
}
