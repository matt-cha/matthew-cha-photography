export const resolveImagesById = <T extends { id: number }>(
  allImages: T[],
  ids: number[],
): T[] => {
  const byId = new Map(allImages.map((image) => [image.id, image]));
  return ids
    .map((id) => byId.get(id))
    .filter((image): image is T => image !== undefined);
};

export const resolveImageById = <T extends { id: number }>(
  allImages: T[],
  id: number,
): T | undefined => allImages.find((image) => image.id === id);
