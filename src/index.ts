import './index.scss'

const txts = document.querySelectorAll(".question-text")
const btns = document.querySelectorAll(".question-btn")
const icons = document.querySelectorAll(".fa-square-plus")

btns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    txts.forEach((txt, txtIndex) => {
      if (txtIndex !== btnIndex) {
        txt.classList.remove("show")
        icons[txtIndex].classList.replace("fa-square-minus", "fa-square-plus")
      }
    })
    txts[btnIndex].classList.toggle("show")
    if (icons[btnIndex].getAttribute("class") === "fa-regular fa-square-minus") {
      icons[btnIndex].classList.replace("fa-square-minus", "fa-square-plus")
      return
    }
    icons[btnIndex].classList.replace("fa-square-plus", "fa-square-minus")
  })
})
