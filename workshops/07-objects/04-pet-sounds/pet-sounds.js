let animalNoises = [
  {
      dog: {
          America: 'Woof! Woof!',
          Germany: 'Wau Wau!',
          England: 'Bow wow!',
          Uruguay: 'Jua jua!',
          Afrikaans: 'Blaf!',
          Korea: 'Mong mong!',
          Iceland: 'Voff voff!',
          Albania: 'Ham!',
          Algeria: 'Ouaf ouaf!',
      },
  },
  {
      cat: {
          America: 'Meow',
          Germany: 'Miauw!',
          England: 'mew mew',
          Uruguay: 'Miau Miau!',
          Afrikaans: 'Purr',
          Korea: 'Nyaong!',
          Iceland: 'Kurnau!',
          Albania: 'Miau',
          Algeria: 'Miaou!',
      },
  },
  {
      chicken: {
          America: 'Cluck cluck',
          Germany: 'tock tock tock',
          England: 'Cluck Cluck',
          Uruguay: 'gut gut gdak',
          Afrikaans: 'kukeleku',
          Korea: 'ko-ko-ko',
          Iceland: 'Chuck-chuck!',
          Albania: 'Kotkot',
          Algeria: 'Cotcotcodet',
      },
  },
]

// YOUR CODE BELOW
function petSounds(animal, country) {
  let finalString = ''
  for (let k = 0; k < animalNoises.length; k++) {
      // console.log(animalNoises[k])
      let element = animalNoises[k]
      for (key in element) {
          if (key === animal) {
              // console.log(element[key][country])
              let sound = element[key][country]
              finalString =
                  animal.charAt(0).toUpperCase() +
                  animal.slice(1) +
                  's' +
                  ' in ' +
                  country +
                  ' say ' +
                  sound
          }
      }
  }
  console.log(finalString)
  return finalString
}
petSounds('dog', 'Iceland')