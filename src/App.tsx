import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { Routes,BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  element={<route.element />}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
