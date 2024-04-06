# Race Stopwatch Project

The Race Stopwatch project is a React-based application designed for tracking time and laps for different race distances. Ideal for organizing and monitoring time-based events like marathons or racing competitions, this app supports multiple race distances and showcases finisher times in an organized manner.

## Features

- **Multiple Race Distances:** Supports tracking for 1.5km, 3km, and 5km races.
- **Lap Time Recording:** Allows for the recording of lap times for each race distance.
- **Dynamic Lap Tables:** Displays a table of finisher positions and their corresponding finish times, updating in real-time as new laps are recorded.
- **Customizable Themes:** Features different themes for stopwatches based on the race distance.
- **Organizer Logos:** Displays logos of event organizers or sponsors at the top of the application.

## How to Use

1. **Start a Race Timer:** Select the desired race distance and click on the "Start" button to begin timing.
2. **Record Laps:** Click the "Lap" button to record a lap time. Lap times are displayed in reverse order, with the most recent lap appearing at the top of its respective table.
3. **Stop and Reset:** Use the "Stop" button to pause the timer and the "Reset" button to clear the current time.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Start the application with `npm start`. The app will be available at `localhost:3000`.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **CSS:** For custom styling and themes.

## Project Structure

- `App.js`: The main component that renders stopwatches and lap tables for each race distance.
- `Stopwatch.js`: A stopwatch component for individual race distances.
- `App.css`: Stylesheet for the application.
- `assets/`: Contains images such as organizer logos.

## Contributing

Contributions to the Race Stopwatch project are welcome! Whether it's submitting bug reports, feature requests, or contributing code, your input is appreciated.

## License

This project is open-source and available under the [MIT License](LICENSE.md).
