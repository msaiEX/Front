import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const BoradCard = ({ title, content, semantic, image}) => {
  return (
    <Link to={"/BoardPageDetail"} name="card-container">
      <img src={image} alt='News Image'  className='object-cover w-full h-[150px] rounded-xl'/>
      <div name="text-box" className='flex flex-col items-center'>
        <Text fontSize='lg' className='grow py-1' as={'b'}>
          { title }
        </Text>
        <Text fontSize={'sm'} lineHeight={1} className='h-[42px] grow text-center text-slate-600'>
          { content }
        </Text>
        <div className='px-6 py-2 rounded-lg bg-green-600'>
          둘러보기
        </div>
      </div>
    </Link>
  )
}

export default BoradCard
