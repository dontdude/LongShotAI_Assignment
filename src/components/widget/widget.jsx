import React from 'react'
import getKdInfo from '../../utils/kdMap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const widget = ({checkedData, country}) => {
  
  const kdInfo = getKdInfo(checkedData[7]);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* left */}
      <div className="w-6/12">
        {/* volume */}
        <div className="m-2 p-4 bg-white border border-gray-200 rounded-xl">
          <div>
            <span className="text-gray-700 text-sm">Volume</span>
            <h1 className="font-bold">{checkedData[1]} <img className="h-3 w-4 inline-block" src={`https://img.geonames.org/flags/x/${country}.gif`} alt={`${country} flag`} /></h1>
          </div>
          <hr className="border-gray-300 m-4" />
          {/* keyword Difficulty */}
          <div className="m-2">
            <span className="text-sm">Keyword Difficulty</span>
            <div className="h-15 w-40 flex justify-between items-center">
              <div className='flex flex-col'>
                <h1 className="font-extrabold">{checkedData[7]}%</h1>
                <span className='text-sm text-gray-500'>Possible</span>
              </div>
              <div className="h-12 w-11 ">
                <CircularProgressbar 
                  value={parseInt(checkedData[7])}
                  styles={buildStyles({
                      strokeLinecap: 'butt',
                      pathTransitionDuration: 0.5,
                      pathColor: `${kdInfo.color}`,
                    })} 
                />
              </div>
            </div>
            <span className="text-xs text-gray-500">{kdInfo.text}</span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-6/12">
        {/* intent */}
        <div className="m-2 p-4 bg-white border border-gray-200 rounded-xl">
            <span className="text-gray-700 text-sm">Intent</span>
        </div>
        <div className="m-2 p-4 bg-white border border-gray-200 rounded-xl">
            <span className="text-gray-700 text-sm">Results</span>
        </div>
        <div className="m-2 p-4 bg-white border border-gray-200 rounded-xl flex justify-around">
            <div className="flex flex-col -ml-8">
                <span className="text-gray-700 text-sm">CPC</span>
                <span className="text-gray-700 text-sm">akjf</span>
            </div>
            <div className="flex flex-col ml-4">
                <span className="text-gray-700 text-sm">Com.</span>
                <span className="text-gray-700 text-sm">aldj</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default widget