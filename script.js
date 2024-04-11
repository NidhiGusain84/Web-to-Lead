function beforesubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
  outputdate.value = formattedDate;
}
