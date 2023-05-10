import Link from 'next/link';
import React from 'react'
import { BsChevronDown } from "react-icons/bs"

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

function Menu({ showCatMenu, setShowCatMenu, categories }) {
    return (
        <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
            {data?.map((item) => {
                return (
                    <React.Fragment key={item?.id}>
                        {!!item?.subMenu ? (
                            <li className='cursor-pointer flex items-center gap-2 relative '
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}>
                                {item?.name}
                                <BsChevronDown size={14} />
                                {showCatMenu && (
                                    <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>
                                        {categories?.map(({ attributes: c, id }) => {
                                            return (
                                                <Link key={id}
                                                    href={`/Category/${c?.slug}`}
                                                    onClick={() =>
                                                        setShowCatMenu(false)}
                                                    className='flex item-center justify-between rounded-md '>
                                                    <li className='h-12 px-5
                                                        hover:bg-black/[0.03] '>
                                                        {c?.name}
                                                    </li>
                                                    <span className='opacity-50 pr-5 '>
                                                        {`(${c?.products?.data?.length})`}
                                                    </span>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className='cursor-pointer'>
                                <Link href="{item?.url}">
                                    {item?.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default Menu;
