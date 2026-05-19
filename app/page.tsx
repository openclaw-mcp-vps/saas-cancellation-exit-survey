export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          For SaaS Founders &amp; Customer Success Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Capture why customers cancel with{" "}
          <span className="text-[#58a6ff]">smart surveys</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed a context-aware cancellation flow in minutes. CancelSurvey analyzes usage patterns to ask the right questions at the right time — so you can fix churn before it compounds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $15 / mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <p className="mt-5 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🎯", title: "Context-aware questions", desc: "Questions adapt based on the user's actual usage data, not generic templates." },
          { icon: "📊", title: "Analytics dashboard", desc: "See cancellation reasons at a glance and spot trends before they hurt revenue." },
          { icon: "⚡", title: "One-line embed", desc: "Drop a single script tag into your app. Works with any stack in under 5 minutes." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited surveys & responses",
              "Context-aware question engine",
              "Analytics dashboard",
              "Embeddable widget (any stack)",
              "Email digest of cancellation reasons",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the context-aware question engine work?",
              a: "When a user initiates cancellation, CancelSurvey receives their usage metadata (features used, session frequency, plan age) via your embed snippet. It then selects the most relevant questions from your configured library — no manual branching logic needed."
            },
            {
              q: "How do I embed the survey in my app?",
              a: "Add one script tag to your app and call window.CancelSurvey.open({ userId, usageData }) when the user clicks your cancel button. The widget handles the rest and posts responses to your dashboard."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. You can cancel from your billing portal at any time. You'll retain access until the end of your billing period with no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        <p>© {new Date().getFullYear()} CancelSurvey. Built for SaaS teams who care about retention.</p>
      </footer>
    </main>
  );
}
