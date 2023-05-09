import Navbar from '@/components/common/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Navbar />
          <Component {...pageProps} />{' '}
          <style jsx global>
            {``}
          </style>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
