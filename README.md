# DESCRIPTION

Maas main website, written in nextjs and chakra-ui

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## NEXT-I18NEXT

next-i18next is a translation libraby that provide the management of translation content and components/hooks to translate your React components while fully supporting SSG/SSR, multiple namespaces, codesplitting, etc.

### Usage

```text
├── locales
│   ├── en
│   │   ├── [page].json
│   │   ├── common.json
│   ├── vn
│   │   ├── [translation].json
│   │   ├── common.json
├── pages
│   ├── [page].tsx


```

1. Add a translation file for each new page in their respective language folder

2. Include `serverSideTranslations`  on your page-level components, via either getStaticProps (For Static-Site Rendering) or getServerSideProps (For Server-Side Rendering):

```Typescript
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'page'])),
      // Will be passed to the page component as props
    },
  };
}
```

3. Use `useTranslation` hook to translate the item

```Typescript
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation(['header','common']);

  return (
    <footer>
      <p>{t('description',{ns:'common'})}</p>
      <p>{t('description',{ns:'header'})}</p>
    </footer>
  );
};
```
