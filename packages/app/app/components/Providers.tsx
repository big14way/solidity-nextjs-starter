"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { hardhat, sepolia, mainnet, polygon, polygonMumbai, base, baseSepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'Solidity Next.js Starter',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "1eebe528ca0ce94a99ceaa2e915058d7",
  chains: [hardhat, sepolia, mainnet, polygon, polygonMumbai, base, baseSepolia],
  ssr: true,
});

const Providers = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export { Providers };
