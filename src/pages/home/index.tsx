import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HomeProps {
    [key: string]: any
}

const Home: FC<HomeProps> = ({ ...props }) => {
    const navigate = useNavigate();
    return <div>
        <p>Hi there 👋</p>
        <button onClick={() => navigate('/hifive')}>Gimme high five</button>
    </div>
}

export default Home;