
 var forme=document.getElementById('btn');
var sitName=document.getElementById('siteName');
var sitUrl=document.getElementById('siteUrl');
var alertValid=document.getElementById('alertValid')
var alertVallid=document.getElementById('alertVallid')
    // var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    // var results=document.getElementById("results");

// forme.addEventListener('click', saveBookmark)
var bookmarks=[];



function saveBookmark(e){
    
    // if( !validationInput(sitName, sitUrl)){
    //     return false;
    //   }
      
    var bookmark={
        pname:sitName.value,
       purl:sitUrl.value,
      

  }

//   bookmarks.push(bookmark);
// localStorage.setItem('test','hi')
// console.log(localStorage.getItem('test'))
// localStorage.removeItem('test')
// console.log(localStorage.getItem('test'))

if(localStorage.getItem('bookmarks') == null){
    var bookmarks=[]
   bookmarks.push(bookmark);
 localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}else{
      bookmarks=JSON.parse(localStorage.getItem('bookmarks'))
     bookmarks.push(bookmark);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
}

display()

}


  
// DELET========================


 function detle(index){
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.splice(index,1);
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    console.log(bookmarks)
    display()
   }
   

 
// ========================display 


function display(){
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    var results=document.getElementById("results");

    var well =``;
    for(var i=0;i<bookmarks.length;i++){
        well +=`
        <tr class="">
        <td scope="row ">${bookmarks[i].pname}</td>
        <td> <a href="${bookmarks[i].purl}" target="-blank" class="btn btn-primary" onclick=''> visit</a></td>
        <td> <a href="" class="btn btn-danger" onclick="detle(${i})" >delete</a></td>
    </tr>


    `;

}document.getElementById("results").innerHTML=well
}


    display()

// validation=====================


forme.onclick =function(){
    if(validationInput() == true){
        saveBookmark()
    }
}



function validationInput(){

    if(sitName.value !='' && sitUrl.value !=''){
        alertValid.classList.replace('d-block','d-none')
        alertVallid.classList.replace('d-block','d-none')
        return true;


    }else{
    

        alertVallid.classList.replace('d-none','d-block')
        alertValid.classList.replace('d-none','d-block')
        return false;


    }
    
    
}




function urlValidation(){
    var regex=/^(http|https):\/\/[^ "]+$/;

    if(regex.test(sitUrl.value) === true){

        sitUrl.classList.remove('is-invalid')
        sitUrl.classList.add('is-valid')
        return true

    }else{

        
        sitUrl.classList.remove('is-valid')
        sitUrl.classList.add('is-invalid')
        return false
    }
}