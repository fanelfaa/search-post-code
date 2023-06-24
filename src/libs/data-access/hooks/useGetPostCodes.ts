import { useRequest } from 'alova';
import { useMemo } from 'react';
import { PostCodesResponse } from '@/libs/types/responses/PostCode';
import { postCodeInstance } from '../api/postCode';

export const useGetPostCodes = () => {
	const { data, ...other } = useRequest(
		(cityId) =>
			postCodeInstance.Get<PostCodesResponse | undefined>(
				`/kota_kab/${cityId}.json`,
				{ name: 'getPostCodes' }
			),
		{
			immediate: false,
		}
	);
	const transformedData = useMemo(() => {
		if (!data) return undefined;
		const newData = data.map((pc) => ({
			value: pc.kodepos,
			label: `${pc.kecamatan} - ${pc.kelurahan}`,
		}));
		newData.sort((a, b) => a.label.localeCompare(b.label));
		return newData;
	}, [data]);

	return {
		options: transformedData,
		...other,
	};
};
