function formuser()
{
    event.preventDefault();
    let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  console.log("Name: " + username);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
}