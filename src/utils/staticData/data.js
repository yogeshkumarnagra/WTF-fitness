export const data = {
  navFields: [
    { name: "Fitness", href: "fitness" },
    { name: "Nutrition", href: "nutrition" },
    { name: "Gyms", href: "gym" },
    { name: "Become WTF Partner", href: "becomeWTFpartner" },
    { name: "About us", href: "about" },
    { name: "Login", href: "login" },
  ],
  searchFields: [
    {
      name: "Location",
      type: "text",
      inputField: [{ placeholder: "Enter Location" }],
    },
    {
      name: "Price",
      type: "number",
      inputField: [{ placeholder: "Min" }, { placeholder: "Max" }],
    },
    {
      name: "Cities",
      type: "select",
      selectFields: [
        { option: "select City", value: "" },
        { option: "Noida", value: "noida" },
        { option: "Gurgao", value: "gurgao" },
        { option: "New Delhi", value: "new-delhi" },
        { option: "Gazibad", value: "gaziabad" },
      ],
    },
  ],
};

export const gymsData = [
  {
    name: "WTF : Hybrid Gym",
    price: 3000,
    time: "for 3 months",
    available: true,
    free: true,
    address: "sec-23, noida UP",
    distance: "2KM away",
  },
  {
    name: "WTF : Militry Gym",
    price: 3500,
    time: "for 3 months",
    available: true,
    free: true,
    address: "sec-22, Gurgaon Haryana",
    distance: "8KM away",
  },
];

export const footerData = {
  fields: [
    {
      heading: "Quick",
      links: [
        "About",
        "FAQs",
        "Privacy Policy",
        "WTF in News",
        "Term & condition",
        "Refund & cancellation",
      ],
    },
    { heading: "Explore", links: ["Arenas", "Studios", "Nutrition"] },
    {
      heading: "Contact",
      links: ["Address 1", "Address 2", "Mobile No.", "Email"],
    },
  ],
};
