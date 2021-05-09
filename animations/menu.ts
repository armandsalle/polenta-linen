import anime from 'animejs'

export const menuTimelineShow = anime
  .timeline({
    easing: 'easeOutSine',
    autoplay: false,
    begin: () => {
      anime.set('.menu', {
        display: 'block',
        opacity: 1,
      })
    },
  })
  .add({
    targets: '.burger, .search-icon',
    opacity: [1, 0],
    duration: 200,
  })
  .add(
    {
      targets: '.menu__overlay',
      scaleY: [0, 1],
      duration: 700,
      easing: 'easeInSine',
    },
    '-=200'
  )
  .add(
    {
      targets: '.menu .header .close-icon',
      opacity: [0, 1],
    },
    '-=400'
  )
  .add(
    {
      targets: '.menu .menu__link',
      opacity: [0, 1],
      translateY: [35, 0],
      duration: 400,
      delay: anime.stagger(100),
      easing: 'easeOutCubic',
    },
    '-=700'
  )

export const menuTimelineHide = anime
  .timeline({
    easing: 'easeOutSine',
    autoplay: false,
    complete: () => {
      anime.set('.menu', { display: 'none' })
    },
  })
  .add({
    targets: '.menu',
    opacity: [1, 0],
    duration: 200,
  })
  .add(
    {
      targets: '.burger, .search-icon',
      opacity: [0, 1],
      duration: 200,
    },
    '-=100'
  )
