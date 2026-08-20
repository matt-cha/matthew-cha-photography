import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public/images");
const MAX_EDGE = 2400;
const JPEG_QUALITY = 80;

const usedImages = [
  "josh-lora-grass.jpg",
  "calvin-deanna-steps.jpg",
  "david-heewon-wall.jpg",
  "daesun-eunice-glass.jpg",
  "jake-jenny-trees.jpg",
  "megan-nathan-glass.jpg",
  "josh-lora-1276-2.jpg",
  "josh-lora-516-2.jpg",
  "aaron-abigail-aisle.jpg",
  "aaron-abigail-trees.jpg",
  "aaron-abigail-wedding-party.jpg",
  "andrew-jenny-lake.jpg",
  "andrew-jenny-table.jpg",
  "curtis-grace-propose.jpg",
  "chris-joan-dress.jpg",
  "chris-janice-bubbles.jpg",
  "chris-janice-engagement-dog-2.jpg",
  "chris-janice-engagement-field-2.jpg",
  "chris-janice-engagement-field-3.jpg",
  "chris-janice-engagement-field.jpg",
  "chris-janice-piano.jpg",
  "chris-janice-plants.jpg",
  "daniel-eugenia-ceremony-2.jpg",
  "daniel-eugenia-ceremony.jpg",
  "daniel-eugenia-green.jpg",
  "daniel-grace-column.jpg",
  "daniel-grace-hall.jpg",
  "daniel-grace-street.jpg",
  "david-heewon-wall-2.jpg",
  "david-heewon-wall-3.jpg",
  "david-heewon-wall-4.jpg",
  "isaac-shannel-fountain.jpg",
  "isaac-shannel-wood.jpg",
  "joon-eunice-grass.jpg",
  "jake-jenny-brides.jpg",
  "jake-jenny-ceremony-area.jpg",
  "jake-jenny-dress-2.jpg",
  "jake-jenny-dress.jpg",
  "jake-jenny-engagement-field-2.jpg",
  "jake-jenny-engagement-field-3.jpg",
  "jake-jenny-engagement-field-4.jpg",
  "jake-jenny-engagement-field-5.jpg",
  "jake-jenny-engagement-street.jpg",
  "james-kathy-field-2.jpg",
  "james-kathy-field.jpg",
  "joseph-tiffany-tree.jpg",
  "sean-sarah-beach.jpg",
  "sean-sarah-field.jpg",
  "tim-janet-grass.jpg",
  "mc-wall.jpg",
  "jake-jenny-engagement-field.jpg",
  "jake-jenny-engagement-embrace.jpg",
  "jake-jenny-engagement-hills.jpg",
  "jake-jenny-engagement-portrait.jpg",
  "jake-jenny-engagement-looking-back.jpg",
  "jake-jenny-engagement-forehead-kiss.jpg",
  "jake-jenny-engagement-walking.jpg",
  "jake-jenny-engagement-road.jpg",
  "aaron-abigail-engagement-embrace.jpg",
  "aaron-abigail-engagement-field.jpg",
  "chris-janice-groom.jpg",
  "chris-janice-groomsmen.jpg",
  "chris-janice-getting-ready.jpg",
  "chris-janice-stone-wall.jpg",
  "chris-janice-arch.jpg",
  "chris-janice-ceremony.jpg",
  "chris-janice-exit.jpg",
  "chris-janice-performance.jpg",
  "chris-janice-dance.jpg",
  "timothy-rina-walking.jpg",
  "ryan-jessica-ceremony.jpg",
  "ryan-jessica-tennis.jpg",
  "ryan-jessica-bubbles.jpg",
  "ryan-jessica-send-off.jpg",
  "josh-jessica-dress.jpg",
  "josh-jessica-details.jpg",
  "josh-jessica-getting-ready.jpg",
  "josh-jessica-veil.jpg",
  "josh-jessica-veil-2.jpg",
  "josh-jessica-bride.jpg",
  "josh-jessica-bride-2.jpg",
  "josh-jessica-laugh.jpg",
  "josh-jessica-portrait.jpg",
  "josh-jessica-table.jpg",
  "josh-jessica-ceremony.jpg",
  "josh-jessica-chairs.jpg",
  "josh-jessica-dance.jpg",
  "josh-jessica-father-dance.jpg",
  "josh-jessica-lion-dance.jpg",
  "josh-jessica-lion-dance-2.jpg",
  "josh-jessica-qipao.jpg",
  "josh-jessica-reception.jpg",
  "josh-jessica-dance-floor.jpg",
  "josh-jessica-cake.jpg",
  "daniel-eugenia-portrait.jpg",
  "daniel-eugenia-close.jpg",
  "daniel-eugenia-bridesmaids.jpg",
  "daniel-eugenia-ceremony-3.jpg",
  "chris-joan-dance.jpg",
  "chris-janice-engagement-walking.jpg",
  "chris-janice-engagement-running.jpg",
  "chris-janice-engagement-dog.jpg",
  "chris-janice-engagement-trail.jpg",
  "chris-janice-engagement-guitar.jpg",
  "chris-janice-engagement-sunset.jpg",
  "chris-janice-engagement-hills.jpg",
  "josh-lora-bride.jpg",
  "josh-lora-groomsmen.jpg",
  "josh-lora-bride-2.jpg",
  "josh-lora-ceremony.jpg",
  "josh-lora-sweetheart-table.jpg",
  "josh-lora-first-look.jpg",
  "josh-lora-forehead-kiss.jpg",
  "josh-lora-forehead-kiss-2.jpg",
  "josh-lora-reception.jpg",
  "josh-lora-courtyard.jpg",
  "josh-lora-wedding-party.jpg",
  "josh-lora-lounge.jpg",
  "james-kathy-hands.jpg",
  "james-kathy-looking-back.jpg",
  "james-kathy-field-3.jpg",
  "jake-jenny-wedding-dress-mirror.jpg",
  "jake-jenny-wedding-first-look.jpg",
  "jake-jenny-wedding-hands.jpg",
];

const dimensions = {};

for (const filename of usedImages) {
  const filePath = path.join(IMAGES_DIR, filename);
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;

  const buffer = await sharp(filePath)
    .rotate()
    .resize(MAX_EDGE, MAX_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();

  await writeFile(filePath, buffer);

  const next = await sharp(filePath).metadata();
  dimensions[`/images/${filename}`] = {
    width: next.width,
    height: next.height,
  };

  const beforeKb = Math.round((await stat(filePath)).size / 1024);
  const afterKb = Math.round(buffer.length / 1024);
  console.log(
    `${filename}: ${width}x${height} → ${next.width}x${next.height} (${beforeKb}KB → ${afterKb}KB)`,
  );
}

const ogSource = path.join(IMAGES_DIR, "jake-jenny-trees.jpg");
const ogDir = path.join(ROOT, "src/app");
await mkdir(ogDir, { recursive: true });

const ogBuffer = await sharp(ogSource)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, progressive: true, mozjpeg: true })
  .toBuffer();

await writeFile(path.join(ogDir, "opengraph-image.jpg"), ogBuffer);
await writeFile(path.join(ogDir, "twitter-image.jpg"), ogBuffer);
console.log(`opengraph-image.jpg: 1200x630 (${Math.round(ogBuffer.length / 1024)}KB)`);

await writeFile(
  path.join(ROOT, "scripts/image-dimensions.json"),
  JSON.stringify(dimensions, null, 2),
);
console.log("Wrote scripts/image-dimensions.json");
