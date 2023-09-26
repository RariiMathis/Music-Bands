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


        //append elements
        divBandInfo.append(addH2,addImage,addDescription,likeButton)
    })
    })

    const form = document.getElementById('newBandForm')
    form.addEventListener('submit', (event) =>{
       event.preventDefault() 
       const name = event.target.name.value
       const image = event.target.image.value
       const description = event.target.description.value
       const newBand = {
        name, 
        image, 
        description
       }
       band(newBand)
       event.target.reset
    })