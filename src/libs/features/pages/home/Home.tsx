import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Select,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import useAuthStore from '@/libs/data-access/store/useAuthStore';
import { useGetProvinces } from '@/libs/data-access/hooks/useGetProvince';
import { useGetCities } from '@/libs/data-access/hooks/useGetCities';
import { useGetPostCodes } from '@/libs/data-access/hooks/useGetPostCodes';

const HomePage = () => {
	const [postCode, setPostCode] = useState<string | null>(null);

	const logout = useAuthStore((a) => a.logout);

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
					{postCode ? (
						<Heading w="100%" textAlign="center">
							{postCode}
						</Heading>
					) : null}
				</GridItem>
				<GridItem>
					<form>
						<VStack align="flex-start" pb="4">
							<FormControl>
								<FormLabel>Provinsi</FormLabel>
								<Select
									placeholder="Pilih Provinsi"
									onChange={(e) => {
										citiesQuery.send(e.target.value);
									}}
								>
									{(provincesQuery.options ?? []).map((p) => (
										<option value={p.value} key={p.value}>
											{p.label}
										</option>
									))}
								</Select>
							</FormControl>
							{citiesQuery.options ? (
								<FormControl>
									<FormLabel>Kota/Kabupaten</FormLabel>
									<Select
										placeholder="Pilih Kota/Kabupaten"
										onChange={(e) => {
											postCodesQuery.send(e.target.value);
										}}
									>
										{(citiesQuery.options ?? []).map((p) => (
											<option value={p.value} key={p.value}>
												{p.label}
											</option>
										))}
									</Select>
								</FormControl>
							) : null}
							{postCodesQuery.data ? (
								<FormControl>
									<FormLabel>Kecamatan dan Kelurahan</FormLabel>
									<Select
										placeholder="Pilih Kecamatan dan Kelurahan"
										onChange={(e) => {
											setPostCode(e.target.value);
										}}
									>
										{(postCodesQuery.data ?? []).map((p, i) => (
											<option value={p.kodepos} key={p.kodepos + i}>
												{p.kecamatan} - {p.kelurahan}
											</option>
										))}
									</Select>
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
