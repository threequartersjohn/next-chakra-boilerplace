import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../src/theme/index';

const App = ({ Component, pageProps }) => (
    <ChakraProvider theme={ theme }>
        <Component { ...pageProps } />
    </ChakraProvider>
);

export default App;
