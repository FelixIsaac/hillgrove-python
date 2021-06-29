import React from 'react';
import DashboardItem from '../components/DashboardItem';

export default () => {
    const data = [
        'Introduction to Python & Programming in General',
        'Flow Control & Object Oriented Programming',
        'Python Modules, Frameworks, and Libraries',
        'Python advanced topics and file handling',
        'Data Science Introduction using Python',
        'Advanced Python with Code Introspection'
    ]

    return data.map((title, i) => <DashboardItem no={i + 1} title={title}/>)
}
