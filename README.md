# React Native Weather

An example of React Native weather application using Open Weather Map API.

![React Native Weather App](https://media.giphy.com/media/3ohhwqLjZg4WYG9vpu/giphy.gif)

## Requirements
The following packages are required to run this application example:
* [Node.js](https://nodejs.org)
* [Expo](https://expo.io) mobile app

## Installation

### 1. Clone this repository
First, clone this repository to your local computer:

```bash
git clone git@github.com:risan/react-native-weather.git
```

### 2. Install the dependencies
Next, `CD` to the project directory and install all of the dependencies:

```bash
# Go to the project directory
cd react-native-weather

# Install all of the dependencies
npm install
```

### 3. Set your Open Weather Map API key
If you haven't had an Open Weather Map account, signup for free [here](https://home.openweathermap.org/users/sign_up). Log in with your Open Weather Map account and get your API key [here](https://home.openweathermap.org/api_keys).

Copy the `env.example.js` file to `env.js`:

```bash
cp env.example.js env.js
```

Open the `env.js` file then paste your Open Weather Map API key here:

```js
// env.js
export default {
  OPEN_WEATHER_API_KEY: 'PASTE YOUT API KEY HERE'
}
```

### 4. Run the application 🎉

Finally, run the packager to build the javascript files:

```bash
npm run start
```

Connect your phone to the same network as your computer. Open the Expo app on your phone and scan the printed QR code.
