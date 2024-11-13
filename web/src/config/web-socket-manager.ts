// WebSocketManager.ts

// Importing necessary dependencies for WebSocket connection and STOMP protocol
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

// WebSocketManager class for managing a singleton instance of WebSocket connection
class WebSocketManager {
  private static instance: WebSocketManager; // Static instance to ensure a singleton pattern
  private stompClient: Client | null = null; // Storing the STOMP client instance

  // Private constructor to initialize the WebSocket connection
  private constructor() {
    // Creating a SockJS connection to the WebSocket server
    const socket = new SockJS(
      "https://tsm885rc-8082.asse.devtunnels.ms/api/v1/appointment-service/ws", // WebSocket server URL
    );

    // Initializing the STOMP client with configuration options
    this.stompClient = new Client({
      webSocketFactory: () => socket as any, // Wrapping the SockJS socket as WebSocket for STOMP
      debug: (str) => console.log(str), // Enabling debug output for WebSocket events
    });

    // Activating the STOMP client to connect to the server
    this.stompClient.activate();
  }

  // Public method to get the singleton instance of WebSocketManager
  public static getInstance(): WebSocketManager {
    // If instance doesn't exist, create it
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = new WebSocketManager();
    }
    return WebSocketManager.instance; // Return the existing instance
  }

  // Public method to get the STOMP client instance
  public getClient(): Client | null {
    return this.stompClient; // Return the STOMP client or null if not initialized
  }
}

// Export the singleton WebSocketManager instance
export default WebSocketManager;
