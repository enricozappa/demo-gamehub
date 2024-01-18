import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
	count: number;
	results: T[];
}

function useData<T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			setLoading(true);
			apiClient
				.get<FetchResponse<T>>(endpoint, { ...requestConfig })
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})
				.catch((error) => {
					setError(error.message);
					setLoading(false);
				});
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
}

export default useData;
