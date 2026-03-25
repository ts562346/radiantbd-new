import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.radiantcleaningbd.com';

export default function SEO({ title, description, path = '/', keywords }) {
  const fullTitle = title
    ? `${title} | Radiant Cleaning & Pest Control Dhaka`
    : 'Radiant Cleaning & Pest Control | Professional Cleaning Services in Dhaka';

  const fullDesc = description ||
    'Radiant Cleaning & Pest Control — Bangladesh\'s trusted cleaning company since 1993. Office, residential, pest control in Dhaka. Call 01730-05001.';

  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}
