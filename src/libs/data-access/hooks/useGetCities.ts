import { useRequest } from 'alova';
import { useMemo } from 'react';
import { CityResponse } from '@/libs/types/responses/PostCode';
import { postCodeInstance } from '../api/postCode';

export const useGetCities = () => {
	const { data, ...other } = useRequest(
		(provinceId) =>
			postCodeInstance.Get<CityResponse | undefined>(
				`/list_kotakab/${provinceId}.json`,
				{
					name: 'getCities',
				}
			),
		{
			immediate: false,
		}
	);

	const transformedData = useMemo(() => {
		if (!data) return undefined;
		const newData = Object.keys(data)
			.map((key) => ({ value: key, label: data[key] }))
			.sort((a, b) => a.label.localeCompare(b.label));
		return newData;
	}, [data]);

	return {
		options: transformedData,
		...other,
	};
};
