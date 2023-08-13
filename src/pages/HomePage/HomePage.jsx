import React from 'react'

import Menu from '../../component/Menu/Menu'
import Collection from "../../component/Collection/Collection"

export default function HomePage({ handleState }) {
    return (
        <main>
            <Menu>
                <Collection handleClick={() => handleState(() => 1)}>Acervo Público</Collection>
                <Collection handleClick={() => handleState(() => 2)}>Acervo Pessoal</Collection>
            </Menu>
        </main>

    )
}
