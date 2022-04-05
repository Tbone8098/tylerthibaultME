import { cx } from '@/lib/utils'
import React from 'react'

import Utils from '@/styles/utils.module.css'

export default function Index() {

    const mobileView = () => {
        return (
            <div>
                <div>
                    <h2 className={cx(Utils.me_saira, 'bg-me-primary p-3 text-center text-3xl text-white')}>About Me</h2>
                </div>
                <div className='bg-white flex flex-col gap-3 p-3'>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                    </p>
                    <p>
                        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                    </p>
                </div>
            </div>
        )
    }

    const desktopView = () => {
        return (
            <div className='bg-me-primary text-white flex flex-col items-center py-8'>
                <h2 className='text-4xl font-me-saira py-3'>About Me</h2>
                <div className='w-6/12'>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                    </p>
                    <p>
                        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className='mt-8'>
            <div className='sm:hidden'>
                {mobileView()}
            </div>
            <div className='hidden sm:block'>
                {desktopView()}
            </div>
        </div>
    )
}
