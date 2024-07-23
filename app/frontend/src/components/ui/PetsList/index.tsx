import { usePetsList } from "@/src/petstore";

export const PetsList = () => {
  const petsQuery = usePetsList();
  return (
    <ul>
      {petsQuery.data?.data.map((pet) => (
        <li key={pet.name}>{pet.name}</li>
      ))}
    </ul>
  );
};
