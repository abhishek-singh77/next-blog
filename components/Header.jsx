import React, {useContext} from 'react'
import Link from 'next/link'

const categories =[{name: 'React', slug: 'react'}, {name: 'web dev', slug: 'web-dev'}]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className="font-bold text-cyan-600 text-4xl cursor-pointer">
                            LetsBlog
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category)=>(
                        <Link key ={category.slug} href={'/category/${categroy.slug}'}>
                            <span className='md:float-right mt-2 align-middle text-cyan-600 font-semibold ml-4 cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}

                </div>

            </div>
            
        </div>
    )
}

export default Header
