import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from '../config/contact';
import { DARAZ_STORE_URL, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../config/site';
import { WHATSAPP_NUMBER } from '../config/whatsapp';
import { productsData } from '../data/products';

const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const ensureLink = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const removeElement = (selector) => {
  const element = document.head.querySelector(selector);
  if (element) element.remove();
};

const setStructuredData = (data) => {
  let script = document.head.querySelector('#structured-data');

  if (!script) {
    script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const routeMeta = (pathname, product) => {
  if (product) {
    return {
      title: `${product.name} | Handmade Organic Soap in Pakistan | H & Mia`,
      description: `${product.name} by H & Mia Luxe Organics. ${product.shortDescription} Price PKR ${product.price}. Order handmade soap in Pakistan.`,
      image: `${SITE_URL}${product.image}`,
      canonicalPath: product.link,
    };
  }

  if (pathname === '/products') {
    return {
      title: 'Shop Handmade Organic Soaps in Pakistan | H & Mia',
      description:
        'Shop H & Mia handmade organic soaps in Pakistan. Whitening Soap, Collagen Booster Soap, Baby Kitty Soap, Baby Bear Soap, and Stress Relief Soap at PKR 750.',
      image: DEFAULT_OG_IMAGE,
      canonicalPath: '/products',
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About H & Mia Luxe Organics | Handmade Soaps Pakistan',
      description:
        'Learn about H & Mia Luxe Organics, a Pakistan-based handmade soap brand focused on premium ingredients, gentle skincare, and elegant gifting.',
      image: DEFAULT_OG_IMAGE,
      canonicalPath: '/about',
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact H & Mia | WhatsApp Handmade Soap Orders',
      description:
        'Contact H & Mia Luxe Organics for handmade soap orders, delivery questions, product guidance, and WhatsApp payment support in Pakistan.',
      image: DEFAULT_OG_IMAGE,
      canonicalPath: '/contact',
    };
  }

  return {
    title: 'H & Mia Luxe Organics | Handmade Organic Soaps in Pakistan',
    description: SITE_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
    canonicalPath: '/',
  };
};

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: CONTACT_EMAIL,
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL, DARAZ_STORE_URL],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: 'customer support',
      areaServed: 'PK',
      availableLanguage: ['en', 'ur'],
    },
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

const productSchema = (product) => ({
  '@type': 'Product',
  '@id': `${SITE_URL}${product.link}#product`,
  name: product.name,
  description: product.shortDescription,
  image: `${SITE_URL}${product.image}`,
  brand: {
    '@type': 'Brand',
    name: SITE_NAME,
  },
  category: 'Handmade organic soap',
  offers: {
    '@type': 'Offer',
    url: `${SITE_URL}${product.link}`,
    priceCurrency: 'PKR',
    price: product.price,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@id': `${SITE_URL}/#organization`,
    },
  },
});

const itemListSchema = {
  '@type': 'ItemList',
  '@id': `${SITE_URL}/products#products`,
  name: 'H & Mia handmade soap collection',
  itemListElement: productsData.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE_URL}${product.link}`,
    name: product.name,
  })),
};

const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

const buildSchema = ({ pathname, product }) => {
  const graph = [organizationSchema, websiteSchema];

  if (product) {
    graph.push(productSchema(product));
    graph.push(
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: product.name, path: product.link },
      ]),
    );
  } else if (pathname === '/products') {
    graph.push(itemListSchema);
    graph.push(
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
      ]),
    );
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};

export const SEO = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const product =
      params.productId || location.pathname.startsWith('/products/')
        ? productsData.find((item) => item.id === params.productId || item.link === location.pathname)
        : null;
    const meta = routeMeta(location.pathname, product);
    const canonicalUrl = `${SITE_URL}${meta.canonicalPath}`;

    document.title = meta.title;
    ensureMeta('meta[name="description"]', { name: 'description', content: meta.description });
    ensureMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    ensureMeta('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'handmade soap Pakistan, organic soap Pakistan, whitening soap Pakistan, collagen soap Pakistan, baby soap Pakistan, natural skincare Pakistan',
    });
    ensureLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: product ? 'product' : 'website' });
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: meta.image });
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_PK' });

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: meta.image });

    if (product) {
      ensureMeta('meta[property="product:price:amount"]', {
        property: 'product:price:amount',
        content: String(product.price),
      });
      ensureMeta('meta[property="product:price:currency"]', {
        property: 'product:price:currency',
        content: 'PKR',
      });
    } else {
      removeElement('meta[property="product:price:amount"]');
      removeElement('meta[property="product:price:currency"]');
    }

    setStructuredData(buildSchema({ pathname: location.pathname, product }));
  }, [location.pathname, params.productId]);

  return null;
};
