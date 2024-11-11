import { Canvas, DiffRect, rect, rrect } from "@shopify/react-native-skia"; // Importing necessary components from Skia
import { Dimensions, Platform, StyleSheet } from "react-native"; // Importing required native components for layout and styles

// Get the width and height of the device screen
const { width, height } = Dimensions.get("window");

// Defining the size of the inner rectangle (cut-out area)
const innerDimension = 300;

// Create an outer rectangle that covers the entire screen
// The outer rectangle has no border radius (radius 0)
const outer = rrect(rect(0, 0, width, height), 0, 0);

// Create the inner rectangle (cut-out area) with rounded corners
// The inner rectangle is centered on the screen and has a fixed dimension (300x300) and rounded corners with radius 50
const inner = rrect(
  rect(
    width / 2 - innerDimension / 2, // Centering the inner rectangle horizontally
    height / 2 - innerDimension / 2, // Centering the inner rectangle vertically
    innerDimension, // Setting the width of the inner rectangle
    innerDimension // Setting the height of the inner rectangle
  ),
  50, // Horizontal corner radius for the inner rectangle
  50  // Vertical corner radius for the inner rectangle
);

// The Overlay component renders a canvas with a DiffRect
// DiffRect creates a visual effect by subtracting the inner rectangle from the outer one
export const Overlay = () => {
  return (
    <Canvas
      style={ // Dynamically setting the style based on the platform
        Platform.OS === "android" // If the platform is Android, use flex: 1
          ? { flex: 1 }
          : StyleSheet.absoluteFillObject // On iOS, use absolute positioning to cover the entire screen
      }
    >
      {/* DiffRect renders the overlay with the black semi-transparent color and opacity of 0.5 */}
      <DiffRect inner={inner} outer={outer} color="black" opacity={0.5} />
    </Canvas>
  );
};
