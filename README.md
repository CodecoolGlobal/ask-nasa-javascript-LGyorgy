# Ask Nasa

Ask Nasa is React application, where you can browse NASA's Astronomy Picture of the Day Archive.

The purpose of the project was to practice the usage of the React library, and to handle resources from an external API.

## Built With

  * ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  * ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  * ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  * ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Installation

Before starting the server you have to install it's dependencies with the following command:

```bash
$ npm install
```

After the installation is done, you can start the server with the following command:

```bash
$ npm start
```
## Configuration

The application utilizes the [NASA API](https://api.nasa.gov/) to acquire data for presentation and it is configured to use the default demo API key, when fetching data, so it has a fairly limited request rate.

If you wish to go over this limit, you might want to generate your own API key on the API's website, to use with the application. To do so, please take the following steps:

1. Navigate to the [NASA API](https://api.nasa.gov/) website, to generate your own API key.
2. Create a file named `.env.local` in the root folder (next to the already present `.env` file)
3. Place your API key in this file in the following format:
   ```
   REACT_APP_API_KEY=<Your key here>
   ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)