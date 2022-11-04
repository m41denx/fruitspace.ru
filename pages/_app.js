import '../styles/globals.css'
import {StyledEngineProvider} from "@mui/material";
import {RecoilRoot} from "recoil";
import AuthProvider from "../components/AuthProvider";

export default function WebApp({ Component, pageProps }) {
  return (
      <RecoilRoot>
          <StyledEngineProvider injectFirst>
              <AuthProvider RequireAuth={Component.RequireAuth}>
                  <Component {...pageProps} />
              </AuthProvider>
          </StyledEngineProvider>
      </RecoilRoot>
      )
}


