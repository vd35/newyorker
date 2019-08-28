fetch("https://jsonplaceholder.typicode.com/users/").then(
    function (res) {
        res.json().then(
            function (r) {
                a = prompt("username:");
                let found = false;
                for (i = 0; i < r.length; i++) {
                    if (r[i].username == a) {
                        console.log(r[i]);
                        found = true;
                    }
                }
                if (found == false) {
                    console.log("Not found!");
                }
            }
        )
    }
)