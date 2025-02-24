//your JS code here. If required.
let form = document.querySelector("form")
let age = document.getElementById("age")
let name = document.getElementById("name")

// validation
form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (age.value === "" || name.value === "") {
          alert("Please enter valid details");
        }
        if (age.value > 18) {
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(`Welcome, ${name.value}. You can vote.`);
            }, 1000);
          })
            .then((msg) => {
              alert(msg);
            })
            .catch((msg) => {
              console.log(msg);
            });
        }else{
            new Promise((_,reject)=>{
                setTimeout(()=>{
                    reject(`Oh sorry ${name.value}. You aren't old enough.`)
                },4000)
            })
            .catch((msg)=>{
                alert(msg)
            })
        }
      });