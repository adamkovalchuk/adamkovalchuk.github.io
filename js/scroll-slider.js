function scrollToSection(section) {
  const top = section.getBoundingClientRect().top
  window.scrollTo({ top: top + window.scrollY, behavior: 'smooth' })
}

function initScene(controller, section, sectionIndex) {
  const sectionHeight = section.getBoundingClientRect().height
  const onTrigger = function() {
    scrollToSection(section)

    const indicators = document.querySelectorAll('.vertical-slider-indicator')
    const active = document.querySelector('.vertical-slider-indicator.active')
    if(active) active.classList.remove('active')
    
    if(indicators[sectionIndex])
      indicators[sectionIndex].classList.add('active')
  }
  
  const triggerOffset = 0.05

  new ScrollMagic.Scene({
      triggerElement: section,
      duration: 0,
      offset: 0,
      triggerHook: 1 - triggerOffset,
      loglevel: 3
  }).addTo(controller)
    .addIndicators()
    .on('enter', onTrigger)

  new ScrollMagic.Scene({
    triggerElement: section,
    duration: 0,
    offset: sectionHeight,
    triggerHook: triggerOffset,
    loglevel: 3
  }).addTo(controller)
    .addIndicators()
    .on('leave', onTrigger)
}

window.onload = function() {
  const controller = new ScrollMagic.Controller({loglevel: 3})
  const sceneContainers = document.querySelectorAll('header, section, footer')
  const indicatorsContainer = document.querySelector('.vertical-slider-indicator__container')

  for(let i=0; i<sceneContainers.length; i++) {
    const indicator = document.createElement('div')
    indicator.classList.add('vertical-slider-indicator')
    indicator.onclick = function() {
      scrollToSection(sceneContainers[i])
    }
    indicatorsContainer.append(indicator)
    initScene(controller, sceneContainers[i], i)
  }  
}