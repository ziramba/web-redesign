const url = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  contentful: {
    space_id: process.env.CONTENTFUL_SPACE_ID || '',
    cda_token: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    cpa_token: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  },
  meta: {
    title: 'Construction e-commerce made easy | Ziramba',
    description: `We empower contractors by simplifying project sourcing, connecting with reliable suppliers, and offering hassle-free material financing. Get started at ${url
      .replace('https://', '')
      .replace('http://', '')}`,
    url,
    image:
      'https://res.cloudinary.com/ziramba/image/upload/v1639837701/ziramba/solution-embedded_ug1lwf.jpg',
  },
  icon: {
    light:
      'https://res.cloudinary.com/ziramba/image/upload/v1644795406/ziramba/android-chrome-512x512_zrkily.png',
    dark: 'https://res.cloudinary.com/ziramba/image/upload/v1644795406/ziramba/android-chrome-512x512_zrkily.png',
    width: 66,
    height: 64,
  },
};
