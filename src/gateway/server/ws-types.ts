import type { WebSocket } from "ws";
import type { ConnectParams } from "../protocol/index.js";

export type GatewayWsClient = {
  socket: WebSocket;
  connect: ConnectParams;
  connId: string;
  presenceKey?: string;
  clientIp?: string;
  canvasHostUrl?: string;
  canvasCapability?: string;
  canvasCapabilityExpiresAtMs?: number;
  /**
   * Identity vouched for by a trusted reverse proxy (see
   * `gateway.auth.trustedProxy.userHeader`). Only populated when
   * `authMethod === "trusted-proxy"`. Downstream consumers MUST prefer this
   * over any user-id derived from client-supplied strings (e.g. sessionKey).
   */
  proxyUser?: string;
};
