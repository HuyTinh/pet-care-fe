// WebSocketManager.ts
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

class WebSocketManager {
  private static instance: WebSocketManager;
  private stompClient: Client | null = null;

  private constructor() {
    const socket = new SockJS("http://localhost:8082/api/v1/ws");
    this.stompClient = new Client({
      webSocketFactory: () => socket as any,
      debug: (str) => console.log(str),
    });
    this.stompClient.activate();
  }

  public static getInstance(): WebSocketManager {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = new WebSocketManager();
    }
    return WebSocketManager.instance;
  }

  public getClient(): Client | null {
    return this.stompClient;
  }
}

export default WebSocketManager;
