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
        { option: "Faridabad", value: "faridabad" },
      ],
    },
  ],
};
