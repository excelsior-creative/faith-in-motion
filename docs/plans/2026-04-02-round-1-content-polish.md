# Faith In Motion — Round 1: Content Gaps + Visual Polish

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix 4 content/quality issues vs. the original site: (1) Guidance card on Faith Partners, (2) all 4 foster care stories on Foster & Adopt, (3) accurate story descriptions, (4) completely rebuild the Contact Form to match the original site's fields and the site's visual design.

**Architecture:** All changes are in `apps/app/src/` — a Next.js 14 App Router project using Tailwind CSS and shadcn/ui. No database changes needed; these are purely UI/content updates.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, react-google-recaptcha-v3

**Repo:** `excelsior-creative/faith-in-motion` | Working dir: `apps/app`

---

## Task 1: Fix Faith Partners — Replace "Support Groups" with "Guidance"

The original site (faithinmotionrivco.org/faithpartner/) has 6 collaboration types:
1. Information, 2. Donations, 3. **Guidance** (Step-by-step Guide To Fostering), 4. Volunteers, 5. Connection, 6. Celebration

The rebuild has "Support Groups" as #4 instead of "Guidance". Fix it.

**Files:**
- Modify: `apps/app/src/app/(frontend)/faith-partners/page.tsx`

**Step 1: Find the wrong entry**

In `faith-partners/page.tsx`, locate the `ways` array. The 4th entry has:
```tsx
{
  icon: Heart,
  title: "Support Groups",
  description: "Host support groups for foster and adoptive families...",
},
```

**Step 2: Replace with Guidance**

Replace that entire entry with:
```tsx
{
  icon: MapPin,
  title: "Guidance",
  description: "We support faith members by educating them on the foster process and helping them in the selection of a foster family agency (FFA). Step-by-step guidance through every stage.",
},
```

Also update the import line at the top — `MapPin` is already likely available, but check and add if missing. Replace `Heart` import with `MapPin` if `Heart` is no longer used. If `Heart` is used elsewhere in the file, just add `MapPin` to the existing import.

**Step 3: Verify locally**

```bash
cd /Users/timmy/projects/devon/faith-in-motion
pnpm dev
```

Open `http://localhost:3000/faith-partners` — confirm the 4th card now reads "Guidance" with the subtitle "Step-by-step Guide To Fostering".

**Step 4: Commit**

```bash
cd /Users/timmy/projects/devon/faith-in-motion
git add apps/app/src/app/\(frontend\)/faith-partners/page.tsx
git commit -m "fix: replace Support Groups with Guidance card on Faith Partners page"
```

---

## Task 2: Fix Foster & Adopt — Complete All 4 Stories

The original site has 4 real stories. The rebuild only has 2 (Bryanna, Lara) and uses fabricated quotes. Fix to show all 4 with accurate descriptions from the original.

**Files:**
- Modify: `apps/app/src/app/(frontend)/foster-adopt/page.tsx`

**Step 1: Update the stories array**

Find the `stories` array near the top of `foster-adopt/page.tsx`. Replace it entirely with:

```tsx
const stories = [
  {
    name: "Bryanna's Story",
    description: "Adopted as a child and is now in college",
    role: "Adoptee",
  },
  {
    name: "Lara's Story",
    description: "Currently fostering — learn about her journey",
    role: "Foster Parent",
  },
  {
    name: "Mayelli's Story",
    description: "A teenager who was recently adopted",
    role: "Adoptee",
  },
  {
    name: "Noemi's Story",
    description: "Foster mother to 100+ children over the years",
    role: "Foster Parent",
  },
];
```

**Step 2: Update the story card rendering**

Find where stories are mapped in the JSX. The current cards use `story.quote` with italic quotes. Replace each card with a simpler card that shows the name, description, and role — no fake quotes. Update the card JSX in the `{stories.map(...)}` block to:

```tsx
{stories.map((story) => (
  <div
    key={story.name}
    className="bg-[#18336B]/5 rounded-2xl p-8 border border-[#18336B]/10"
  >
    <div className="w-12 h-12 bg-[#1B6AE3] rounded-full flex items-center justify-center mb-4">
      <Heart className="h-6 w-6 text-white" />
    </div>
    <div className="font-heading text-xl text-[#18336B] mb-2">{story.name}</div>
    <p className="text-[#273C6B]/80 leading-relaxed mb-3">{story.description}</p>
    <span className="inline-block bg-[#1B6AE3]/10 text-[#1B6AE3] text-sm px-3 py-1 rounded-full">
      {story.role}
    </span>
  </div>
))}
```

