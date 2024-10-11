# Frontend Test

This project is a frontend task developed using **Next.js** and **Tailwind CSS**. It consists of two celebration pop-ups triggered upon reaching specific milestones on the website.

## Approach

The application has two main components:

1. **LevelupPopup**: A full-page celebration pop-up that triggers when a user reaches a new level. It includes:
   - An animated XP bar filling up.
   - A new badge introduction with smooth animations and sound effect.
   - Fully responsive design for seamless experience across web and mobile.

2. **RewardsPopup**: A compact pop-up that shows rewards earned by the user. It includes:
   - Animations highlighting the unlocked rewards with sound effect.
   - A smaller design for quicker celebration moments.
   - Fully responsive to ensure smooth experience across devices.

### Folder Structure

- **atoms/**: Contains reusable components such as buttons and headings.
- **components/**: Contains main components like `LevelupPopup` and `RewardsPopup`.
- **page.tsx**: The entry point of the application, where pop-ups are triggered.

## Libraries Used

This project utilizes the following libraries:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: The core library for building the user interface.
- **React Countup**: A library for animating numbers, particularly useful for the XP bar.
- **React Icons**: A library that provides a collection of icons for use in React applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

### Development Dependencies
- **TypeScript**: For static type checking and improved development experience.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **PostCSS**: A tool for transforming CSS with JavaScript, essential for using Tailwind CSS.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd frontend-test

2. **Install the dependencies**:
    ```bash
    npm install

3. **Run the development server**:
    ```bash
    npm run dev