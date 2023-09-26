// Fetch
fetch("http://localhost:3000/bands")
    .then((resp) => resp.json())
    .then(data => {
    data.forEach (band =>{
        //add h2 element for each band name
        const addH2 = document.createElement("h2")
        //div I am appending band info to location
        divBandInfo = document.getElementById("display")
        //band names rendered from db json
        addH2.innerText = band.name

        //add image element for each band name
        const addImage = document.createElement("img")
        //image rendered from db json
        addImage.src = band.image
        //Haylee
        addImage.alt = band.name

        const addDescription = document.createElement("h3")
        addDescription.innerText = band.description

        const likeButton = document.createElement("button")
        // const likeButton = document.querySelector
        let numberOfLikes = "0" 
        likeButton.innerText = numberOfLikes + " Band Likes"
        
        likeButton.addEventListener("click", () =>{
            console.log("click")
            likeButton.innerText = ++numberOfLikes
            + " Band Likes"
            
        })
        // Audio event listener
        // const addSound = document.createElement('')

        addImage.addEventListener("mouseenter", () => {
            bandSoundElement.pause()
            bandSoundElement.play()
            bandSoundElement.volume = 0.5;   
            // console.log('mouuseenter')                 
        })

        const bandSoundElement = document.createElement('audio')
        const bandSound = band.audioClip 
        bandSoundElement.src = bandSound
        bandSoundElement.id = "audioSound"

        addImage.addEventListener("mouseleave", () => {
            bandSoundElement.pause()
            bandSoundElement.currentTime = 0;

            // console.log(bandSoundElement)

        })

        addImage.addEventListener('mouseout', (e) => {
        // console.log()
    })
        //append elements
        divBandInfo.append(addH2,addImage,addDescription,likeButton,)
    })
    })

    const form = document.getElementById('newBandForm')
    form.addEventListener('submit', (event) =>{
       event.preventDefault() 
       const newName = event.target.name.value
       const newImage = event.target.image.value
       const newDescription = event.target.description.value
       const newBand = {
        name: newName,
        image: newImage,
        description: newDescription

       }
       const addH2 = document.createElement("h2")
        //div I am appending band info to location
        divBandInfo = document.getElementById("display")
        //band names rendered from db json
        addH2.innerText = newBand.name

        //add image element for each band name
        const addImage = document.createElement("img")
        //image rendered from db json
        addImage.src = newBand.image
        //Haylee
        addImage.alt = newBand.name

        const addDescription = document.createElement("h3")
        addDescription.innerText = newBand.description

        const likeButton = document.createElement("button")
        let numberOfLikes = "0" 
        likeButton.innerText = numberOfLikes + " Band Likes"
        
        likeButton.addEventListener("click", () =>{
            console.log("click")
            likeButton.innerText = ++numberOfLikes
            + " Band Likes"
            
        })
        //append elements
        divBandInfo.append(addH2,addImage,addDescription,likeButton)
    })




    //    band(newBand)
    //    event.target.reset
    