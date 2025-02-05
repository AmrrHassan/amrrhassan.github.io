'use client';
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

interface GridItem {
  id: number;
  title: string;
  description: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}


const Grid = ({ gridItems, divID }: { gridItems: GridItem[], divID: string }) => {
  return (
    <section id={divID} className='mb-20'>
        <BentoGrid>
            {gridItems.map((item: GridItem) => (
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid;
