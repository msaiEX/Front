import React from 'react'
import {
  Box,
  Image,
  HStack,
  Text
} from '@chakra-ui/react'
import ProgressBar from "@ramonak/react-progress-bar";
const SementicCard = ({ name, imageUrl, faceUrl, semantic, persent, positive, nagative }) => {
  return (
    <div name="card-container" className='w-[300px] h-[450px] p-5 bg-slate-50 rounded-2xl'>
      { console.log(persent) }
      <HStack>
        <Text fontSize='1xl'>
          { name }
          {/* 원/달러 */}
        </Text>
        <Box className='w-[34px] h-[34px]'>
          <Image src='/image/america_flag.png' alt='america' />
        </Box>
      </HStack>
      <Box className='flex justify-center'>
        <Image src={ semantic === '긍정적' ? '/image/smile.png' : '/image/sad_face.png' } alt='smile' />
      </Box>
      <Text fontSize='1xl'>
        { semantic }
        {/* 매우긍정적 */}
      </Text>
      <ProgressBar
        completed={ persent }
        height='30px'
        bgColor={ semantic === '긍정적' ? '#FE2E2E' : '#1A6AEB'}
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
    </div>
  )
}

export default SementicCard
