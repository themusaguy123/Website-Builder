export interface Review {
  quote: string;
  author: string;
  featured?: boolean;
}

export const reviews: Review[] = [
  {
    quote: "DMV Appliance was great! They inspected our washer for free. Showed us what was wrong. The service tech said 'I can't let you buy that, it's too expensive.' So he fixed the part instead of replacing it.",
    author: "Thumbtack Customer",
    featured: true,
  },
  {
    quote: "I am very pleased with the work performed by Pir. My garbage disposal wasn't working. We scheduled a time to make the assessment. After deciding it was best to replace the garbage disposal, he installed a new one the very next day — a Saturday. I appreciate that the work was done quickly, efficiently, and on a Saturday! Pir was courteous and thorough.",
    author: "Lidia B.",
  },
  {
    quote: "Pir was very professional and knowledgeable. We appreciate his advice and we had our freezer fixed in the next visit. He knew right away what was the problem. He went over and beyond by helping me to get everything out and in my freezer. I will definitely recommend him to all my friends.",
    author: "Shahan H.",
  },
  {
    quote: "Prior to the Saturday appointment, I texted him what I thought the problem was. Upon arriving, he knew exactly what to do and had the part to fix my oven. My instincts were right in choosing DMV Appliance Repair!",
    author: "Constance W.",
  },
  {
    quote: "Excellent experience. They were able to schedule a visit within 24 hours. Pir was prepared and knowledgeable and was able to diagnose the problem with our Electrolux fridge very quickly. Thank you, Pir. It's working great!",
    author: "Muniza A.",
  },
  {
    quote: "First time using DMV Appliance but it won't be my last. An almost immediate response on Thumbtack, next day service, punctual, professional.",
    author: "Thumbtack Customer",
  },
];
