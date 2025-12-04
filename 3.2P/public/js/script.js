const bookList = [
  {
    title: "Murder In Mesopotamia",
    image: "image/book1.jpg",
    link: "https://www.amazon.com.au/Murder-Mesopotamia-Agatha-Christie/dp/0007234449/ref=sr_1_7?adgrpid=136058487113&dib=eyJ2IjoiMSJ9._042anHwdAC4F35Z0vFLZlr_4W1El_fl2v2KKBPHucVEpnU45626WqAgUePmX09p-c2vH6uTkhBfncG1ICyibh21rQF40x0uj7w3CtajayiPgW9SJdYq30Gfydsq6N-iNy6F-cZ0lD-SOkfXi0pPi4FvQblOE3kQgoI_wcZDB8kgcrSegQ7ykF1ENEaec0nbyMv60BYEi1ZW1setId_SDJ5CzxbEal2yl95zrZhZYoLtJ6JlvZbEsCDlBd2-cw3zuWklCc6oitFACbCkqr3GQC2wN-RGRsJrNwwZiULMzDM.FPJ6CZ0SVN0Z0D2m7fzgI5bxpYomWS2RvzIx8FTQU1A&dib_tag=se&hvadid=678132665704&hvdev=c&hvlocphy=9071383&hvnetw=g&hvqmt=e&hvrand=4600006854106144095&hvtargid=kwd-379042700144&hydadcr=14231_332829&keywords=poirot+series+amazon&mcid=218a0ce7ec813a2a96b3ed765397e095&qid=1764845453&sr=8-7",
    description: "Murder in Mesopotamia by Agatha Christie is a classic Hercule Poirot mystery set at an archaeological dig in Iraq. The story begins when a nurse, Amy Leatheran, is hired to care for the anxious wife of the expedition’s leader, only for the woman to be found murdered soon after. Suspicion spreads through the tight-knit group of archaeologists, each hiding secrets and motives beneath the desert heat. Poirot arrives and unravels the truth with his signature method of observing small details and psychological clues. The novel blends exotic setting, tense atmosphere, and clever deduction, making it one of Christie’s most engaging mysteries."
  },
  {
    title: "The ABC Murders: A Hercule Poirot Mystery: 13",
    image: "image/book2.jpg",
    link: "https://www.amazon.com.au/B-C-Murders-Agatha-Christie/dp/0062073583/ref=sr_1_14?adgrpid=136058487113&dib=eyJ2IjoiMSJ9._042anHwdAC4F35Z0vFLZlr_4W1El_fl2v2KKBPHucVEpnU45626WqAgUePmX09p-c2vH6uTkhBfncG1ICyibh21rQF40x0uj7w3CtajayiPgW9SJdYq30Gfydsq6N-iNy6F-cZ0lD-SOkfXi0pPi4FvQblOE3kQgoI_wcZDB8kgcrSegQ7ykF1ENEaec0nbyMv60BYEi1ZW1setId_SDJ5CzxbEal2yl95zrZhZYoLtJ6JlvZbEsCDlBd2-cw3zuWklCc6oitFACbCkqr3GQC2wN-RGRsJrNwwZiULMzDM.FPJ6CZ0SVN0Z0D2m7fzgI5bxpYomWS2RvzIx8FTQU1A&dib_tag=se&hvadid=678132665704&hvdev=c&hvlocphy=9071383&hvnetw=g&hvqmt=e&hvrand=4600006854106144095&hvtargid=kwd-379042700144&hydadcr=14231_332829&keywords=poirot+series+amazon&mcid=218a0ce7ec813a2a96b3ed765397e095&qid=1764845453&sr=8-14",
    description: "The ABC Murders is a gripping Hercule Poirot mystery in which a chilling serial killer challenges Poirot directly. The murderer sends taunting letters announcing each crime in advance, choosing victims whose initials follow the alphabetical pattern—A, then B, then C. As panic spreads, Poirot races to understand the killer’s true motive hidden beneath the apparent randomness. The story cleverly explores psychology, misdirection, and the dangers of making assumptions. Christie delivers a tense, fast-paced mystery that keeps readers guessing until Poirot reveals the surprising truth."
  }
];

const addCards = (items) => {
  items.forEach(item => {
    const itemToAppend = `
      <div class="col s12 m6 l4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>`;
    $("#card-section").append(itemToAppend);
  });
}

const submitForm = () => {
  const formData = {
    title: $('#title').val(),
    image: $('#image').val() || 'image/book1.jpg',
    link: 'More about this book',
    description: 'Book'
  };
  console.log("Form Data Submitted: ", formData);
  // add to UI immediately
  addCards([formData]);
  // clear form and close modal
  $('#title').val('');
  $('#image').val('');
  M.updateTextFields();
  const modal = M.Modal.getInstance($('#modal1'));
  modal.close();
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.modal').modal();
  $('#formSubmit').click(()=>{ submitForm(); });
  addCards(bookList);
});
