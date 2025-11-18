
export async function getCars() {
  const data = await fetch(`${import.meta.env.BASE_URL}/cars`);
  if (!data.ok) throw new Error('Erreur lors de la récupération des voitures');
  const cars = data.json();
  return cars;
}