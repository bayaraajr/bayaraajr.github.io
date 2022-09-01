import React, { FC, lazy, Suspense } from 'react';

/* Dependency imports */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Project imports */

const Home = lazy(() => import(/*webpackChunkName: "home" */ "pages/home"));
const HiFive = lazy(() => import(/*webpackChunkName: "hi-five" */ "pages/hi-five"));

interface AppProps {
    [key: string]: any
}

const App: FC<AppProps> = ({ ...props }) => {
    return <div>
        <Suspense fallback={<p>Loading page...</p>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hifive" element={<HiFive />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </div>
}

export default App;