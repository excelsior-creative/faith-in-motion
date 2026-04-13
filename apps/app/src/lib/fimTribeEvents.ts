const TRIBE_EVENTS_URL =
  "https://faithinmotionrivco.org/wp-json/tribe/events/v1/events";

export type FimTribeEvent = {
  id: number;
  title: string;
  url: string;
  start_date: string;
  end_date: string;
  description: string;
  excerpt: string;
  featured?: boolean;
  image: TribeImage | false;
};

type TribeImage = {
  url: string;
  width?: number;
  height?: number;
  sizes?: Record<
    string,
    { url: string; width: number; height: number; "mime-type"?: string }
  >;
};

type TribeEventsResponse = {
  events: FimTribeEvent[];
};

/** Minimal HTML entity decode for WP titles (e.g. &#8211;). */
export function decodeEntities(html: string): string {
  return html
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function eventSummary(event: FimTribeEvent): string {
  const raw = event.excerpt?.trim() || stripTags(event.description || "");
  if (!raw) return "";
  return raw.length > 220 ? `${raw.slice(0, 217)}…` : raw;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

/** YYYY-MM-DD in America/Los_Angeles (Riverside County). */
export function todayYmdPacific(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const y = parts.find((p) => p.type === "year")?.value;
  const m = parts.find((p) => p.type === "month")?.value;
  const d = parts.find((p) => p.type === "day")?.value;
  return `${y}-${m}-${d}`;
}

/**
 * WordPress / Tribe store wall-clock times for local events; compare by date
 * part only in Pacific so we match the live calendar’s “upcoming”.
 */
export function isUpcomingByPacificDate(startDate: string): boolean {
  const day = startDate.slice(0, 10);
  return day >= todayYmdPacific();
}

function parseHm(time: string): { h: number; m: number } {
  const [h, m] = time.split(":").map((x) => Number(x));
  return { h: h || 0, m: m || 0 };
}

/** Format range like the live site: "May 27, 2026 @ 5:00 pm - 7:00 pm". */
export function formatEventDateRange(start: string, end: string): string {
  const [startDay, startTime] = start.split(" ");
  const [, endTime] = end.split(" ");
  if (!startDay || !startTime || !endTime) return start;

  const [y, mo, d] = startDay.split("-").map(Number);
  const { h: sh, m: sm } = parseHm(startTime);
  const { h: eh, m: em } = parseHm(endTime);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const fmt12 = (hour: number, min: number) => {
    const ampm = hour >= 12 ? "pm" : "am";
    const h12 = hour % 12 || 12;
    const mm = pad2(min);
    return `${h12}:${mm} ${ampm}`;
  };

  return `${monthNames[mo - 1]} ${d}, ${y} @ ${fmt12(sh, sm)} - ${fmt12(eh, em)}`;
}

export function pickEventImageUrl(event: FimTribeEvent): string | null {
  if (!event.image || typeof event.image !== "object") return null;
  const sizes = event.image.sizes;
  const preferred =
    sizes?.medium_large?.url ||
    sizes?.large?.url ||
    sizes?.wide?.url ||
    event.image.url;
  return preferred || null;
}

export async function fetchFimTribeEvents(): Promise<FimTribeEvent[]> {
  const url = new URL(TRIBE_EVENTS_URL);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("status", "publish");

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Tribe events API ${res.status}`);
  }

  const data = (await res.json()) as TribeEventsResponse;
  return Array.isArray(data.events) ? data.events : [];
}

export function sortByStartAsc(events: FimTribeEvent[]): FimTribeEvent[] {
  return [...events].sort((a, b) =>
    a.start_date.localeCompare(b.start_date),
  );
}
