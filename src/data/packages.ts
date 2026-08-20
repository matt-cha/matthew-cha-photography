export type PackageItem = {
  id: number;
  title: string;
  imageId: number;
  price: number;
  description: string;
  features: string[];
};

export const packages: PackageItem[] = [
  {
    id: 1,
    title: "Wedding Coverage - 10 hours",
    imageId: 35, // jake-jenny-brides
    price: 3700,
    description:
      "The 10 hour package is for couples who want a full day of coverage without compromise, from the early morning preparations to the final dance. This extended coverage allows for a relaxed timeline, more candid moments, and flexibility for travel or multiple locations throughout the day.",
    features: [
      "10 hours of continuous photography coverage",
      "Complimentary engagement session",
      "Two photographers capturing every moment in different perspectives and angles",
      "Pre-wedding consultation to plan your timeline, vision, and build a custom shot list, plus posing and style guidance",
      "Professionally edited, high-resolution images delivered via online gallery",
      "Full print and personal usage rights and reproduction release of photos delivered (print release and reproduction)",
      "8-10 week estimated delivery time",
    ],
  },
  {
    id: 2,
    title: "Wedding Coverage - 8 hours",
    imageId: 92, // josh-jessica-dance-floor
    price: 3000,
    description:
      "The 8 hour package is designed to cover a standard wedding day and is the most common option with ample time for pre-ceremony, getting ready, first look, ceremony, golden hour portraits, and reception coverage.",
    features: [
      "8 hours of continuous photography coverage",
      "75% off an engagement session",
      "Two photographers capturing every moment in different perspectives and angles",
      "Pre-wedding consultation to plan your timeline, vision, and build a custom shot list, plus posing and style guidance",
      "Professionally edited, high-resolution images delivered via online gallery",
      "Full print and personal usage rights and reproduction release of photos delivered (print release and reproduction)",
      "8-10 week estimated delivery time",
    ],
  },
  {
    id: 3,
    title: "Wedding Coverage - 6 hours",
    imageId: 67, // chris-janice-performance
    price: 2500,
    description:
      "The 6 hour package captures the key moments of the wedding day — ceremony, portraits, and reception highlights — ideal for smaller timelines or intimate celebrations.",
    features: [
      "6 hours of continuous photography coverage",
      "50% off an engagement session",
      "Two photographers capturing every moment in different perspectives and angles",
      "Pre-wedding consultation to plan your timeline, vision, and build a custom shot list, plus posing and style guidance",
      "Professionally edited, high-resolution images delivered via online gallery",
      "Full print and personal usage rights and reproduction release of photos delivered (print release and reproduction)",
      "8-10 week estimated delivery time",
    ],
  },
  {
    id: 4,
    title: "Engagement Session",
    imageId: 52, // jake-jenny-engagement-hills
    price: 500,
    description:
      "Engagement sessions are a relaxed, personal shoot to preview your wedding-day photography, build rapport with the photographer, and help you feel comfortable in front of the camera.",
    features: [
      "Professionally edited, high-resolution images via online gallery",
      "1 hour photoshoot at 1-2 locations of your choice with style and location guidance",
      "Full print and personal usage rights and reproduction release of photos delivered (print release and reproduction)",
    ],
  },
  {
    id: 5,
    title: "Extra Hour of Coverage",
    imageId: 73, // ryan-jessica-send-off
    price: 400,
    description:
      "Extra hours can be added on the wedding day if you need more time for coverage — perfect for extended receptions, extra portraits, or travel between locations.",
    features: [
      "Book additional coverage in hourly increments",
      "Flexible on-the-day booking when available",
    ],
  },
];
