import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Categorys = () => {

    const { categorys } = useSelector(state => state.home)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        }
    }
    return (
        <div className='w-[87%] mx-auto relative'>

            <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                responsive={responsive}
                transitionDuration={500}
            >
                {
                    categorys.map((c, i) => <Link className='h-[185px]' key={i} to='#'>
                        <div className='w-full h-full'>
                            <img className='w-24 mx-auto' src={c.image} alt="image" />
                            <div className='flex justify-center'>
                                <span className=''>{c.name}</span>
                            </div>
                        </div>
                    </Link>)
                }
            </Carousel>

        </div>
    )
}

export default Categorys