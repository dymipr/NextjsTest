export default function manifest() {
  return {
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  } 
}