export function getArticleCoverImageURL(image?: string) {
  if (!image) return '/aroundus.jpg';
  if (image.startsWith('http')) return image;

  return `/images/covers/${image}.jpg`;
}
