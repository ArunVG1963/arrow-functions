        //    let bookCharacter = {
        //         name: "Reginald Jeeves",
        //         employer: "Bertram Wilberforce Wooster",
        //         novels: 11,
        //         shortStories: 35,
        //         printStatus: function () {
        //             console.log(this.name + " works for " + this.employer);
        //         },
        //     }

        //     console.log(bookCharacter.employer);
        //     console.log(bookCharacter["employer"]);
        //     console.log(bookCharacter.printStatus());

let starwars = {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://ci-swapi.herokuapp.com/api/planets/1/",
	"films": [
		"https://ci-swapi.herokuapp.com/api/films/1/",
		"https://ci-swapi.herokuapp.com/api/films/2/",
		"https://ci-swapi.herokuapp.com/api/films/3/",
		"https://ci-swapi.herokuapp.com/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://ci-swapi.herokuapp.com/api/vehicles/14/",
		"https://ci-swapi.herokuapp.com/api/vehicles/30/"
	],
	"starships": [
		"https://ci-swapi.herokuapp.com/api/starships/12/",
		"https://ci-swapi.herokuapp.com/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://ci-swapi.herokuapp.com/api/people/1/"
}
console.log("Accessing the arrayusing the forEach loop:");
starwars.forEach(function (item) {
    console.log(item);
});

