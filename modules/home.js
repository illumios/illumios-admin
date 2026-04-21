const ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 12 4l8 8.5"/><path d="M6.5 10.5V20h11V10.5"/><path d="M10 20v-5h4v5"/></svg>`;

const HERO_METRICS = [
  { value: '4-8', label: 'Founding seats', detail: 'Healthy Cohort 1 range from the PRD' },
  { value: '$497', label: 'Default price', detail: 'Founding-member pricing anchor' },
  { value: '4', label: 'Live sessions', detail: 'Delivered over a focused two-week sprint' },
  { value: '30 days', label: 'Outcome horizon', detail: 'Students leave with a practical action plan' },
];

const PIPELINE_STAGES = [
  {
    phase: 'Capture',
    title: 'Priority list and application intake',
    status: 'Needs live handoff',
    detail: 'Website flow is coded, but the live GHL webhook and production env vars still need to be wired.',
    tone: 'warning',
  },
  {
    phase: 'Qualify',
    title: 'Quiz fit and use-case diagnosis',
    status: 'Ready to tighten',
    detail: 'Qualify for business fit, admin friction, and one meaningful first AI workflow.',
    tone: 'neutral',
  },
  {
    phase: 'Convert',
    title: 'Enrollment call pipeline',
    status: 'Needs visible tracking',
    detail: 'Admin should highlight who is qualified, booked, rescheduled, ghosted, or ready to close.',
    tone: 'warning',
  },
  {
    phase: 'Deliver',
    title: 'Cohort attendance and support',
    status: 'Prototype focus',
    detail: 'Track attendance, replays, between-session support, and office-hour follow-up in one place.',
    tone: 'accent',
  },
  {
    phase: 'Prove',
    title: 'Feedback and testimonial capture',
    status: 'Must be operationalized',
    detail: 'Strong student outcomes should immediately route into feedback, quote requests, and story assets.',
    tone: 'success',
  },
];

const PRIORITIES = [
  {
    tag: 'Now',
    title: 'Finish the real lead handoff',
    body: 'Get the website workflow talking to the live GHL endpoint so demand capture stops being prototype-only.',
  },
  {
    tag: 'This week',
    title: 'Make enrollment status legible',
    body: 'Show who is quiz-qualified, booked, enrolled, and waiting on follow-up without digging across tools.',
  },
  {
    tag: 'This week',
    title: 'Lock Cohort 1 delivery readiness',
    body: 'Confirm live delivery tooling, founder rehearsal flow, and the core worksheet/session assets.',
  },
  {
    tag: 'Ongoing',
    title: 'Collect proof while you deliver',
    body: 'Feedback, attendance, visible wins, and testimonials should be treated like first-class operations work.',
  },
];

const READINESS = [
  {
    area: 'Enrollment path',
    state: 'Partially ready',
    tone: 'warning',
    detail: 'Application -> fit quiz -> enrollment call is defined, but live operational handoff still needs hardening.',
  },
  {
    area: 'Session delivery',
    state: 'Direction locked',
    tone: 'accent',
    detail: 'Four live sessions over two weeks is clear. The remaining choice is final delivery tooling and rehearsal confidence.',
  },
  {
    area: 'Student support',
    state: 'Needs operator view',
    tone: 'neutral',
    detail: 'Between-session support, office hours, replay access, and transfer edge cases need one visible home.',
  },
  {
    area: 'Evidence capture',
    state: 'High leverage',
    tone: 'success',
    detail: 'Feedback forms, testimonials, and transformation notes should flow directly from attendance and outcomes.',
  },
];

const SESSION_PLAN = [
  {
    week: 'Session 1',
    title: 'Find your first AI wins',
    outcome: 'Each participant leaves with three practical use cases worth testing.',
  },
  {
    week: 'Session 2',
    title: 'Use the right tools and prompts',
    outcome: 'Students build a usable prompt stack around one selected workflow.',
  },
  {
    week: 'Session 3',
    title: 'Create one working workflow',
    outcome: 'The cohort leaves with one repeatable implementation win, not just theory.',
  },
  {
    week: 'Session 4',
    title: 'Keep the momentum for 30 days',
    outcome: 'Every student finishes with a concrete action plan and next-step confidence.',
  },
];

