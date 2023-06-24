import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuthStore from '@/libs/data-access/store/useAuthStore';
import { useGetProvinces } from '@/libs/data-access/hooks/useGetProvince';
import { useGetCities } from '@/libs/data-access/hooks/useGetCities';
import { useGetPostCodes } from '@/libs/data-access/hooks/useGetPostCodes';
import { Select } from '@/libs/ui/select';

const HomePage = () => {
	const [postCode, setPostCode] = useState<string | undefined>(undefined);

	const logout = useAuthStore((a) => a.logout);

	const [selectedProvince, setSelectedProvince] = useState<
		string | undefined
	>();
	const [selectedCity, setSelectedCity] = useState<string | undefined>();

	const provincesQuery = useGetProvinces();
	const citiesQuery = useGetCities();
	const postCodesQuery = useGetPostCodes();

	return (
		<Flex
			p="4"
			shadow="md"
			rounded="md"
			minH="100vh"
			w="md"
			maxW="100%"
			bgColor="white"
			mx="auto"
			direction="column"
		>
			<Flex justify="space-between" align="center">
				<Heading>Cari Kode Pos</Heading>
				<Button variant="ghost" onClick={logout}>
					Logout
				</Button>
			</Flex>
			<Grid templateRows="1fr auto" flex="1">
				<GridItem as={Flex} align="center">
					<Flex
						p="6"
						h="200px"
						shadow="md"
						rounded="lg"
						w="100%"
						align="center"
						bgColor="blue.100"
					>
						<Heading w="100%" textAlign="center" color="gray.700">
							{postCode ?? '-'}
						</Heading>
					</Flex>
				</GridItem>
				<GridItem>
					<form>
						<VStack align="flex-start" pb="4">
							<FormControl>
								<FormLabel>Provinsi</FormLabel>
								<Select
									placeholder="Pilih Provinsi"
									onChange={(opt) => {
										setSelectedProvince(opt?.value);
										setSelectedCity(undefined);
										setPostCode(undefined);
										citiesQuery.send(opt?.value);
									}}
									options={provincesQuery.options ?? []}
								/>
							</FormControl>
							{citiesQuery.options && selectedProvince ? (
								<FormControl>
									<FormLabel>Kota/Kabupaten</FormLabel>
									<Select
										placeholder="Pilih Kota/Kabupaten"
										onChange={(opt) => {
											setSelectedCity(opt?.value);
											postCodesQuery.send(opt?.value);
										}}
										options={citiesQuery.options ?? []}
									/>
								</FormControl>
							) : null}
							{selectedCity && postCodesQuery.options ? (
								<FormControl>
									<FormLabel>Kecamatan dan Kelurahan</FormLabel>
									<Select
										placeholder="Pilih Kecamatan dan Kelurahan"
										onChange={(opt) => {
											setPostCode(opt?.value);
										}}
										options={postCodesQuery.options ?? []}
									/>
								</FormControl>
							) : null}
						</VStack>
					</form>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default HomePage;
