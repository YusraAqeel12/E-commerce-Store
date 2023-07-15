export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
      {
          name: "title",
          title: "Product Title",
          type: "string",
      },
      {
          name: "image",
          title: "Product Image",
          type: "array",
          of: [{
              name: "img",
              title: "Image",
              type: "image"
          }]
      },
      {
        name: "category",
        title: "Category",
        type: "reference" , 
        to: [{type: 'category'}],
      },
      {
        name: "tagline",
        title: "Tagline",
        type: "string"
      },
      {
        name: "price",
        title: "Price",
        type: "number"
      },


     
  ]
}






//difference between title and name is title is for sanity studio aur name data fetch kartay waqy json format mai data aayi ga toh wo name sai aayi ga name key kai tor per kaam kar rahi jai
{/**for eg 
product : {
  jacket
}
*/}
//agar multiple images hai product ki toh array use karingay
//category  mai reference diya hai kai hamay sanity ka category cahiyae