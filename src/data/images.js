const now = Date.now()
const mins = (n) => now - n * 60 * 1000
const hrs = (n) => now - n * 60 * 60 * 1000
const days = (n) => now - n * 24 * 60 * 60 * 1000

const base = 'https://templates.iqonic.design/hope-ui/pro/html/file-manager/assets/images'

// Reference page has images 1.png – 8.png
const ref = (n) => `${base}/${n}.png`

const images = [
  { id: 1,  name: '8.png', url: ref(8), createdAt: days(30), lastOpenedAt: mins(5),  size: '2.4 MB' },
  { id: 2,  name: '7.png', url: ref(7), createdAt: days(25), lastOpenedAt: mins(20), size: '3.1 MB' },
  { id: 3,  name: '2.png', url: ref(2), createdAt: days(20), lastOpenedAt: hrs(1),   size: '1.8 MB' },
  { id: 4,  name: '1.png', url: ref(1), createdAt: days(18), lastOpenedAt: hrs(3),   size: '2.9 MB' },
  { id: 5,  name: '6.png', url: ref(6), createdAt: days(15), lastOpenedAt: hrs(6),   size: '2.2 MB' },
  { id: 6,  name: '5.png', url: ref(5), createdAt: days(12), lastOpenedAt: hrs(12),  size: '1.5 MB' },
  { id: 7,  name: '4.png', url: ref(4), createdAt: days(10), lastOpenedAt: days(1),  size: '3.7 MB' },
  { id: 8,  name: '3.png', url: ref(3), createdAt: days(9),  lastOpenedAt: days(2),  size: '2.0 MB' },
  { id: 9,  name: '8.png', url: ref(8), createdAt: days(8),  lastOpenedAt: days(3),  size: '2.6 MB' },
  { id: 10, name: '5.png', url: ref(5), createdAt: days(7),  lastOpenedAt: days(4),  size: '1.9 MB' },
  { id: 11, name: '6.png', url: ref(6), createdAt: days(6),  lastOpenedAt: days(5),  size: '2.3 MB' },
  { id: 12, name: '7.png', url: ref(7), createdAt: days(5),  lastOpenedAt: days(6),  size: '3.4 MB' },
  { id: 13, name: '8.png', url: ref(8), createdAt: days(4),  lastOpenedAt: days(7),  size: '2.1 MB' },
  { id: 14, name: '1.png', url: ref(1), createdAt: days(3),  lastOpenedAt: days(8),  size: '4.0 MB' },
  { id: 15, name: '2.png', url: ref(2), createdAt: days(2),  lastOpenedAt: days(10), size: '2.7 MB' },
  { id: 16, name: '4.png', url: ref(4), createdAt: days(1),  lastOpenedAt: days(12), size: '1.6 MB' },
]

export default images