Make sure `Heart` is imported from lucide-react (it should already be). Also update the grid to `md:grid-cols-2 lg:grid-cols-4` since there are now 4 cards, or keep it at `md:grid-cols-2` — either works. Keep `md:grid-cols-2`.

**Step 3: Remove the Star import if no longer used**

The `Star` icon was used for star ratings on the fake quotes. Check if `Star` is still used anywhere in the file. If not, remove it from the lucide-react import.

**Step 4: Verify**

Open `http://localhost:3000/foster-adopt` — confirm you see 4 story cards: Bryanna, Lara, Mayelli, Noemi.

**Step 5: Commit**

```bash
git add apps/app/src/app/\(frontend\)/foster-adopt/page.tsx
git commit -m "fix: add all 4 foster care stories with accurate descriptions"
```

---

## Task 3: Rebuild Contact Form — Match Original Fields + Site Design

**The two problems with the current ContactForm:**
1. **Wrong fields** — Original has: "I am interested in…" dropdown, First Name, Last Name, Faith Community Name, Email, Phone, Address, City, State, Zip, "Tell us about your interest" textarea, "How did you hear about us?" dropdown. Current form only has Name, Email, Message.
2. **Wrong design** — Current form uses a dark `zinc-900` / black tech aesthetic with glowing borders that belongs on a tech startup site, not a faith-based nonprofit. It should match the rest of the site: white background, blue/navy colors, clean rounded inputs.

**Files:**
- Modify: `apps/app/src/components/ContactForm.tsx`
- Modify: `apps/app/src/app/api/contact/route.ts` (to accept new fields)

### Step 3a: Check existing API route

```bash
cat apps/app/src/app/api/contact/route.ts
```

Note what fields it currently accepts. You'll need to update it.

### Step 3b: Update the API route

Replace the body of the route handler to accept and forward all the new form fields. Find `apps/app/src/app/api/contact/route.ts` and update the destructuring to include all fields:

```typescript
const { 
  firstName, 
  lastName, 
  faithCommunityName,
  email, 
  phone,
  address,
  city,
  state,
  zip,
  interestedIn,
  hearAboutUs,
  message, 
  recaptchaToken 
} = await req.json();
```

Forward all fields to whatever email/notification service is configured. If you find a simple `nodemailer` or `resend` or similar call, update the email body to include all fields. If you're unsure about the email destination, just log the fields and return success — the key fix is the UI.

### Step 3c: Rebuild ContactForm.tsx

Replace the entire `ContactForm.tsx` file with:

