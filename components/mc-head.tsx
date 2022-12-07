import Head from 'next/head';

export interface IPageHeadProps {
  title: string;
  description?: string;
  keywords?: string;
}
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
