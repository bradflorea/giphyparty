const $gifArea = $("#gifContainer"); // Corrected selector for gif area
const $searchInput = $("#searchTerm"); // Corrected selector for search input

/* use axios result to add a gif */

function addGif(res) {
  let $newGif = $("<img>", {
    src: res.data.images.original.url,
    class: "w-100"
  });
  $gifArea.append($newGif);
}

/* handle form submission: clear search box & make axios call */

$("#searchForm").on("submit", async function(evt) {
  evt.preventDefault();

  const response = await axios.get("http://api.giphy.com/v1/gifs/random", {
    params: {
      tag: $searchInput,
      api_key: "mmEjazmKapdvQN0Sw7YskjvSndy21EDM"
    }
  })
  .then(response => {
  addGif(response.data);
  $searchInput.val('');
});
});             

$("#removeGifs").on("click", function() {
  $gifArea.empty();
});