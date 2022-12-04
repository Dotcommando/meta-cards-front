import Head from 'next/head';

import { IPageHeadProps } from '../types';

const MCHead: React.FC<IPageHeadProps> = (props: IPageHeadProps) => {
  return (
    <Head>
      <title>{ props.title }</title>
      <meta name="description" content={ props.description ?? '' } />
      <meta name="keywords" content={ props.keywords ?? '' } />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MCHead;
