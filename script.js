const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        img:  '#',
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

       {
        id:2,
        name: 'Anna Smith',
        img:  '#',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       } ,
     



       {
        id:3,
        name: 'Peter Jones',
        img:  '#',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       } ,

    ];

    const img = document.getElementById('person-img')
    const author = document.getElementById('author');
    const job = document.getElementById('job');
    const info = document.getElementById('info');

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIteam = 0;
    window.addEventListener('DOMContentLoaded', function(){
        const item= reviews[currentIteam];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    });

    function showPerson(person){
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    nextBtn.addEventListener('click', function(){
        currentItem++;
        if (currentIteam > reviews.length - 1){
            currentItem = 0;
        }
        showPerson(currentIteam);
    });

    prevBtn.addEventListener('click', function (){
        currentItem--;
        if(currentItem < 0){
            currentItem = reviews.length -1;
        }
        showPerson
    });








































]



















// // console.log("Hello World");

// // let chicken = "123";
// // console.log(chicken)
// // console.log(typoeof chicken);

// // console.log(10 + "eggs");
// // console.log(10 + 8 + "eggs");
// // console.log("eggs "+ 10 +8);

// // console.log(8>2)
// // //Both Conditions need to be true
// // console.log(7>3)&&(10>8);

// // //Only one condition must be true
// // console.log(10>3) || (5>10);

// // //If the statement is logical or not
// // console.log(!5>3);

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Goodmorning 🔆";
// }else if (hour<18){
//     greeting="Good Afternoon ☁";
// }else{
//     greeting = "Good Evening 🌃"
// }

// document.getElementById("greeting").innerText = greeting;