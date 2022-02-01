import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ScrollTop, Toolbar } from './components';
import * as Pages from './pages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Toolbar id="back-to-top-anchor" />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="cart" element={<Pages.Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
