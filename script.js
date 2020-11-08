//Question 1 

const cat = {
	complain: function() {
		console.log("Meow");
	}
}
cat.complain();


//Question 2 


document.querySelector("h3");

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//Question 3 

heading.style.fontSize = "2em"; 


//Question 4 

document.querySelector("h3.subheading");


//Question 5

document.querySelectorAll("p");

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
console.log(paragraphs[i]);

paragraphs[i].style.color = "red"; 
}


//Question 6

document.querySelector(".results");

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML ="<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

//Question 7

const cats = [
	{
       name: "Blob",
       age: 10
   	},
    {
       name: "Harold",
	},
    {
       name: "Blurt",
       age: 21
    }
];


function logNameList (list) {

	for(let i = 0; i < list.length; i++) {
		console.log(list[i].name);

	}

}

logNameList(cats);


//Question 8

function createCats (cats) {

	for(let i = 0; i < cats.length; i++) {
		console.log(cats[i]);

		let catObject = "<div>" + cats[i].name.age + "</div>";
    	let catObject1 = "<div>" + cats[i].name.age + "</div>";
		let catObject2 = "<div>" + cats[i].name.age + "</div>";
		
}

createCats(cats);

document.querySelector(".cat-container");
    let catContainer = document.querySelector(".cat-container");
	resultsContainer.innerHTML = newHTML;
	
}	
