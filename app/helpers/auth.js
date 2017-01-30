export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Rhys Gevaux',
        avatar: '',
        uid: 'rhysgevaux',
      })
    }, 2000)
  })
}
