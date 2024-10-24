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
        <Text className='font-bold text-1xl'>
          { name }
        </Text>
        <Box className='w-[28px] h-[28px]'>
          <Image src={imageUrl} alt='america' />
        </Box>
      </HStack>
      <Box className='flex justify-center'>
        <Image className='w-[172px] h-[172px]' src={ faceUrl } alt='smile' />
      </Box>
      <Text fontSize='1xl'>
        { semantic }
      </Text>
      <ProgressBar
        completed={ Number(persent.toFixed(1)) }
        height='30px'
        bgColor={ semantic === '긍정' ? '#FA5858' : '#1A6AEB'}
        className='py-5'
      />
      <div className='flex justify-between'>
        <div className='flex items-end'>
          <Text className='leading-none text-red-600' fontSize='1xl'>긍정</Text>
          <Text className='leading-none text-red-600' fontSize='2xl' as={'b'}>{ Number(positive.toFixed(1)) }%</Text>
        </div>
        <div className='flex items-end'>
          <Text className='leading-none text-blue-600' fontSize='2xl' as={'b'}>{ Number(nagative.toFixed(1)) }%</Text>
          <Text className='leading-none text-blue-600' fontSize='1xl'>부정</Text>
        </div>
      </div>
      <Text fontSize={'sm'} className='flex justify-end text-slate-600 py-10'>자세한 분석 보러가기</Text>
    </Link>
  )
}

export default SementicCard
