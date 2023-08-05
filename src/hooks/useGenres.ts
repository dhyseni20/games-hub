import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (selectedGenre: Genre | null) =>
  useData<Genre>("/genres", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGenres;
