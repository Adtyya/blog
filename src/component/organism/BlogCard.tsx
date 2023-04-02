import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Paragraph, Small } from '../atom/text';
import Author from '../molecul/Author';
import Breadcrumb from '../molecul/BreadCrumb';

export default function BlogCard({ index }: { index?: number }) {
  if (index === 0) {
    return (
      <div className="grid h-auto w-full grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative col-span-full h-64 w-full overflow-hidden rounded-lg lg:col-span-8 lg:h-72">
          <Image
            src="/assets/images/laptop.jpg"
            fill
            style={{ objectFit: 'cover' }}
            alt="example"
            className="duration-300 hover:scale-105"
          />
        </div>
        <div className="col-span-full w-full space-y-3 px-3 lg:col-span-4">
          <Breadcrumb>
            <Breadcrumb.Category>UI Design</Breadcrumb.Category>
            <Breadcrumb.Seperator></Breadcrumb.Seperator>
            <Breadcrumb.Date>July 2, 2021</Breadcrumb.Date>
          </Breadcrumb>
          <Link href="/blog/read/teh-pucuk-harum">
            <Paragraph size="default">
              Understanding color theory: the color wheel and finding
              complementary colors
            </Paragraph>
          </Link>
          <Small className="elipsis-t text-white/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            facilis vero delectus sint, ut ex minus dolor itaque dolores
            incidunt beatae temporibus quibusdam et vitae libero repellat
            cupiditate qui numquam iure. Natus facere quia nesciunt quae a id
            blanditiis? Vero, harum unde! Nihil labore sit doloribus ipsa.
            Veniam, at temporibus!
          </Small>
          <Author>
            <Author.Image>
              <Image
                src="/assets/images/person.jpg"
                fill
                style={{ objectFit: 'cover' }}
                alt="person"
              />
            </Author.Image>
            <Author.Biodata>
              <Author.Name>Jajang Kamaludin</Author.Name>
              <Author.Profesion> UI Designer</Author.Profesion>
            </Author.Biodata>
          </Author>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 space-y-3">
      <div className="relative col-span-full h-64 w-full overflow-hidden rounded-lg lg:h-72">
        <Image
          src="/assets/images/laptop.jpg"
          fill
          style={{ objectFit: 'cover' }}
          alt="example"
          className="duration-300 hover:scale-105"
        />
      </div>
      <div className="col-span-full w-full space-y-3 px-3">
        <Breadcrumb>
          <Breadcrumb.Category>UI Design</Breadcrumb.Category>
          <Breadcrumb.Seperator></Breadcrumb.Seperator>
          <Breadcrumb.Date>July 2, 2021</Breadcrumb.Date>
        </Breadcrumb>
        <Link href="/blog/read/teh-pucuk-harum">
          <Paragraph size="default">
            Understanding color theory: the color wheel and finding
            complementary colors
          </Paragraph>
        </Link>
        <Small className="elipsis-t text-white/60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          facilis vero delectus sint, ut ex minus dolor itaque dolores incidunt
          beatae temporibus quibusdam et vitae libero repellat cupiditate qui
          numquam iure. Natus facere quia nesciunt quae a id blanditiis? Vero,
          harum unde! Nihil labore sit doloribus ipsa. Veniam, at temporibus!
        </Small>
        <Author>
          <Author.Image>
            <Image
              src="/assets/images/person.jpg"
              fill
              style={{ objectFit: 'cover' }}
              alt="person"
            />
          </Author.Image>
          <Author.Biodata>
            <Author.Name>Jajang Kamaludin</Author.Name>
            <Author.Profesion> UI Designer</Author.Profesion>
          </Author.Biodata>
        </Author>
      </div>
    </div>
  );
}
