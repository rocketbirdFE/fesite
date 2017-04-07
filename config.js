var guides = [
  { title: '通用规范', path: '/common-guide/' },
  { title: 'Html规范', path: '/html-guide/' },
  { title: 'Css规范', path: '/css-guide/' },
  { title: 'JavaScript规范', path: '/javascript-guide/' },
  { title: 'JavaScript - ESNext', path: '/es-next-guide/' }
]


docute.init({
  landing: 'landing.html',
  debug: false,
  nav: {
    default: [{
      title: '首页',
      path: '/home/'
    }, {
      title: '前端规范',
      type: 'dropdown',
      items: guides
    }]
  },
  icons: [],
  plugins: [
    evanyou()
  ]
})
