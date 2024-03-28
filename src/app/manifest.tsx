export default function manifest() {
  return {
    start_url: '/',
    display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  } 
}