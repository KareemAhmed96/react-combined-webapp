// A class that handles the requests sent to the api.


class ApiHandler {

    static async login(user) {

        let requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user),
        };

        let response = await fetch("https://reqres.in/api/login", requestOptions)
        let responseJsonObj = await response.json()

        return responseJsonObj

    }


    static async getMovies() {

    }

}


export default ApiHandler;