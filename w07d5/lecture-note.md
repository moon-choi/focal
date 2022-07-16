# hooks & custom hooks

every hook has to be named use + [] .js (always js)

addEventListener('dbclick')

clientX, clientY, screenX, screenY, offsetX, offsetY, layerX, layerY: for browser compatibility

# every time you intereact with the DOM, useEffect..!

addEventListener('mousemove', (event) => {})

const cleanup = () => {
document.removeEventListener('mousemove', REFERENCE TO THE FUNCTION)
}

# const style ={} : bad practice

const style= {
fontSize: <- camelCase
}

react-hooks <- has to be manually installed.

# act() is a function

wrap the function inside act.
it causes our test to wait until the state is update.

# input should have value, onChange!!

# blur: when you click away and loses focus

onBlur

# "Know your location" pop up

is triggered by this command:
navigator.geolocation.getCurrentPosition((data) =. console.log(data))

# business logic:

how we are processing data

any preprocessing

what is shown to be user

application not processing, it deligated the job to the custom hook

# debounce

how often do you want to call this function?

throttling down how many requests you want to make.
