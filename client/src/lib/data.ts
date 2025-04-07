// Partner logos placeholder data
export const partnerLogos = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" },
];

// FAQ data
export const faqItems = [
  {
    question: "How does the biometric matching work?",
    answer: "Our AI models extract unique facial features from animal photos to create biometric vectors. These vectors are compared against existing profiles to determine identity matches with a confidence score. The system is breed-agnostic and works across different lighting conditions, angles, and as animals age."
  },
  {
    question: "Are the images stored on your servers?",
    answer: "No. Images are processed in-memory upon receipt and then immediately discarded. We only store the encrypted biometric vector data, which cannot be reverse-engineered to recreate the original image. This approach enhances privacy and security while minimizing data storage requirements."
  },
  {
    question: "What species are currently supported?",
    answer: "We currently support dogs, cats, and horses with high accuracy. Additional species including rabbits, small mammals, and birds are in development and will be released in future updates. Each species uses a dedicated AI model optimized for its unique facial characteristics."
  },
  {
    question: "How accurate is the identification?",
    answer: "Our system achieves over 99.7% accuracy for dogs, 99.5% for cats, and 99.3% for horses in controlled conditions. In real-world applications, we typically see 97-99% accuracy depending on image quality. Each API response includes a confidence score to help you determine appropriate thresholds for your application."
  },
  {
    question: "Can I try the API before subscribing?",
    answer: "Yes! We offer a free sandbox environment with test credentials that allows up to 100 API calls. This is perfect for integration testing and prototyping. Contact us through the demo request form to get sandbox access, and our team will set you up within one business day."
  },
  {
    question: "How do you handle data privacy?",
    answer: "We take data privacy very seriously. We don't store raw images, only encrypted biometric vectors. Our service is GDPR and CCPA compliant, and we offer data processing agreements for enterprise customers."
  },
  {
    question: "What happens if an animal's appearance changes?",
    answer: "Our system is designed to be robust to natural aging and appearance changes. However, for significant changes (e.g., major injuries), you can update the animal's profile with a new enrollment, which will link to the original identity."
  },
  {
    question: "Can the system be fooled with a photo of a photo?",
    answer: "No. Our system includes liveness detection to prevent spoofing attempts using printed photos or screens. This is part of our anti-fraud measures to ensure the integrity of the identification process."
  },
  {
    question: "Do you provide SDKs for integration?",
    answer: "Yes, we're developing SDKs for popular languages including JavaScript, Python, Swift, and Kotlin. These will be available soon to streamline the integration process for developers."
  },
  {
    question: "What's the API rate limit?",
    answer: "Rate limits vary by plan. The Startup plan includes 5 requests per second, Scale provides 25 requests per second, and Enterprise plans can be customized based on your needs."
  },
  {
    question: "How do you handle batch processing?",
    answer: "We offer batch endpoints for enrolling or verifying multiple animals in a single API call. This is efficient for processing large sets of data and is particularly useful for shelters or large veterinary practices."
  },
  {
    question: "Is there a way to test with my own dataset?",
    answer: "Yes, enterprise clients can request a custom model evaluation using their specific dataset. Contact our sales team to discuss your requirements and arrange a tailored evaluation."
  }
];

// Pricing plans data
export const pricingPlans = [
  {
    name: "Startup",
    price: "$99",
    period: "/month",
    description: "Perfect for new apps and early-stage startups.",
    features: [
      "10,000 API calls / month",
      "5 requests per second",
      "Email support",
      "Basic analytics"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Scale",
    price: "$349",
    period: "/month",
    description: "For growing applications with active users.",
    features: [
      "50,000 API calls / month",
      "25 requests per second",
      "Priority support",
      "Advanced analytics",
      "Webhooks"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale applications and integrations.",
    features: [
      "Custom API call volume",
      "Unlimited requests per second",
      "24/7 dedicated support",
      "SLA guarantees",
      "Multi-region data residency"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

// Use cases data
export const useCases = [
  {
    title: "Pet Apps",
    icon: "device-mobile",
    description: "Track ownership, streamline onboarding, and build user trust with verified pet profiles.",
    features: [
      "Prevent fake accounts",
      "Secure pet profiles",
      "Simplified sign-up"
    ]
  },
  {
    title: "Vets & Shelters",
    icon: "building-store",
    description: "Digitize animal records and ensure continuity of care across different facilities.",
    features: [
      "Digital medical records",
      "Lost pet identification",
      "Adoption verification"
    ]
  },
  {
    title: "Breeders",
    icon: "file-text",
    description: "Verify lineage and authenticate animals to establish breed authenticity.",
    features: [
      "Pedigree verification",
      "Offspring tracking",
      "Show registration"
    ]
  },
  {
    title: "Cross-App Identity",
    icon: "switch-horizontal",
    description: "Enable seamless identity verification across different apps in your ecosystem.",
    features: [
      "Federated pet logins",
      "Shared authentication",
      "Inter-app data transfer"
    ]
  }
];

// Key features data
export const keyFeatures = [
  {
    title: "No Raw Image Storage",
    icon: "lock",
    description: "Images are processed in real-time and immediately discarded after extracting biometric data."
  },
  {
    title: "Identity Deduplication",
    icon: "users",
    description: "Automatically detect if an animal already exists in the system to prevent multiple registrations."
  },
  {
    title: "Breed-Agnostic AI",
    icon: "beaker",
    description: "Accurate across all breeds and mixes, trained on diverse datasets to avoid bias."
  },
  {
    title: "Transferable Identity",
    icon: "switch-horizontal",
    description: "Enable seamless identity verification across different apps in your ecosystem."
  }
];

// API endpoint examples
export const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/v1/enroll",
    request: `{
  "image": "base64_encoded_image",
  "species": "dog",
  "metadata": {
    "breed": "labrador",
    "age": 3
  }
}`,
    response: `{
  "status": "success",
  "animal_id": "ani_8f4s9dj20s",
  "confidence": 0.98
}`
  },
  {
    method: "GET",
    endpoint: "/api/v1/verify/{animal_id}",
    request: `{
  "image": "base64_encoded_image"
}`,
    response: `{
  "status": "success",
  "match": true,
  "confidence": 0.94,
  "animal_id": "ani_8f4s9dj20s"
}`
  }
];

// Security features
export const securityFeatures = {
  dataSecurity: [
    "ISO 27001 roadmap (Q2 2024)",
    "SOC 2 Type II compliant",
    "Regular security audits",
    "Encrypted API connections (TLS 1.3)"
  ],
  compliance: [
    "GDPR compliant",
    "CCPA compliant (California)",
    "EU-US Data Privacy Framework",
    "99.9% uptime SLA for enterprise"
  ],
  dataLifecycle: [
    {
      title: "No Image Retention",
      description: "Images are processed in memory and immediately discarded after extraction."
    },
    {
      title: "Encrypted Vectors Only",
      description: "We store only the encrypted biometric vectors, never the original images."
    },
    {
      title: "Blockchain Anchoring",
      description: "Optional cryptographic proof of identity (coming soon)."
    }
  ]
};
