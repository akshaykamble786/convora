'use client'

import { PAGE_BREAD_CRUMBS } from "@/constants/pages"
import { usePaths } from "@/hooks/user-nav"
import React from "react"

type Props = {
    slug : string
}

const Infobar = ({ slug } : Props) => {
    const { page } = usePaths();
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

    return currentPage && 
    <div className="flex flex-col">
        flsd
    </div>
}

export default Infobar