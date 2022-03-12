import { createProxyMiddleware } from "http-proxy-middleware";
import env from "@/configs/server";
export const getProducts = createProxyMiddleware({
  target: "https://teknasyon.netlify.app/.netlify/functions/products",
  changeOrigin: true,
  pathRewrite(_path, req) {
    return "https://teknasyon.netlify.app/.netlify/functions/products";
  },
  async onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader(
      "X-Access-Token",
      "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"
    );
  },
});
