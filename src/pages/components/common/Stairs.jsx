import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { createContext, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const TransitionContext = createContext({ isTransitioning: false })

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useGSAP(function () {
        setIsTransitioning(true)

        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            onComplete: () => {
                setIsTransitioning(false)
            }
        })
        tl.set(stairParentRef.current, { display: 'block' })
        tl.from('.stair', {
            height: 0,
            stagger: { amount: -0.25 }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: { amount: -0.25 }
        })
        tl.set(stairParentRef.current, { display: 'none' })
        tl.set('.stair', { y: '0%' })

        gsap.from(pageRef.current, {
            opacity: 0,
            duration: 0.6
        })
    }, [currentPath])
    

    const contextValue = useMemo(() => ({ isTransitioning }), [isTransitioning])

    return (
        <TransitionContext.Provider value={contextValue}>
            <div>
                <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                    <div className='h-full w-full flex'>
                        <div className='stair h-full w-1/5 bg-black'></div>
                        <div className='stair h-full w-1/5 bg-black'></div>
                        <div className='stair h-full w-1/5 bg-black'></div>
                        <div className='stair h-full w-1/5 bg-black'></div>
                        <div className='stair h-full w-1/5 bg-black'></div>
                    </div>
                </div>
                <div ref={pageRef}>
                    {props.children}
                </div>
            </div>
        </TransitionContext.Provider>
    )
}

export default Stairs