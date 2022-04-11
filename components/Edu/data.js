import { getEgg, setEgg } from 'helpers/egg'

import UW from '../../img/UWIcon.png'
import Dojo from '../../img/dojoIcon.png'
import Corban from '../../img/corbanIcon.png'
import SPH from '../../img/sphIcon.png'

const hints = [
    'Something about Long',
    'Something about Learner',
    'Next Question'
]

const eggUpdate = (num) => {
    let egg = getEgg()
    if (egg.hasOwnProperty(`h${num}Active`)) {
        let key = `eg${num}` 
        setEgg({
            [key]: true,
            currentHint: hints[num-1]
        })
    }
}


const data = [
    {
        name: 'University of Washington',
        icon: [UW],
        description: <p>I attended UW after I finished my first bootcamp at Coding Dojo. UW was a great experience because it allowed me to focus on the REACT framework which quickly became my favorite frontend framework after my MERN stack experience. It was a slower paced bootcamp compared to the hyper fast timeline the Coding Dojo offers. This slower pace really allowed for more exploration into the REACT suite. React, like python, has found a special place in my <span onClick={() => something()}>Life</span>.</p>,
    },
    {
        name: 'Coding Dojo',
        icon: [Dojo],
        description: <p>I attened Coding Dojo in order to perform a career change, this only partially worked (as I am now teching, my old job, at Coding Dojo). The Dojo was an amazing experience, it was intense and made for some long days even though I came into it with some self-learned knowlege. In just three and a half short months, which felt <span onClick={() => eggUpdate(2)} >long</span>, we covered Web Fundamentals (2 weeks), Python using the Django framework (4 weeks), MERN which stands for Mongo, Express, React, and Nodejs (4 weeks), and C# with ASP.NET as framework (4 weeks).</p>,
    },
    {
        name: 'Corban University & Universitas Pelita Harapan',
        icon: [Corban, SPH],
        description: <p>I attended UPH while living in Indonesia. The program I went through was in conjunction with Corban University and therefor my degree actually came from Corban. UPH was a tough experience due to a multitude of factors. Living in a different culture being a huge challenge which brought many rewarding learning experiences. Aside from the cultural differences the schooling itself was challenging. These challenges provided many opportunities for me to grow as a person and as an educator, giving me a worldview that diverse and helping me be a <span onClick={() => eggUpdate(3)}>learner</span> at every turn.</p>,
    },

]


export {
    data
}