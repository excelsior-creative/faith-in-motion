import React from "react";

const stats = [
  { value: "100+", label: "Faith Communities", description: "United across Riverside County" },
  { value: "2013", label: "Founded", description: "By Riverside County DPSS" },
  { value: "1000s", label: "Children Served", description: "In foster care each year" },
  { value: "24/7", label: "Support Available", description: "For foster families" },
];

export const ImpactStats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-heading text-[#1B6AE3] text-sm uppercase tracking-widest mb-3">
            Our Impact
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-[#18336B]">
            We Are A Riverside County Faith Program
          </h2>
          <p className="mt-4 text-[#273C6B]/70 max-w-2xl mx-auto">
            The Department of Public Social Services (DPSS) instituted the Faith In Motion 
            Collaborative in 2013. It has grown in size, outreach, and resources with faith 
            partners who have provided support activities across the county.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-6 rounded-2xl bg-[#18336B]/5 border border-[#18336B]/10"
            >
              <div className="font-heading text-4xl md:text-5xl text-[#1B6AE3] mb-2">
                {stat.value}
              </div>
              <div className="font-heading text-[#18336B] font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-[#273C6B]/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
