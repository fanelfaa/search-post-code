import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './libs/features/app-routes';

function App() {
	return (
		<ChakraProvider>
			<AppRoutes />
		</ChakraProvider>
	);
}

export default App;
