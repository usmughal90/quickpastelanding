
interface Feature {
  name: string;
  p1: boolean | string;
  p2: boolean | string;
  p3: boolean | string;
}

export default function ComparisonTable() {
  const features: Feature[] = [
    { name: "clipboard history list", p1: true, p2: false, p3: true },
    { name: "saves multiple copied list", p1: true, p2: false, p3: true },
    {
      name: " supports text and images ",
      p1: true,
      p2: "Last Item Only",
      p3: true,
    },
    { name: " reuse save clipboard itens ", p1: true, p2: false, p3: true },
    { name: "paste without switching apps", p1: true, p2: false, p3: true },
    { name: "face id lock for clipboard data", p1: true, p2: false, p3: false },
    { name: "no account required", p1: true, p2: true, p3: false },
    { name: " no mandatory cloud sync", p1: true, p2: true, p3: false },
    {
      name: "private  focused clipboard storage",
      p1: true,
      p2: "basic",
      p3: false,
    },

    { name: "light weight clipboard utility", p1: true, p2: "___", p3: false },
  ];

  return (
    <section id="choose-us" className="bg-white dark:bg-gray-950 py-20 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-900 capitalize">
      <div className="max-w-6xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 text-center dark:text-white mb-6 tracking-tight">
            Why Choose Quick Paste?
          </h2>
        </div>

        <div className="overflow-x-auto mt-20 rounded-t-2xl">
          <table className="w-full min-w-[800px] border-collapse bg-gray-100 dark:bg-gray-950">
            <thead className="bg-primary ">
              <tr>
                {/* <th className="p-4 text-left text-xl font-bold text-white dark:text-gray-200 w-1/4">
                  Features
                </th> */}

                {/* Product Badges */}
                {[
                    "Features",
                  "quick paste",
                  " default ios clipboard",
                  "other apps",
                ].map((product: string, i: number) => (
                  <th key={i} className={`p-4 text-center w-1/4 ${i === 0 ? 'text-left': 'text-center'}`}>
                    <div className="bg-transparent  dark:border-white py-3 px-6 text-white dark:text-white font-bold ">
                      {product}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature: Feature, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="p-6 text-left font-medium text-gray-600 dark:text-gray-400 text-lg">
                    {feature.name}
                  </td>

                  {/* Product Columns Logic */}
                  {[feature.p1, feature.p2, feature.p3].map(
                    (status: boolean | string, i: number) => (
                      <td key={i} className="p-6 text-center">
                        {status === true ? (
                          /* Tick: Border White, Icon White */
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-green-600 dark:border-white flex items-center justify-center text-white dark:text-white">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : status === false ? (
                          /* Cross: Border White, Icon White */
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full  dark:border-white flex items-center justify-center text-red-600 dark:text-white">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          /* Text Ratings/Support: White Text */
                          <span className="text-black dark:text-white font-medium">
                            {status}
                          </span>
                        )}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
