export async function getDictionaries() {
  const res = await fetch("http://localhost:8000/api/v1/dictionaries");
  const { data } = await res.json();
  console.log(data);

  return data;
}
