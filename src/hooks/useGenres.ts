import useData from './useData';

export interface Genre {
	id: number;
	name: string;
}

function useGenres() {
	return useData<Genre>('/genre');
}

export default useGenres;
