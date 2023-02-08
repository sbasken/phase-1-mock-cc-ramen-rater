// write your code here

const ramenMenu = document.querySelector("#ramen-menu")

const ramenDetail = document.querySelector('#ramen-detail')
const ramenImg = document.querySelector(".detail-image")
const h2 = document.querySelector("h2.name")
const h3 = document.querySelector("h3.restaurant")

const form = document.querySelector("#new-ramen")


fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramens => {
    ramens.forEach(renderRamen)
})

const renderRamen = (ramen) => {
    ramenInfo = ramen;
    const img = document.createElement('img');
    img.src = ramen.image
    ramenMenu.append(img)

    img.addEventListener('click', ()=> {
        ramenImg.src = ramen.image;
        h2.innerText = ramen.name;
        h3.innerText = ramen.restaurant;

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const newName = document.querySelector("#new-name")
    // const newRestaurant = document.querySelector("#new-restaurant")
    // const newImage = document.querySelector("#new-image")
    // const newRating = document.querySelector("#new-rating")
    // const newComment = document.querySelector("#new-comment")

    const ramen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target.comment.value
    }

    console.log(ramen)
    renderRamen(ramen)

    // fetch(" http://localhost:3000/ramens", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: ramen
    // })

})

// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.