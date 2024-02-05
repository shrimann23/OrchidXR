const nextButtonComponent = () => ({
    init() {
      const modelList = ['garfield', 'conservatory', 'mohai', 'artenoir', 'logo']
  
      const model = document.getElementById('model')
      const nextButton = document.getElementById('nextbutton')
      const orchidImage = document.querySelector('#nextbutton img')
      nextButton.style.display = 'block'
  
      const bg1 = require('./assets/images/one.jpg')
      const bg2 = require('./assets/images/two.jpg')
      let buttonBackground = bg1
  
      let idx = 0  // Start with the 2nd model as 1st is already in the scene on page load
      const nextModel = () => {
        // Update button style
        if (buttonBackground === bg1) buttonBackground = bg2
        else buttonBackground = bg1
        nextButton.style.backgroundImage = `url(${buttonBackground})`
        const currentMaxWidth = parseInt(orchidImage.style.width) || 0;
        const currentMaxHeight = parseInt(orchidImage.style.height) || 0;
  
        if (currentMaxWidth === 150 && currentMaxHeight === 150) {
            nextButton.textContent = "Experience Complete!"
        }
  
        orchidImage.style.width = (currentMaxWidth + 50) + 'px'
        orchidImage.style.height = (currentMaxHeight + 50) + 'px'
  
        // orchidImage.style.maxWidth = (currentMaxWidth + 20) + '%'
        // orchidImage.style.maxHeight = (currentMaxHeight + 40) + '%'
        // Need to remove gltf-component first due to AFrame regression: https://github.com/aframevr/aframe/issues/4341
        model.removeAttribute('gltf-model')
        // Switch to next model in the list
        model.setAttribute('gltf-model', `#${modelList[idx]}`)
  
        idx = (idx + 1) % modelList.length
      }
      nextButton.onclick = nextModel  // Switch to the next model when the button is pressed.
    },
  })
  
  
  export {nextButtonComponent}
  