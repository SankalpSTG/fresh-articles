import Link from "next/link"
import React from "react"
const Article = (item) => {
    console.log(item)
    return <div className="tw-inline-block tw-p-4">
        <Link href={item.item.link} target="_blank"><div className="tw-w-[240px] tw-min-h-[240px] tw-max-w-full tw-p-5 tw-shadow-md hover:tw-shadow-sm tw-text-xl">
            <div>{item.item.title}</div>
        </div></Link>
    </div>
}

export default Article