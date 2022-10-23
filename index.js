const btn = document.querySelector(".btn");
const head = document.querySelector(".head");
const disc = document.querySelector(".disc");
const title_input = document.querySelector(".title_input");
const textarea = document.getElementById("textarea")
const notes = document.querySelector(".notes");
const add_note = document.querySelector(".add_notes");
const new_note = document.querySelector(".new_notes");
const hidden = document.querySelector('.hidden');
const close = document.querySelector(".close");
const del = document.querySelector(".del");
 id = 0;

const add_notes = (e) => {
   const h1 = document.createElement("h1");
   const p = document.createElement("p");
   const del = document.createElement("p");
   const div = document.createElement("div");
   h1.innerText = title_input.value;
   p.innerText = textarea.value;
   del.innerHTML = `<button class="del"><i class="fas fa-trash"></button>`;
   div.id = id;
   div.append(del, h1, p );
   del.classList.toggle("flex");

   del.addEventListener('click', () => {
   del.parentElement.style.display = "none";
})

   div.classList.toggle("new_note");
   notes.append(div);
   console.log(p, h1, div)
   hidden.style.display = "none";
}

btn.addEventListener('click', () => {
    id++;
    add_notes();
}
)

add_note.addEventListener('click', () => {
      hidden.style.display = "block";
})
close.addEventListener('click', () => {
    title_input.value = "";
    textarea.value = "";
    hidden.style.display = "none";
    
})
