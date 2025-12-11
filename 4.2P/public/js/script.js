const addCards = (items) => {
  items.forEach(item => {
    let itemToAppend = `<div class="col s4 center-align">
      <div class="card">
        <div class="card-image">
          <img src="${item.image}">
          <span class="card-title">${item.title}</span>
        </div>
        <div class="card-content">
          <p>${item.description}</p>
        </div>
        <div class="card-action">
          <a href="#">${item.link}</a>
        </div>
      </div>
    </div>`;
    $("#card-section").append(itemToAppend);
  });
};

const getCards = () => {
  $.get("/api/cards", (response) => {
    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

const submitForm = () => {
  let formData = {
    title: $("#title").val(),
    image: $("#image").val(),
    description: $("#description").val(),
    link: $("#link").val()
  };

  $.post("/api/cards", formData, (response) => {
    alert(response.message);
    location.reload();
  });
};

$(document).ready(() => {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  getCards();
  $(".modal").modal();
});
