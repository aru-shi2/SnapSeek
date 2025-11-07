const key=window.CONFIG.api_key

function handleSearch() {
  const div=document.querySelector(".grid")
    let txt=document.querySelector("input").value
    console.log(txt)

    const url=`https://api.pexels.com/v1/search?query=${txt}`
    const fetchData=async() => {
      let data=await fetch(url,{
        headers:{
            Authorization: key
        }
      })
      let res=await data.json()
      console.log(res)

      res.photos.forEach(photo=> {
        const img=document.createElement("img")
        img.src=photo.src.medium;
        
        div.appendChild(img)
      });
      txt=""
    } 
    fetchData()
}