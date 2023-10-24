import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    theme: {
      fontFamily: {
        sans: [
          '"Inter var", sans-serif,serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
    extend: {
      colors: {
        green: {
      
          dat: '#00f260',
         
        },
      }
    },
  },
  
  plugins: [],
}
export default config
