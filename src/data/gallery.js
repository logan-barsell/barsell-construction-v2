export const remington = Array.from({ length: 40 }, (_, i) => ({
  src: `/images/gallery/remington/remington${i + 1}.jpg`,
  alt: `Remington Project (Complete Home Remodel) - Image ${i + 1}`,
}));

export const happyValley = Array.from({ length: 31 }, (_, i) => ({
  src: `/images/gallery/happy-valley/happyvalley${i === 0 ? '' : i + 1}.jpg`,
  alt: `Happy Valley Project (Complete Home Remodel) - Image ${i + 1}`,
}));
