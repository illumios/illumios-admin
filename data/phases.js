// 90-Day Launch Plan — illumios education-first model
// Last reviewed: 2026-04-10
// ✅ = confirmed done | 🔴 = blocked | 🟡 = in progress | ⚠️ = pending

export const PHASES = [
  {
    name: 'Phase 1',
    subtitle: 'Foundation',
    dates: 'Apr 5 – Apr 19',
    active: true,
    // These are the tasks shown in the plan view with checkboxes.
    // Checkmarks save to localStorage (mc:plan/tasks) per browser session.
    // ✅ items below are confirmed done — check them off in the dashboard.
    tasks: [
      'illumios.com live ✅',
      'DKIM email authentication activated ✅',
      'Google Workspace email confirmed (@illumios.com) ✅',
      'A2P 10DLC brand approved ✅',
      'Maya AI Voice Receptionist live ✅',
      'GHL sub-account fully configured ✅',
      'AI Roadmap Quiz built — publish to quiz.illumios.com 🔴',
      'Rename "CleverFlo Sales Pipeline" in GHL ⚠️',
      'Wyoming LLC filed ⚠️ (waiting on Sunshine sign-off)',
      'GHL affiliate program signup ⚠️',
    ],
    notes: `Phase 1 is on track. 6 of 10 tasks are done with 9 days remaining.
Blockers: Quiz publish is blocked by GHL custom HTML element UI bug (try right-click or gear icon in toolbar).
Wyoming LLC needs Sunshine to sign — push her this week.
GHL affiliate signup takes ~10 min — do it now while GHL is open.`,
  },
  {
    name: 'Phase 2',
    subtitle: 'In-Person Funnel Ignition',
    dates: 'Apr 20 – May 4',
    active: false,
    tasks: [
      'Attend 2 BNI chapter meetings as guest (NJ + SC)',
      'Join local Chamber of Commerce (at least one market)',
      'Book first library "AI for SMB Owners" talk',
      'AI Roadmap Quiz live and tracking leads at quiz.illumios.com',
      'Book 5 coffee chats with local business owners',
      'Warm-network educational email to personal contacts (232 imported)',
      'Book 2–3 discovery calls from in-person activity',
      'A2P SMS campaign approved by carrier (needed for Maya follow-ups)',
    ],
    notes: `Focus is entirely on in-person trust-building. Do not pitch — educate.
The "Pain Point Audit" question framework (5 questions) should be your opener at every talk.
Goal: get the quiz link into as many hands as possible. Discovery calls are the conversion event.
Key question to decide by Apr 20: which market goes first, NJ (Steve) or SC (Sunshine)?`,
  },
  {
    name: 'Phase 3',
    subtitle: 'First Paying Students',
    dates: 'May 5 – Jun 3',
    active: false,
    tasks: [
      'First paid Strategy Sessions delivered ($497 each)',
      'First 3–5 Academia beta enrollments (intro $497 or full $997)',
      'GHL affiliate link placed at Module 4 of curriculum',
      'First testimonial or case study captured (with permission)',
      'Track what students struggle with — update curriculum weekly',
      'Write delivery SOP as you go (what you actually do in each session)',
      'Decide: cohort vs. self-paced — run your first experiment',
    ],
    notes: `Revenue starts here. The goal is NOT to scale yet — it is to learn.
Do 3–5 beta students at a discount if needed. Their feedback is worth more than margin right now.
GHL affiliate 40% recurring commission starts accruing once students subscribe — do NOT skip this.
If a student asks "can you just do it for me?" — that is a data point, not a service offer. Document it.`,
  },
  {
    name: 'Phase 4',
    subtitle: 'Flywheel & Academia Scale',
    dates: 'Jun 4 – Jul 4',
    active: false,
    tasks: [
      'Audit Breakfast format codified and repeatable (Steve + Sunshine can run independently)',
      'Repeat talk → quiz → discovery call → enrollment loop at 2+ new venues per month',
      'Commit to a public pricing menu (no more "it depends")',
      'illumios Academia v1 modules shipped and open for enrollment',
      'First published case study on website',
      'First GHL affiliate commission received',
      'Evaluate: hire a VA to handle scheduling + follow-up?',
    ],
    notes: `This phase is about turning the manual work of Phase 2–3 into a repeatable system.
The "Audit Breakfast" is your signature format — a 90-min workshop where attendees audit one of their own workflows live.
Pricing commitment matters here. Students refer others and they need to know what it costs.
By end of Phase 4, you should be able to answer: what is our CAC, what is our LTV, what is our referral rate?`,
  },
];
