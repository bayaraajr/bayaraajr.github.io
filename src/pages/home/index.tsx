import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HomwProps {
    [key: string]: any
}

const Home: FC<HomwProps> = ({ ...props }) => {
    const navigate = useNavigate();
    return <div>
        <p>Hi there 👋</p>
        <button onClick={() => navigate('/hifive')}>Gimme high five</button>
    </div>
}

export default Home;