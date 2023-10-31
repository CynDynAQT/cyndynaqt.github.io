        var validCredentials = [
            { username: "Ryder", password: "Wucky!1!" },
            { username: "Lukey Pookie", password: "121175" },
            { username: "hank", password: "meleavingthetheater" },
            { username: "Zachgotthat", password: "53brawner" },
            { username: "Ryan footdick", password: "Shrim" },
            { username: "nigger", password: "TacoBell2011" },
            { username: "staley", password: "legoat" },
            { username: "jordanisw", password: "lebronistrash" },
            { username: "ethan", password: "69" },
            { username: "backup1", password: "backup1" },
            { username: "bigpp", password: "Randy" },
            { username: "daddys", password: "bigboys" },
            { username: "User13", password: "Password13" },
            { username: "User14", password: "Password14" },
            { username: "User15", password: "Password15" },
            { username: "User16", password: "Password16" },
            { username: "User17", password: "Password17" },
            { username: "User18", password: "Password18" },
            { username: "User19", password: "Password19" },
            { username: "User20", password: "Password20" }
        ];

        function validateForm() {
            var un = document.getElementById("username").value;
            var pw = document.getElementById("password").value;

            for (var i = 0; i < validCredentials.length; i++) {
                if (un === validCredentials[i].username && pw === validCredentials[i].password) {
                    window.location = "staffonly.html";
                    return false;
                }
            }

            alert("Login was unsuccessful, please check your username and password");
            return false; // Prevent the form from actually submitting
        }
