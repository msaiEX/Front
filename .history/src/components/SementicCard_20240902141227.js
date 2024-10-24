import React from 'react'
import {
  Box,
  Image,
  HStack,
  Text
} from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';

const SementicCard = ({ name, imageUrl, faceUrl, semantic, persent, positive, nagative }) => {
  return (
    <Link to={"/SemanticPageDetail/" + name.slice(2)} name="card-container" className='w-[300px] h-[450px] p-5 bg-slate-50 rounded-2xl'>
      { console.log(name.slice(2)) }
      <HStack>
        <Text fontSize='1xl'>
          { name }
          {/* 원/달러 */}
        </Text>
        <Box className='w-[34px] h-[34px]'>
          <Image src={imageUrl} alt='america' />
        </Box>
      </HStack>
      <Box className='flex justify-center'>
        {/* <Image src={ semantic === '긍정적' ? '/image/smile.png' : '/image/sad_face.png' } alt='smile' /> */}
        <Image className='w-[48px] h-[48px]' src={ faceUrl } alt='smile' />
      </Box>
      <Text fontSize='1xl'>
        { semantic }
        {/* 매우긍정적 */}
      </Text>
      <ProgressBar
        completed={ persent }
        height='30px'
        bgColor={ semantic === '긍정적' ? '#FA5858' : '#1A6AEB'}
        className='py-5'
      />
      <div className='flex justify-between'>
        <div className='flex items-end'>
          <Text className='leading-none text-red-600' fontSize='1xl'>긍정</Text>
          <Text className='leading-none text-red-600' fontSize='2xl' as={'b'}>{ positive }%</Text>
        </div>
        <div className='flex items-end'>
          <Text className='leading-none text-blue-600' fontSize='2xl' as={'b'}>{ nagative }%</Text>
          <Text className='leading-none text-blue-600' fontSize='1xl'>부정</Text>
        </div>
      </div>
      <Text fontSize={'sm'} className='flex justify-end text-slate-600 py-10'>자세한 분석 보러가기</Text>
    </Link>
  )
}

export default SementicCard
