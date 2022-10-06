import { ChakraProvider } from '@chakra-ui/react';
import { DebugMenu } from '../src/components/debug/DebugMenu';

import { theme } from '../src/theme/index';

const App = ({ Component, pageProps }) => (
    <ChakraProvider theme={ theme }>
        <DebugMenu />

        <Component { ...pageProps } />
    </ChakraProvider>
);

export default App;
