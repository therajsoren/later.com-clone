export * from "./produt-motive-type";
import FirstImage from "@/public/assests/later-tech-and-services.webp";
import SecondImage from "@/public/assests/later-reporting-and-analytics.webp";
import ThirdImage from "@/public/assests/later-data-driven-approach.webp";
import FourthImage from "@/public/assests/data-full-funnel-outcomes.webp";

import { NumberProps } from "@/types";
import { Card } from "./card-type";

export const numberProps: NumberProps[] = [
  {
    number: "53M",
    label: "Engagements in 2024",
  },
  {
    number: "6,900+",
    label: "Campaigns launched in 2024",
  },
  {
    number: "570+",
    label: "Brands served in 2024",
  },
];

export const ProductMotiveCard: Card[] = [
  {
    heading: "Influencer Marketing",
    description:
      "Discover creators, manage campaigns, and measure performance—start to finish.",
    buttonLabel: "Let's talk strategy",
  },
  {
    heading: "Social media management",
    description:
      "Plan, schedule, and analyze all your content in one streamlined workspace.",
    buttonLabel: "Get 14 days for free",
  },
  {
    heading: "Award–winning services",
    description:
      "Get expert support with full-service social, influencer, or strategy packages.",
    buttonLabel: "Let's talk strategy",
  },
];

export const SectionCards: Card[] = [
  {
    img: FirstImage.src,
    description:
      "Powerful platform meets award-winning services. With Later, you get the best of both worlds.",
    heading: "Tech & services",
  },
  {
    img: SecondImage.src,
    description:
      "Get the data you care about on one clean dashboard. No more crunching numbers.",
    heading: "Transparent analytics",
  },
  {
    img: ThirdImage.src,
    description:
      "Our proprietary data’s based on 10+ years of campaign and content performance—not vanity metrics.",
    heading: "Predictable performance",
  },
  {
    img: FourthImage.src,
    description:
      "Build brand awareness? Increase sales? Dial it in or do it all, and prove your investment is working.",
    heading: "Full-funnel outcomes",
  },
];

export const SocialMedia: Card[] = [
  {
    img: "assests/later-influencer-marketing-features.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
  {
    img: "assests/later-social-media-management.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
  {
    img: "assests/later-social-listening.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
  {
    img: "assests/later-link-in-bio.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
  {
    img: "assests/later-influencer-services.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
  {
    img: "assests/later-social-media-services.webp",
    heading: "Influencer Marketing",
    description:
      "Discover top talent, run campaigns and collabs, and deliver incentives.",
  },
];
