export function isValidURL(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function normalizeURL(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function runAudit(inputURL) {
  const url = normalizeURL(inputURL);

  if (!isValidURL(url)) {
    throw new Error("Invalid URL provided");
  }

  let score = 100;
  const issues = [];

  if (!url.startsWith("https://")) {
    const deduction = random(10, 20);
    score -= deduction;
    issues.push(`SSL Certificate warning: Insecure protocol detected (-${deduction})`);
  }

  if (url.length < 15) {
    const deduction = random(3, 8);
    score -= deduction;
    issues.push(`URL structure too short for optimal indexing (-${deduction})`);
  }

  const checks = [
    {
      message: "Missing JSON-LD or Microdata (Schema.org) modules",
      min: 10,
      max: 20,
    },
    {
      message: "No FAQ schema detected; missing rich snippet slots",
      min: 5,
      max: 15,
    },
    {
      message: "Heading hierarchy failure: Multiple H1 tags or skip-levels",
      min: 5,
      max: 12,
    },
    {
      message: "Semantic HTML debt: Excessive <div> nesting detected",
      min: 5,
      max: 10,
    },
    {
      message: "Missing ARIA descriptors in primary navigation nodes",
      min: 4,
      max: 8,
    }
  ];

  checks.forEach((check) => {
    if (Math.random() > 0.3) {
      const deduction = random(check.min, check.max);
      score -= deduction;
      issues.push(`${check.message} (-${deduction})`);
    }
  });

  score = Math.max(5, Math.min(100, score));

  return { score, issues };
}

export async function runMockAudit(inputURL) {
  await new Promise((resolve) => setTimeout(resolve, random(600, 1400)));
  return runAudit(inputURL);
}


