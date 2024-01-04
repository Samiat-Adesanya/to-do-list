
let body=document.querySelector("body")
let form=document.forms[0]
console.log(form)
let input=form.elements[0]
console.log(input)
let image=document.querySelector("img")

let button=document.querySelector("button")


button.addEventListener("click",(e)=>{
  e.preventDefault()
    if (!input.value=="") {
      let checkbox=document.createElement("input")
      checkbox.type="checkbox"
      let label=document.createElement("label")
      label.innerHTML=input.value
      checkbox.innerHTML=label
      checkbox.style.display="flex"
      checkbox.style.alignItems="center"
      
      let trash=document.createElement("img")
      trash.src="2874821.png"
      trash.style.width="30px"
      body.append(trash)
      console.log(trash)
       trash.className="button"
       trash.style.margin="9px"
     let div=document.createElement("div")
     div.style.margin="5px 0"
     document.body.append(div)
     div.append(checkbox)
     div.append(label)
     div.append(trash)
     div.style.display="flex"
     div.style.alignItems="center"
  input.value=""
     trash.addEventListener("click",(e)=>{
      if (trash.className=="button") {
        e.target.parentElement.remove();
      }
      
    })
    
    }
  // form.submit()
})  




















