import React, { FC } from 'react';

interface HomeProps {
    [key: string]: any
}

const Home: FC<HomeProps> = ({ ...props }) => {
    
    return <div>
        <p>Hi there 👋</p>
        <p>This page is under construction.</p>
    </div>
}

export default Home;