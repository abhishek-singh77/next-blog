import Head from 'next/head'
import {PostCard, PostWidget, Categories, Header} from '../components';

const posts = [
  {title: 'Python Game', excerpt: 'Learn Python GUI'},
  {title: 'Learn React', excerpt: 'Learn React with me'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>LetsBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='grid gird-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post} key={post.title} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
