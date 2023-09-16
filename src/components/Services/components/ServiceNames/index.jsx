'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "App Dev",
        description: "Working on the Next-Generation Technologies. Be it on the Web, Mobile or Desktop",
        speed: 0.5
    },
    {
        title: "UI/UX Desing",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "EComm",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Server Setup",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "Maintenance",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8
    },
    {
        title: "IT Consulting",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8
    }
]

export default function ServiceNames() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

