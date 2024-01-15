import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
	count: number;
	results: T[];
}

function useData<T>(endpoint: string) {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint)
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	return { data, error, isLoading };
}

export default useData;
