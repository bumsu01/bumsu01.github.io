/** @type {import('tailwindcss').Config} */

module.exports = {
  // 템플릿 파일의 경로 설정
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
