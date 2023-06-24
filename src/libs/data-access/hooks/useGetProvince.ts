import { useRequest } from 'alova';
import { useMemo } from 'react';
import { postCodeInstance } from '../api/postCode';
import { ProvinceResponse } from '@/libs/types/responses/PostCode';

export const useGetProvinces = () => {
	const { data } = useRequest(
		postCodeInstance.Get<ProvinceResponse | undefined>('/list_propinsi.json', {
			name: 'getProvinces',
		})
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
	};
};
