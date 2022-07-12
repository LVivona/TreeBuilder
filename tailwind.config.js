/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "Retro-light-blue" : "#2de2e6",
        "Retro-darl-blue" : "#035ee8",
        "Retro-light-pink" : "#f6019d",
        "Retro-dark-pink" : "#d40078",
        "Retro-purple" : "#9700cc",
        "Matriax8C-white" : "#f0f0dc",
        "Matriax8C-yellow" : "#fac800",
        "Matriax8C-green" : "#10c840",
        "Matriax8C-blue" : "#00a0c8",
        "Matriax8C-red" : "#d24040",
        "Matriax8C-brown" : "#a0694b",
        "Matriax8C-gray" : "#736464",
        "Matriax8C-black" : "#101820",
      },
      animation :{
        "FadeMeIn" : "fade-out ease 1s",
        "FadeMeOut": "fade-in ease 2s",
      },
      keyframes : {
        "fade-out" : {
          "0%" : { opacity : '1' },
          "100%" : { opacity : '0' }
        },
        "fade-in" : {
          "0%" : { opacity : '0' },
          "100%" : { opacity : '1' }
        },
      }
    },
  },
  plugins: [],
}


/*
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}*/