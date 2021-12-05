import Head from 'next/head';
import { Layout } from '../../components';

export const Home = () => (
    <>
        <Head>
            <title>next-chakra-boilerplate</title>
            <meta name="description" content="Simple boilerplate with Next.js and Chakra UI" />
        </Head>
        <Layout>
            Hello!
        </Layout>
    </>
);
