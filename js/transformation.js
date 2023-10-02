let grid = document.querySelector('.colshow')
var url = `${serverurl}/api/v1/transformation/`
// console.log(data)

var url = `${serverurl}/api/v1/transformation/`
// console.log(data)
fetch(url, {
    method: 'GET',  // body: JSON.stringify(),
    headers,

})
    .then((res) => {
        return res.json();
    })
    .then((completeservicedata) => {
    console.log(completeservicedata.data) 
   data=completeservicedata
    for(let value of data){
        addElement(grid,value)

    }
})

function addElement(appendin,value){
    // console.log(value)x  
    let div = document.createElement('div')

    div.className="col-md"

    let {image,_id}=value

    div.innerHTML=`
    <div class="gallery-img">
							<a href="${image}" class="b-link-stripe b-animate-go  swipebox" title="Image Title">
								<img class="img-responsive " src="${image}" alt="" />
								<span class="zoom-icon"> </span> </a>
							</a>
						</div>
						<div class="text-gallery">
							<button>Delete</button>
						</div>
    `

    appendin.appendChild(div)
}