import type { FimTribeEvent } from "@/lib/fimTribeEvents";
import {
  decodeEntities,
  eventSummary,
  fetchFimTribeEvents,
  formatEventDateRange,
  isUpcomingByPacificDate,
  sortByStartAsc,
} from "@/lib/fimTribeEvents";
import {
  ArrowRight,
  Calendar,
  CalendarPlus,
  Clock,
  ExternalLink,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Faith In Motion",
  description:
    "Upcoming foster care and adoption information events in Riverside County. Register on Eventbrite; calendar matches faithinmotionrivco.org.",
};

export const revalidate = 300;

const WP_EVENTS = "https://faithinmotionrivco.org/events/";
const WP_ICAL = "https://faithinmotionrivco.org/events/?ical=1";
/** Google Calendar “Add by URL” (public iCal feed). */
const GOOGLE_CAL_SUBSCRIBE = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(WP_ICAL)}`;
const OUTLOOK_WEB_SUBSCRIBE = `https://outlook.live.com/calendar/0/addfromweb?url=${encodeURIComponent(WP_ICAL)}`;

function isSpanishTitle(title: string): boolean {
  return /evento|español|información sobre/i.test(title);
}

function EventCard({ event }: { event: FimTribeEvent }) {
  const title = decodeEntities(event.title);
  const summary = eventSummary(event);
  const spanish = isSpanishTitle(title);
  const range = formatEventDateRange(event.start_date, event.end_date);
  const isEb =
    /eventbrite\.com/i.test(event.url) || /\.eventbrite\.com/i.test(event.url);

  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow hover:shadow-md ${
        event.featured === true ? "border-[#1B6AE3]/35" : "border-[#18336B]/8"
      }`}
    >
      <div className="flex min-w-0 flex-col p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {event.featured === true ? (
            <span className="inline-block rounded-full bg-[#FCDB38] px-3 py-1 font-heading text-xs text-[#18336B]">
              Featured
            </span>
          ) : null}
          {spanish ? (
            <span className="inline-block rounded-full bg-[#18336B]/10 px-3 py-1 font-heading text-xs text-[#18336B]">
              Español
            </span>
          ) : (
            <span className="inline-block rounded-full bg-[#18336B]/10 px-3 py-1 font-heading text-xs text-[#18336B]">
              English
            </span>
          )}
        </div>

        <h2 className="font-heading text-xl text-balance text-[#18336B] md:text-2xl">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1B6AE3] hover:underline"
          >
            {title}
          </a>
        </h2>

        <p className="mt-3 text-sm text-[#273C6B]/75">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 shrink-0 text-[#1B6AE3]" aria-hidden />
            <time dateTime={event.start_date}>{range}</time>
          </span>
        </p>

        {summary ? (
          <p className="mt-4 text-pretty leading-relaxed text-[#273C6B]/80">
            {summary}
          </p>
        ) : null}

        <div className="mt-6">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1B6AE3] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1F4083]"
          >
            {isEb ? "Register on Eventbrite" : "Event details"}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function EventsPage() {
  let all: FimTribeEvent[] = [];
  let loadError: string | null = null;

  try {
    all = sortByStartAsc(await fetchFimTribeEvents());
  } catch {
    loadError =
      "We couldn’t load the calendar from faithinmotionrivco.org. You can still open the live events page below.";
  }

  const upcoming = all.filter((e) => isUpcomingByPacificDate(e.start_date));
  const past = all
    .filter((e) => !isUpcomingByPacificDate(e.start_date))
    .sort((a, b) => b.start_date.localeCompare(a.start_date))
    .slice(0, 6);

  return (
    <div>
      <section className="relative overflow-hidden bg-[#18336B] py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="mb-4 font-heading text-sm uppercase tracking-widest text-[#FCDB38]">
            Community events
          </p>
          <h1 className="mb-6 font-heading text-4xl text-balance text-white md:text-5xl">
            Events
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-[#CAD9F5]">
            All events are free and open to the community.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="border-b border-[#18336B]/10 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-lg text-[#18336B]">
                Subscribe to the calendar
              </h2>
              <p className="mt-1 max-w-xl text-pretty text-sm text-[#273C6B]/70">
                Add updates to your calendar app, or open list / month / day
                views on the main site.
              </p>
            </div>
            <nav
              aria-label="Calendar subscriptions"
              className="flex flex-wrap gap-2"
            >
              <a
                href={GOOGLE_CAL_SUBSCRIBE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#18336B]/15 bg-[#18336B]/5 px-4 py-2 text-sm font-medium text-[#18336B] transition-colors hover:bg-[#18336B]/10"
              >
                <CalendarPlus className="h-4 w-4" aria-hidden />
                Google Calendar
              </a>
              <a
                href={WP_ICAL}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#18336B]/15 bg-[#18336B]/5 px-4 py-2 text-sm font-medium text-[#18336B] transition-colors hover:bg-[#18336B]/10"
              >
                iCalendar (.ics)
              </a>
              <a
                href={OUTLOOK_WEB_SUBSCRIBE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#18336B]/15 bg-[#18336B]/5 px-4 py-2 text-sm font-medium text-[#18336B] transition-colors hover:bg-[#18336B]/10"
              >
                Outlook
              </a>
              <a
                href={WP_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#18336B]/15 bg-[#18336B]/5 px-4 py-2 text-sm font-medium text-[#18336B] transition-colors hover:bg-[#18336B]/10"
              >
                Full calendar
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 md:px-8">
          {loadError ? (
            <div
              className="rounded-2xl border border-amber-200/80 bg-amber-50 px-6 py-5 text-pretty text-[#273C6B]"
              role="alert"
            >
              <p className="font-medium text-[#18336B]">{loadError}</p>
              <a
                href={WP_EVENTS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-medium text-[#1B6AE3] hover:underline"
              >
                Open live events calendar
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ) : null}

          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-heading text-2xl text-[#18336B] md:text-3xl">
                Upcoming
              </h2>
              <p className="text-sm text-[#273C6B]/60">
                {upcoming.length} {upcoming.length === 1 ? "event" : "events"}{" "}
                found
              </p>
            </div>

            {upcoming.length === 0 && !loadError ? (
              <div className="rounded-2xl border border-[#18336B]/10 bg-white px-8 py-14 text-center">
                <Calendar className="mx-auto mb-4 h-12 w-12 text-[#1B6AE3]/30" />
                <p className="font-heading text-xl text-[#18336B]">
                  No upcoming events listed
                </p>
                <p className="mx-auto mt-2 max-w-md text-pretty text-[#273C6B]/65">
                  Check the full calendar for new dates and past sessions.
                </p>
                <a
                  href={WP_EVENTS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#18336B] px-6 py-3 font-medium text-white transition-colors hover:bg-[#1F4083]"
                >
                  View faithinmotionrivco.org/events
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <ul className="space-y-6">
                {upcoming.map((event) => (
                  <li key={event.id}>
                    <EventCard event={event} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {past.length > 0 ? (
            <div>
              <h2 className="mb-6 font-heading text-2xl text-[#18336B] md:text-3xl">
                Recent past events
              </h2>
              <ul className="space-y-6 opacity-90">
                {past.map((event) => (
                  <li key={event.id}>
                    <EventCard event={event} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="text-center text-xs text-[#273C6B]/50">
            Calendar data from{" "}
            <a
              href="https://faithinmotionrivco.org/"
              className="underline hover:text-[#18336B]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faith In Motion
            </a>{" "}
            (The Events Calendar). Registration opens on Eventbrite.
          </p>
        </div>
      </section>

      <section className="bg-[#18336B] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="mb-4 font-heading text-3xl text-white">
            Want to host an event at your church?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-pretty text-[#CAD9F5]">
            Faith In Motion can bring an informational event to your faith
            community. Contact us to schedule a presentation about foster care
            and adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9512285553"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#18336B] transition-colors hover:bg-[#FCDB38]"
            >
              <Phone className="h-4 w-4" />
              (951) 228-5553
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#18336B]"
            >
              Request an event
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
