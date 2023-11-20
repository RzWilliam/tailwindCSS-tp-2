/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue": "#1c85e8",
      },
      fontSize: {
        "title": "2.5rem"
      },
      fontFamily: {
        "title": "Montserrat, sans-serif"
      },
      fontWeight: {
        "title": "700"
      },
      backgroundColor: {
        "blue": "#1c85e8",
      },
      backgroundImage: {
        "city": "url('https://images.pexels.com/photos/18372783/pexels-photo-18372783/free-photo-of-mer-ville-plage-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "house": "url('https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

