let btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
  let title=document.querySelector('.title').value;
  let work=document.querySelector('.work').value;
  let creatediv=document.querySelector('. NotesContainer');

  if(title===''|| work===''){
    alert('Stupid Fill something');
  }

  creatediv.innerHTML=`
  <h3>${title}</h3>  
  <ul>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  <li>${work}</li>
  
  </ul>    `
})