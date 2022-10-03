import React, { FC } from 'react';

interface HiFiveProps {
    [key: string]: any
}

const HiFive: FC<HiFiveProps> = ({ ...props }) => {
    return <div>
        <p className="text-3xl text-slate-50 font-bold underline">
            Don't leave me hangin'
        </p>
        <button>
            👋
        </button>
    </div>
}

export default HiFive;