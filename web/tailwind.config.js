/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Đảm bảo Tailwind quét các tệp của flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')({
      datatables: true,
  }),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