const SIGNALS = [
  {
    label: 'Best conversion signal',
    copy: 'Qualified prospects who can name one repetitive task and one time-saving goal are the strongest Cohort 1 fit.',
  },
  {
    label: 'Attendance risk',
    copy: 'Booked buyers without onboarding confirmation or calendar commitment should be surfaced before session week starts.',
  },
  {
    label: 'Story capture rule',
    copy: 'If a student reports a visible win, route them to quote capture while the language is still fresh.',
  },
  {
    label: 'Ops blind spot',
    copy: 'Without live GHL visibility, lead flow and follow-up can look calmer than they really are.',
  },
];

const WORKSPACES = [
  {
    href: '#/tasks',
    kicker: 'Execution',
    title: 'Tasks',
    copy: 'Run blockers, follow-ups, and next actions tied to launch work.',
  },
  {
    href: '#/plan',
    kicker: 'Trajectory',
    title: '90-Day Plan',
    copy: 'Keep the launch sequence visible so day-to-day tasks do not drift off priority.',
  },
  {
    href: '#/docs',
    kicker: 'Source of truth',
    title: 'Docs Library',
    copy: 'Reference the PRD, operating directives, and synced planning material from one surface.',
  },
  {
    href: '#/business-plan',
    kicker: 'Offer design',
    title: 'Business Plan',
    copy: 'Review positioning, pricing, and curriculum assumptions behind the program.',
  },
];

