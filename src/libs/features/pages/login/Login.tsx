import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginValidationSchema } from '@/libs/validations/login';
import { fakeApiLogin } from './fakeLogin';
import useAuthStore from '@/libs/data-access/store/useAuthStore';

const LoginPage = () => {
	const navigate = useNavigate();
	const setValues = useAuthStore((a) => a.setValues);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ email, password }, { setErrors }) => {
			return fakeApiLogin({ email, password })
				.then((res) => {
					setValues({
						apikey: res.apikey,
						email,
						isAuthenticated: true,
					});
					navigate('/');
				})
				.catch((e) => {
					setErrors({ email: e.toString(), password: e.toString() });
				});
		},
		validationSchema: LoginValidationSchema,
	});

	return (
		<Flex align="center" justify="center" minH="100vh" bgColor="gray.100">
			<Box p="2" shadow="md" rounded="md" h="400px" w="400px" bgColor="white">
				<Heading textAlign="center" mx="auto">
					Login
				</Heading>
				<Box bg="white" p={6} rounded="md">
					<form onSubmit={formik.handleSubmit}>
						<VStack spacing={4} align="flex-start">
							<FormControl
								isInvalid={!!formik.errors.email && formik.touched.email}
							>
								<FormLabel htmlFor="email">Email Address</FormLabel>
								<Input
									id="email"
									name="email"
									type="email"
									variant="filled"
									placeholder="Ex: email@email.com"
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
								<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={!!formik.errors.password && formik.touched.password}
							>
								<FormLabel htmlFor="password">Password</FormLabel>
								<Input
									id="password"
									name="password"
									type="password"
									variant="filled"
									placeholder="Input your password"
									onChange={formik.handleChange}
									value={formik.values.password}
								/>
								<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
							</FormControl>
							<Box h="2" />
							<Button
								type="submit"
								colorScheme="blue"
								width="full"
								isDisabled={formik.isSubmitting}
							>
								Login
							</Button>
						</VStack>
					</form>
				</Box>
			</Box>
		</Flex>
	);
};

export default LoginPage;
