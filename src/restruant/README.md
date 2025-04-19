# Restaurant Booking Application

## Overview
This project is a restaurant booking application that allows users to book tables at La Gran Fiesta. The application features a modern design and interactive components to enhance user experience.

## Project Structure
```
restruant
├── public
│   └── images
├── src
│   ├── app
│   │   ├── page.tsx          # Main entry point for the application
│   │   ├── booking
│   │   │   └── page.tsx      # Booking functionality with a form for users
│   ├── components
│   │   ├── ui
│   │   │   ├── button.tsx     # Reusable Button component
│   │   │   └── card.tsx       # Reusable Card component
│   └── styles
│       └── globals.css        # Global CSS styles
├── package.json                # NPM configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restruant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## Features
- **Home Page**: Displays the restaurant's offerings and a call to action for users to order online or book a table.
- **Booking Page**: Users can select a date, time, and number of guests to book a table.
- **Responsive Design**: The application is designed to be mobile-friendly and responsive across different devices.

## Technologies Used
- React
- Next.js
- TypeScript
- Tailwind CSS

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.