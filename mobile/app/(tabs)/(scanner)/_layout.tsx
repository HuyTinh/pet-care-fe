import React from 'react'; // Import React
import { Stack } from 'expo-router'; // Import Stack component from expo-router for navigation

// _layout component defines the layout for the screen
const _layout = () => {
    return (
        // Stack component allows stacking of screens in navigation
        // `screenOptions={{ headerShown: false }}` hides the header for all screens
        <Stack screenOptions={{ headerShown: false }} />
    );
};

export default _layout; // Export the layout component for use in the app
