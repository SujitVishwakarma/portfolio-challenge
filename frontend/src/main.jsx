import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import AppRouter from './router/AppRouter.jsx'



createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Provider store={store}>
      <MantineProvider >
        <ModalsProvider>
          <RouterProvider router={AppRouter} />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  </StrictMode>
)
