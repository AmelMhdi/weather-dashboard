# Weather Dashboard

A clean, minimalist weather application that allows users to check current weather conditions for any city worldwide. View temperature, humidity, wind speed, precipitation, and more with an intuitive interface.

## 🌐 Live Demo

**[View Live App](https://weather-dashboard-opal-seven.vercel.app)**

## Features

- Search weather for any city worldwide
- Default city (Paris) loads automatically on page load
- Current temperature with dynamic weather icons
- Detailed weather metrics:
  - Feels like temperature
  - Humidity percentage
  - Wind speed
  - Precipitation amount
- Clean, minimalist grayscale design
- Fast loading with real-time data
- Mobile-first responsive design
- Loading and error states

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **WeatherAPI** - Weather data provider
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AmelMhdi/weather-dashboard.git

cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Get your free API key:
   - Sign up at [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
   - Copy your API key
   - Paste it in the `.env` file

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Future Features (V2 Roadmap)

- [ ] 7-day weather forecast
- [ ] Hourly forecast with day selector
- [ ] Imperial/Metric unit toggle
- [ ] Responsive desktop layout
- [ ] Smooth animations and transitions
- [ ] Save favorite cities
- [ ] Geolocation support
- [ ] Dark mode

## 📸 Screenshots

### Mobile View
![Mobile Screenshot](/public/screenshots/mobile.png)

### Desktop View
![Desktop Screenshot](/public/screenshots/desktop.png)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Design inspired by Frontend Mentor challenges
- Icons from project assets

---

**Built with ❤️ by Amel**