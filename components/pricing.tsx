import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];
const tiers = [
  {
    name: "Community",
    id: "tier-starter",
    featured: false,
    description: "Up to 20 seats",
    price: { free: true },
    mainFeatures: [
      "Easily track API Changes",
      "Documentation Hub",
      "Prevent Breaking Changes in CI",
      "API Changelogs in Pull Requests",
    ],
    cta: "Sign up",
    ctaLink: "https://app.useoptic.com",
  },
  {
    name: "Business",
    id: "tier-scale",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: { annually: "$20", monthly: "$23" },
    cta: "Book Demo",
    ctaLink: "https://calendly.com/opticlabs/optic-cloud-demo-chat",
    mainFeatures: [
      "Get Notified when API dependencies change",
      "Private Slack or Teams Channel Support",
      "Prevent Breaking Changes in CI",
      "Search APIs",
      "API Style Guides",
      "API Health Dashboard",
    ],
  },
  {
    name: "Enterprise",
    id: "tier-growth",
    featured: false,
    description: "Optic Cloud for Enterprises",
    price: { enterprise: true },
    cta: "Book Demo",
    ctaLink: "https://calendly.com/opticlabs/optic-cloud-demo-chat",
    mainFeatures: [
      "Single Sign On",
      "Premium Support",
      "Hands-on Support during integration",
      "Hands-on Support Documenting all your APIs",
      "Discover API dependencies between teams",
      "Verify each API is working as-designed",
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [frequency, setFrequency] = useState(frequencies[1]);

  return (
    <div className="isolate overflow-hidden">
      <div className="flow-root bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-6xl text-center text-5xl font-bold nx-leading-1 text-white">
              Optic Cloud is your team's API Catalogue
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
              Optic makes documentation for all your team's APIs available in the same place. When the APIs you depend on change, Optic notifies you.
            </p>
            <div className="mt-16 flex justify-center">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
              >
                <RadioGroup.Label className="sr-only">
                  Payment frequency
                </RadioGroup.Label>
                {frequencies.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked ? "bg-blue-500" : "",
                        "cursor-pointer rounded-full py-1 px-2.5"
                      )
                    }
                  >
                    <span>{option.label}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute left-1/2 -bottom-48 h-[64rem] translate-y-1/2 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:bottom-auto lg:-top-48 lg:translate-y-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div
              className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
              aria-hidden="true"
            />
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "z-10 bg-white shadow-xl ring-1 ring-gray-900/10"
                    : "bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
                  "relative rounded-2xl"
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? "text-gray-900" : "text-white",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">
                      {tier.price.free ? (
                        <>
                          <p
                            className={classNames(
                              tier.featured ? "text-gray-900" : "text-white",
                              "text-2xl font-bold tracking-tight"
                            )}
                          >
                            Free up to 20 users
                          </p>
                        </>
                      ) : tier.price.enterprise ? (
                        <>
                          <p
                            className={classNames(
                              tier.featured ? "text-gray-900" : "text-white",
                              "text-2xl font-bold tracking-tight"
                            )}
                          >
                            Contact Us
                          </p>
                        </>
                      ) : (
                        <>
                          <p
                            className={classNames(
                              tier.featured ? "text-gray-900" : "text-white",
                              "text-4xl font-bold tracking-tight"
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm leading-5">
                            <p
                              className={
                                tier.featured ? "text-gray-900" : "text-white"
                              }
                            >
                              per user
                            </p>
                            <p
                              className={
                                tier.featured
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }
                            >{`Billed ${frequency.value}`}</p>
                          </div>
                        </>
                      )}
                    </div>
                    <a
                      target="_blank"
                      href={tier.ctaLink}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.featured
                          ? "bg-blue-800 shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600"
                          : "bg-white/10 hover:bg-white/20 focus-visible:outline-white",
                        "rounded-md py-2 px-3 text-center text-sm leading-6 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      )}
                    >
                      {tier.cta}
                    </a>
                  </div>
                  <div className="mt-8 flow-root sm:mt-10 pb-10">
                    <ul
                      role="list"
                      className={classNames(
                        tier.featured
                          ? "divide-gray-900/5 border-gray-900/5 text-gray-600"
                          : "divide-white/5 border-white/5 text-white",
                        "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                      )}
                    >
                      {tier.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature} className="flex gap-x-3 py-2">
                          <CheckIcon
                            className={classNames(
                              tier.featured ? "text-blue-600" : "text-gray-500",
                              "h-6 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                          {mainFeature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
