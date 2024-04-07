import React, { useContext } from 'react'
import loopContext from '../context/loopContext'

export default function Looptool() {

  const context = useContext(loopContext);
  const { setUrl, visitedPages, numberOfReq, sendRequest } = context;

  const onChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const OnClick = () => {
    sendRequest();
  }


  return (
    <>
      <div id='waterripple' className='full-landing-image h-[100vh] w-[100vw] bg-[rgb(73,63,94)] flex justify-center sm:items-center'>
        <div className='h-[80vh] w-[95vw] sm:w-[80vw] sm:glassmorph sm:flex'>
          <div className=' h-full sm:w-3/4'>
            <div className='h-1/2  border border-slate-500 p-2 sm:p-5 flex justify-center items-center'><div className='rounded-2xl h-[100%] w-[98%] sm:w-[90%] glassmorph'>
              <h1 className='text-center text-white text-2xl md:text-3xl lg:text-4xl mt-2 font-bold'>Wikipedia Loop Checker</h1>
              <div className='flex items-center justify-center h-[60%]'>
                <h1 className='text-white w-[77px] '>Enter Url :</h1>
                <div className='ml-2 w-[80%] bg-transparent'>
                  <input className='w-[100%] bg-transparent text-white' type="text" name='url' onChange={onChangeUrl} />
                  <div className='h-[1px] sm:w-[100%] bg-[rgb(62,53,81)]'></div>
                </div>
              </div>
              <button onClick={OnClick} className='flex float-right mr-8 w-[100px] text-white !rounded-md glassmorph justify-center hover:bg-[rgba(255,255,255,0.163)]'>Check</button>
            </div>
            </div>
            <div className='h-1/2 border border-slate-500 p-2 sm:p-5 flex justify-center items-center'><div className='rounded-2xl h-[90%] w-[98%] sm:w-[90%] glassmorph'>
              <h1 className='m-4 text-white'>Visited pages :</h1>
              <div className='overflow-y-auto' style={{ padding: '10px', gap: '5px', display: 'flex', flexDirection: 'column-reverse', height: '75%' }}>
                {visitedPages.map((page, index) => {
                  return (
                    <div key={index} className='text-white glassmorph text-center '>{page}</div>
                  )
                })}
              </div>
            </div></div>
          </div>
          <div className=' sm:h-full sm:w-1/4 border border-slate-500 p-2 sm:p-5 flex justify-center items-center'><div className='rounded-2xl h-[90%]  w-[98%] sm:w-[90%] glassmorph'>
            <h1 className='m-4 text-white'> Number of requests :</h1>
            <div className='h-[80%] w-full flex justify-center items-center text-white font-extrabold text-lg sm:text-[80px]'>
              {numberOfReq}
            </div>

          </div></div>
        </div>
      </div>
    </>
  )
}
