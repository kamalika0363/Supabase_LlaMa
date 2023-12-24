import React from 'react';
import GroupCard from './GroupCard';

const DataComponent = () => {
    const data = [
        { status: 'Done', group: 'Group 1', deadline: '8th Dec', credits: 3 , href: '/groups'},
        { status: 'Pending', group: 'Group 2', deadline: '12th Dec', credits: 1 , href: '/groups'},
        { status: 'Pending', group: 'Data Structures', deadline: '16th Dec', credits: 2 , href: '/groups'},
    ];

    return <GroupCard data={data} />;
};

export default DataComponent;