function esc(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function renderTonePill(text, tone) {
  return `<span class="academy-pill academy-pill-${tone}">${esc(text)}</span>`;
}

function render() {
  return `
    <div class="academy-dashboard">
      <section class="academy-hero">
        <div class="academy-hero-copy">
          <div class="academy-kicker">Illumios Academia Admin Prototype</div>
          <h2 class="academy-hero-title">A command center built around enrollment, cohort delivery, and proof of outcomes.</h2>
          <p class="academy-hero-text">
            This prototype reorganizes the dashboard around the actual launch spine for <strong>Illumios Academia</strong>:
            lead capture, qualification, booked calls, enrollment, attendance, feedback, and testimonial capture.
          </p>

          <div class="academy-action-row">
            <a class="academy-action academy-action-primary" href="#/tasks">Open Launch Tasks</a>
            <a class="academy-action" href="#/docs">Review Source Docs</a>
            <a class="academy-action" href="#/plan">See 90-Day Plan</a>
          </div>

          <div class="academy-metric-grid">
            ${HERO_METRICS.map((metric) => `
              <article class="academy-metric-card">
                <strong>${esc(metric.value)}</strong>
                <span>${esc(metric.label)}</span>
                <p>${esc(metric.detail)}</p>
              </article>
            `).join('')}
          </div>
        </div>

        <aside class="academy-side-panel">
          <div class="academy-panel-block">
            <div class="academy-panel-label">Prototype posture</div>
            <h3>Operationally honest by default</h3>
            <p>Use seeded launch assumptions until the private GHL integration is ready. The interface should show what is live, what is blocked, and what still needs a human decision.</p>
          </div>

          <div class="academy-rule-list">
            <div class="academy-rule-item">
              <span>Priority</span>
              <strong>Launch and fill Cohort 1</strong>
            </div>
            <div class="academy-rule-item">
              <span>Primary CTA</span>
              <strong>Apply now</strong>
            </div>
            <div class="academy-rule-item">
              <span>Core promise</span>
              <strong>One practical workflow in 30 days</strong>
            </div>
            <div class="academy-rule-item">
              <span>Admin job</span>
              <strong>Make the next operator move obvious</strong>
            </div>
          </div>
        </aside>
      </section>

      <section class="academy-section">
        <div class="academy-section-head">
          <div>
            <div class="academy-kicker">Launch spine</div>
            <h3>Track the entire path from demand to proof</h3>
          </div>
          ${renderTonePill('Prototype shaped from PRD + tasks + operating directives', 'neutral')}
        </div>

        <div class="academy-pipeline-grid">
          ${PIPELINE_STAGES.map((stage) => `
            <article class="academy-stage-card academy-stage-${esc(stage.tone)}">
              <div class="academy-stage-top">
                <span class="academy-stage-phase">${esc(stage.phase)}</span>
                ${renderTonePill(stage.status, stage.tone)}
              </div>
              <h4>${esc(stage.title)}</h4>
              <p>${esc(stage.detail)}</p>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="academy-section academy-two-column">
        <div class="academy-column">
          <div class="academy-section-head">
            <div>
              <div class="academy-kicker">Critical now</div>
              <h3>What the dashboard should keep in front of the team</h3>
            </div>
          </div>

          <div class="academy-priority-list">
            ${PRIORITIES.map((item) => `
              <article class="academy-priority-card">
                <div class="academy-priority-tag">${esc(item.tag)}</div>
                <h4>${esc(item.title)}</h4>
                <p>${esc(item.body)}</p>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="academy-column">
          <div class="academy-section-head">
            <div>
              <div class="academy-kicker">Readiness</div>
              <h3>Cohort operations that need a visible home</h3>
            </div>
          </div>

          <div class="academy-readiness-list">
            ${READINESS.map((item) => `
              <article class="academy-readiness-card">
                <div class="academy-readiness-top">
                  <h4>${esc(item.area)}</h4>
                  ${renderTonePill(item.state, item.tone)}
                </div>
                <p>${esc(item.detail)}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="academy-section academy-two-column academy-two-column-wide">
        <div class="academy-column academy-column-large">
          <div class="academy-section-head">
            <div>
              <div class="academy-kicker">Delivery rhythm</div>
              <h3>Structure the dashboard around student outcomes, not just internal tasks</h3>
            </div>
          </div>

          <div class="academy-session-list">
            ${SESSION_PLAN.map((session) => `
              <article class="academy-session-card">
                <div class="academy-session-week">${esc(session.week)}</div>
                <div class="academy-session-body">
                  <h4>${esc(session.title)}</h4>
                  <p>${esc(session.outcome)}</p>
                </div>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="academy-column">
          <div class="academy-section-head">
            <div>
              <div class="academy-kicker">Operator signals</div>
              <h3>The small things that should never go missing</h3>
            </div>
          </div>

          <div class="academy-signal-list">
            ${SIGNALS.map((signal) => `
              <article class="academy-signal-card">
                <h4>${esc(signal.label)}</h4>
                <p>${esc(signal.copy)}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="academy-section">
        <div class="academy-section-head">
          <div>
            <div class="academy-kicker">Route map</div>
            <h3>Existing modules that this prototype should connect together</h3>
          </div>
        </div>

        <div class="academy-workspace-grid">
          ${WORKSPACES.map((workspace) => `
            <a class="academy-workspace-card" href="${esc(workspace.href)}">
              <span>${esc(workspace.kicker)}</span>
              <strong>${esc(workspace.title)}</strong>
              <p>${esc(workspace.copy)}</p>
            </a>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

export default {
  id: 'home',
  title: 'Academia Command',
  icon: ICON,
  showInSidebar: true,

  async mount(el) {
    el.innerHTML = render();

    const btn = document.getElementById('customize-btn');
    if (btn) {
      btn.style.display = 'none';
      btn.textContent = 'Customize';
      btn.classList.remove('active');
    }
  },

  unmount() {
    const btn = document.getElementById('customize-btn');
    if (btn) {
      btn.style.display = 'none';
      btn.textContent = 'Customize';
      btn.classList.remove('active');
    }
  },
};
