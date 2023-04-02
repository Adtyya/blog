import Image from 'next/image';

import Container from '@/component/atom/Container';
import { HeadingOne, Paragraph } from '@/component/atom/text';
import Author from '@/component/molecul/Author';
import Breadcrumb from '@/component/molecul/BreadCrumb';
import Footer from '@/component/organism/Footer';
import Navbar from '@/component/organism/Navbar';

export default function ReadArticle() {
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900">
      <Container>
        <Navbar></Navbar>
        <article className="px-3 py-12 lg:px-0">
          <div className="flex flex-col items-center space-y-5 text-center">
            <Breadcrumb>
              <Breadcrumb.Category>UI Design</Breadcrumb.Category>
              <Breadcrumb.Seperator></Breadcrumb.Seperator>
              <Breadcrumb.Date>July 2, 2021</Breadcrumb.Date>
            </Breadcrumb>
            <HeadingOne size="small">
              Understanding color theory: the color wheel and finding
              complementary colors
            </HeadingOne>
          </div>
          <div className="mb-12 mt-4 flex justify-center">
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
          <div className="relative h-72 w-full overflow-hidden rounded-lg lg:h-96">
            <Image
              src="/assets/images/laptop.jpg"
              fill
              style={{ objectFit: 'cover' }}
              alt="example"
              className="duration-300"
            />
          </div>
          <div className="mx-auto mt-14 w-full space-y-8 md:w-11/12">
            <Paragraph size="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              praesentium impedit, autem laudantium, quaerat dolor voluptas
              consequuntur amet recusandae alias illo eius tenetur unde
              necessitatibus libero commodi similique dignissimos. Sed
              blanditiis laboriosam suscipit facere dolore nemo minima maxime
              fugiat et, eligendi, voluptatum iusto vero officiis eveniet in
              sint voluptates quo praesentium sapiente dolorem expedita! Veniam
              corrupti minima et delectus fugit exercitationem accusantium
              voluptatum ducimus tempora, rerum, iste sint id nisi omnis
              possimus deserunt tenetur ea assumenda illo ex porro nam eius
              culpa. Deleniti eius provident perferendis ex aut sit quae, iusto
              alias, quasi, dolorem et. Soluta quo repellendus vel accusamus!
            </Paragraph>
            <Paragraph size="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              praesentium impedit, autem laudantium, quaerat dolor voluptas
              consequuntur amet recusandae alias illo eius tenetur unde
              necessitatibus libero commodi similique dignissimos. Sed
              blanditiis laboriosam suscipit facere dolore nemo minima maxime
              fugiat et, eligendi, voluptatum iusto vero officiis eveniet in
              sint voluptates quo praesentium sapiente dolorem expedita! Veniam
              corrupti minima et delectus fugit exercitationem accusantium
              voluptatum ducimus tempora, rerum, iste sint id nisi omnis
              possimus deserunt tenetur ea assumenda illo ex porro nam eius
              culpa. Deleniti eius provident perferendis ex aut sit quae, iusto
              alias, quasi, dolorem et. Soluta quo repellendus vel accusamus!
            </Paragraph>
          </div>
        </article>
        <Footer></Footer>
      </Container>
    </div>
  );
}