```tsx
"use client";

import { Loader2, Send } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type FormState = "idle" | "submitting" | "success" | "error";

const interestedInOptions = [
  "Becoming a Foster Parent",
  "Becoming an Adoptive Parent",
  "Becoming a Faith Partner",
  "Volunteering",
  "Donating",
  "General Information",
  "Other",
];

const hearAboutUsOptions = [
  "Faith Community",
  "Word of Mouth",
  "Social Media",
  "Web Search",
  "Other",
];

const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

export const ContactForm = () => {
  const [form, setForm] = useState({
    interestedIn: "",
    firstName: "",
    lastName: "",
    faithCommunityName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    hearAboutUs: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("submitting");
      setErrorMessage("");

      try {
        let recaptchaToken = "";
        if (executeRecaptcha) {
          recaptchaToken = await executeRecaptcha("contact_form");
        }

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, recaptchaToken }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to send message");
        }

        setFormState("success");
      } catch (err) {
        setFormState("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Something went wrong"
        );
      }
    },
    [form, executeRecaptcha]
  );

  const inputClass =
    "w-full border border-[#18336B]/20 rounded-xl px-4 py-3 text-[#273C6B] placeholder:text-[#273C6B]/40 focus:border-[#1B6AE3] focus:outline-none focus:ring-2 focus:ring-[#1B6AE3]/20 transition-all bg-white text-sm";
  const labelClass = "block text-sm font-medium text-[#18336B] mb-1.5";
  const selectClass =
    "w-full border border-[#18336B]/20 rounded-xl px-4 py-3 text-[#273C6B] focus:border-[#1B6AE3] focus:outline-none focus:ring-2 focus:ring-[#1B6AE3]/20 transition-all bg-white text-sm appearance-none";

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#1B6AE3] flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-[#18336B] mb-3">
          Message Sent!
        </h3>
        <p className="text-[#273C6B]/70 mb-8">
          We&apos;ll be in touch with you as soon as possible.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setForm({
              interestedIn: "",
              firstName: "",
              lastName: "",
              faithCommunityName: "",
              email: "",
              phone: "",
              address: "",
              city: "",
              state: "",
              zip: "",
              message: "",
              hearAboutUs: "",
            });
          }}
          className="inline-flex items-center gap-2 bg-[#1B6AE3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1F4083] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const isSubmitting = formState === "submitting";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* I am interested in */}
      <div>
        <label htmlFor="interestedIn" className={labelClass}>
          I am interested in… <span className="text-[#F94F1E]">*</span>
        </label>
        <div className="relative">
          <select
            id="interestedIn"
            name="interestedIn"
            value={form.interestedIn}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={selectClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {interestedInOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#273C6B]/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Jane"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Smith"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
      </div>

      {/* Faith Community Name */}
      <div>
        <label htmlFor="faithCommunityName" className={labelClass}>
          Faith Community Name <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="faithCommunityName"
          name="faithCommunityName"
          type="text"
          value={form.faithCommunityName}
          onChange={handleChange}
          placeholder="Your church or faith community"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@example.com"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(951) 555-0100"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Address <span className="text-[#F94F1E]">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main St"
          required
          disabled={isSubmitting}
          className={inputClass}
        />
      </div>

      {/* City / State / Zip */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className={labelClass}>
            City <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            placeholder="Riverside"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="zip" className={labelClass}>
            Zip <span className="text-[#F94F1E]">*</span>
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            value={form.zip}
            onChange={handleChange}
            placeholder="92501"
            required
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>
      </div>

      {/* State */}
      <div>
        <label htmlFor="state" className={labelClass}>
          State <span className="text-[#F94F1E]">*</span>
        </label>
        <div className="relative">
          <select
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={selectClass}
          >
            <option value="" disabled>
              Select a state
            </option>
            {usStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#273C6B]/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Tell us about your interest */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your interest
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share any questions or details about how you'd like to get involved…"
          rows={4}
          disabled={isSubmitting}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="hearAboutUs" className={labelClass}>
          How did you hear about us? <span className="text-[#F94F1E]">*</span>
        </label>
        <div className="relative">
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            value={form.hearAboutUs}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={selectClass}
          >
            <option value="" disabled>
              Select an option
            </option>
            {hearAboutUsOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#273C6B]/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {formState === "error" && (
        <p className="text-[#F94F1E] text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#1B6AE3] text-white font-medium rounded-full hover:bg-[#1F4083] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit
          </>
        )}
      </button>
    </form>
  );
};
```

**Step 3d: Verify the contact form**

Open `http://localhost:3000/contact` — verify:
- Form has all fields in the correct order
- Design matches the rest of the site (white bg, blue accents, navy labels)
- No dark/zinc styling remains
- All required fields have a red asterisk

**Step 3e: Commit**

```bash
git add apps/app/src/components/ContactForm.tsx
git commit -m "fix: rebuild contact form with correct fields and site-matching design"
```

---

## Task 4: Push and Deploy

**Step 1: Push to GitHub**

```bash
cd /Users/timmy/projects/devon/faith-in-motion
git push origin main
```

**Step 2: Verify Vercel deployment**

Vercel is connected to this repo. After push, go to `https://vercel.com/excelsior-creative/faith-in-motion` and confirm the deployment completes without errors.

**Step 3: Smoke test on Vercel**

Once deployed, check these URLs:
- `https://faith-in-motion-nine.vercel.app/faith-partners` → 4th card is "Guidance"
- `https://faith-in-motion-nine.vercel.app/foster-adopt` → 4 story cards visible (Bryanna, Lara, Mayelli, Noemi)
- `https://faith-in-motion-nine.vercel.app/contact` → Full form with all fields, white/blue design

**Step 4: Report back**

Post results in #cb-faithinmotion on Slack.

---

## Notes for Devon

- Working directory: `/Users/timmy/projects/devon/faith-in-motion`
- Dev server: `pnpm dev` from repo root (or `cd apps/app && pnpm dev`)
- These are all content/UI-only changes — no schema migrations, no Payload CMS changes needed
- The API route at `apps/app/src/app/api/contact/route.ts` may need field updates in Task 3b, but if email delivery is unclear, it's okay to just update the form fields and leave the API accepting the extra fields without breaking — don't break what works
- If `apps/app/src/app/api/contact/route.ts` doesn't exist or is minimal, skip 3b and just fix the form UI
