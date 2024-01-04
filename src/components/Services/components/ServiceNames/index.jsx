'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Software Dev",
        description: "Working on the Next-Generation Technologies. Be it on the Web, Mobile or Desktop.",
        speed: 0.6
    },
    {
        title: "Headless CMS Dev",
        description: "We will take care of your CMS based website. Webflow, Shopify and WP won't lock you down anymore.",
        speed: 0.7
    },
    {
        title: "E-Commerce Dev",
        description: "Your brand will look extra with our custom tailed E-commerce software solutions. Prepare for your sales to start rocking off.",
        speed: 0.67
    },
    {
        title: "3D Experience Dev",
        description: "Engage your visitors with interactive experiences using the latest technologies of 3D, AR and VR!",
        speed: 0.8
    },
    {
        title: "Maintenance",
        description: "We stay by your side in your journey and make sure no interruptions will occur.",
        speed: 0.8
    },
    {
        title: "IT Consulting",
        description: "Curious about scalability? tech stack? server setup? We got the answers for all your questions.",
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

