export default function (
  sectionHome,
  sectionUniverse,
  sectionExploration,
  body
) {

  sectionHome.addEventListener('click', () => {
      removeClassAll()
      sectionHome.classList.add('nav-selected')
      body.classList.add('background-image1')
  })

  sectionUniverse.addEventListener('click', () => {
      removeClassAll()
      sectionUniverse.classList.add('nav-selected')
      body.classList.add('background-image2')
  })

  sectionExploration.addEventListener('click', () => {
      removeClassAll()
      sectionExploration.classList.add('nav-selected')
      body.classList.add('background-image3')
  })

  function removeClassAll () {
      sectionExploration.classList.remove('nav-selected')
      sectionHome.classList.remove('nav-selected')
      sectionUniverse.classList.remove('nav-selected')
      body.classList.remove('background-image1')
      body.classList.remove('background-image2')
      body.classList.remove('background-image3')
  }
}