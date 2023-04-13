export default defineI18nConfig((_nuxt) => ({
  legacy: false,
  messages: {
    "en-CA": {
      app_title: "Andorable",
      nav: {
        shows: "Shows",
        blog: "Blog",
        about: "About",
      },
      home: {
        title: "Andorable - Star Wars Shows",
        header: "Currently Streaming",
      },
      about: {
        title: "About",
        body: "Andorable is all about streaming Star Wars shows. The site started as a passion project and grew into what it is today.",
      },
    },
    "ar-EG": {
      app_title: "أندورابل",
      nav: {
        shows: "برامج",
        blog: "المدونة",
        about: "نبذة عنا",
      },
      home: {
        title: "أندورابل - برامج حرب النجوم",
        header: "يُبَث حالياً",
      },
      about: {
        title: "نبذة عنا",
        body: "أندورابل هو موقع عن كل شيء متعلق بعروض بث حرب النجوم. بدأ الموقع كمشروع شغف ونما إلى ما هو عليه اليوم.",
      },
    },
  },
}))
