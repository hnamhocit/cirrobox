"use client";

import { ReactNode, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { onAuthStateChanged } from "firebase/auth";

import { useUserStore } from "@/stores";
import { auth } from "@/config/firebase";

// ================= Animations =================
const growY = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;

const growX = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

// ================= Styled Components =================
const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
`;

const Side = styled.div`
  position: absolute;
  background: #171717; /* neutral-900 */
`;

/* ----- Static frame ----- */
const Left = styled(Side)`
  bottom: 0;
  left: 0;
  width: 4px;
  height: calc(100% - 4px);
  transform-origin: bottom;
  animation: ${growY} 3s linear forwards;
`;

const Top = styled(Side)`
  top: 0;
  left: 0;
  height: 4px;
  width: calc(100% - 4px);
  transform-origin: left;
  animation: ${growX} 3s linear forwards;
  animation-delay: 3s;
`;

const Right = styled(Side)`
  top: 0;
  right: 0;
  width: 4px;
  height: calc(100% - 4px);
  transform-origin: top;
  animation: ${growY} 3s linear forwards;
  animation-delay: 6s;
`;

const Bottom = styled(Side)`
  bottom: 0;
  right: 0;
  height: 4px;
  width: calc(100% - 4px);
  transform-origin: right;
  animation: ${growX} 3s linear forwards;
  animation-delay: 9s;
`;

/* ----- Highlights loop ----- */
const loopY = keyframes`
  0% { transform: scaleY(0); }
  50% { transform: scaleY(1); }
  100% { transform: scaleY(0); }
`;

const loopX = keyframes`
  0% { transform: scaleX(0); }
  50% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
`;

const Highlight = styled.div<{ color: string }>`
  position: absolute;
  background: ${(p) => p.color};
  box-shadow: 0 0 12px ${(p) => p.color};
`;

const LeftHighlight = styled(Highlight)`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  animation: ${loopY} 1.2s linear infinite;
`;

const TopHighlight = styled(Highlight)`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform-origin: left;
  animation: ${loopX} 1.2s linear infinite;
  animation-delay: 1.2s;
`;

const RightHighlight = styled(Highlight)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  animation: ${loopY} 1.2s linear infinite;
  animation-delay: 2.4s;
`;

const BottomHighlight = styled(Highlight)`
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transform-origin: right;
  animation: ${loopX} 1.2s linear infinite;
  animation-delay: 3.6s;
`;

// ================= Loader Component =================
const Loader = () => {
  return (
    <LoaderWrapper>
      <Box>
        <Left>
          <LeftHighlight color="#ec4899" /> {/* pink-500 */}
        </Left>
        <Top>
          <TopHighlight color="#f59e0b" /> {/* amber-500 */}
        </Top>
        <Right>
          <RightHighlight color="#3b82f6" /> {/* blue-500 */}
        </Right>
        <Bottom>
          <BottomHighlight color="#ef4444" /> {/* red-500 */}
        </Bottom>
      </Box>
    </LoaderWrapper>
  );
};

// ================= AuthProvider =================
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, getProfile } = useUserStore();

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        getProfile(user.uid);
      }
    });

    return () => unsubscriber();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default AuthProvider;
