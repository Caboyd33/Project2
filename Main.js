// Object
// For each
async function displayData() {
  const giphyApi = "9ITWZurl6IYpr0VMXhMgMQZgEw0F7Lgs"
  const endPointGet = "https://api.giphy.com/v1/gifs/search?api_key=9ITWZurl6IYpr0VMXhMgMQZgEw0F7Lgs&q=flowers&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker"
  https://api.giphy.com/v1/gifs/search?api_key=9ITWZurl6IYpr0VMXhMgMQZgEw0F7Lgs&q=flowers&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker
  
  
  try {
    const response = await fetch (endPointGet);
    console.log(response);
    let data = await response.json();
      data.data.forEach((element) => {
      let newimage = document.createlement("img");
      newimage.src = element.images.original.url;
      console.log(element.images.original.url);
      newimage.clessname = "giphy-img";

      let section_image =document.getElementById("section_image");
      console.log(section_image);
      section_image.appendChild(newimage);
        // Add code
      });
  } catch {} 

}
displayData();

/*
fetch(giphyApi).then((response) =>{
   if (!response.ok)throw new error ("network response error");
   return response.json();
   });
   */
