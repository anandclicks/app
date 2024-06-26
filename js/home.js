document.addEventListener("contextmenu",(e)=> {
  e.preventDefault()
})


// user profile setup 
const userDtls = {
  username : "angle@priya123",
  name : "Angle priya",
  profileImg : '/public/userProfile.png'
}


let userAvaterImg = document.querySelector(".userAvatar")
let username = document.querySelector(".username")
let nameOfUser = document.querySelector(".name")



const setUpuserDtls = async () => {
  userAvaterImg.src = userDtls.profileImg
  username.innerText = userDtls.username
  nameOfUser.innerText = userDtls.name
};

setUpuserDtls();


// user post dtls setup 

const postsArray = [
  {
    username : "angle@priya123",
    postProfilePic : "/public/userProfile.png",
    postedImg : '/public/postedImg/one.png',
    timeOfPost : "08:22PM",
    postTitle : "Hello everyone this is day 1",
    postDips : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit eveniet aut earum minima sed reprehenderit laborum, commodi repudiandae ea.",
    like : false
  },
  
  
]
let postsRow = document.querySelector(".postsRow")
let postUserprofile = document.querySelector(".profileImg")
let postUsername = document.querySelector(".usernameForPost")
let postDips = document.querySelector(".postDips")
let postTitle = document.querySelector(".postTitle")
let postTime = document.querySelector(".postedTime")

const setUpPostdtls = ()=> {

  postsArray.forEach(e=> {
    let post = document.createElement("div")
    post.classList.add("col-lg-4", "col-12", "card")
    post.innerHTML = `<div class=" d-flex justify-content-between align-items-center">
        <div class="userInfo d-flex gap-2 align-items-center p-3 ps-0">
        <div class="profileImg overflow-hidden">
          <img src="${e.postProfilePic}" alt="">
        </div>
        <div>
          <p class="usernameForPost m-0 fw-bold">${e.username}</p>
          <p class="m-0 postedTime">${e.timeOfPost}</p>
        </div>
        </div>
        <i class="ri-more-2-fill fs-5 cursur"></i>
      </div>
       <div class='rounded-2' style="height: 400px; width: 100%; overflow: hidden;">
      <img class="h-100 w-100 object-fit-cover" src="${e.postedImg}" alt="">
    </div>
      <!-- post info  -->
       <div class="d-flex flex-column justify-content-between">
        <h3 class="postTitle">${e.postTitle}</h3>
        <p class="postDips">${e.postDips}</p>

      <div class="d-flex gap-3">
        <p class="fs-5 mainBtnBg cursur likeBtn"><i class="ri-heart-line"></i> Like</p>
        <p class="fs-5 cursur dislikeBtn"><i class="ri-thumb-down-line"></i> Dislike </p> 
      </div>
        `
        postsRow.appendChild(post)
  })
}
setUpPostdtls()

// like or dislike 

const postLikeDislikeFn = ()=> {
  const likeBtn = document.querySelectorAll(".likeBtn")
const dislikeBtn = document.querySelectorAll(".dislikeBtn")


likeBtn.forEach(e=> {
  e.addEventListener("click",()=> {
    if(!e.classList.contains("liked")) {
      e.innerHTML = '<i class="ri-heart-fill"></i> Liked '
      e.classList.add("liked")

    }
    else {
      e.innerHTML = '<i class="ri-heart-line"></i> Like '
      e.classList.remove("liked")
    }
  })
})

dislikeBtn.forEach(e=> {
  e.addEventListener("click",()=> {
    if(!e.classList.contains("disliked")) {
      e.innerHTML = '<i class="ri-thumb-down-fill"></i> Disliked '
      e.classList.add("disliked")
    }
    else {
      e.innerHTML = '<i class="ri-thumb-down-line"></i> Dislike '
      e.classList.remove("disliked")
    }
  })
})
}
postLikeDislikeFn()

// create post form show 
const postForm = document.querySelector(".postForm")
const crearePostBtn = document.querySelector(".crearePost")
const claosePostForm = document.querySelector(".claosePostForm")

crearePostBtn.addEventListener("click",()=> {
  postForm.style.display = "block"
  postForm.style.opacity = "1"
})

claosePostForm.addEventListener("click",()=> {
  postForm.style.opacity = "0"
  postForm.style.display = "none"
})