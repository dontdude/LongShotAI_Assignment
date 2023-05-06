import { useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import CircleIcon from '@mui/icons-material/Circle';
import Intent from '../../utils/intentMap';
import getKdInfo from '../../utils/kdMap';

const Table = ({data, setCheckedData}) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = (event, item) => {
    setIsChecked(event.target.checked);
    setCheckedData(item);
  };

  return (
    <table className="text-xs">
      <thead className="bg-gray-200 text-gray-500 ">
        <tr className="h-10">
          <th className="w-[5%] text-center border border-gray-400" >
            <input type="checkbox" checked={isChecked} />
          </th>
          <th className="w-[25%] text-left border border-gray-400 pl-6">Keyword</th>
          <th className="w-[10%] text-left border border-gray-400 pl-2">Intent</th>
          <th className="w-[10%] text-left bg-gray-300 border border-gray-400 pl-4">Volume<SortIcon style={{ fontSize: 14 }} /></th>
          <th className="w-[10%] text-left border border-gray-400 pl-2">KD %<SortIcon style={{ fontSize: 14 }} /></th>
          <th className="w-[10%] text-left border border-gray-400 pl-2">CPC (USD)<SortIcon style={{ fontSize: 14 }} /></th>
          <th className="w-[8%] text-left border border-gray-400 pl-2">Com.<SortIcon style={{ fontSize: 14 }} /></th>
          <th className="w-[10%] text-left border border-gray-400 pl-2">Results<SortIcon style={{ fontSize: 14 }} /></th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr className="h-12">
            <td className="w-[5%] whitespace-nowrap text-center">
              <input type="checkbox" onChange={(event) => handleCheckboxChange(event, item)} />
            </td>
            <td className="pl-1 w-[25%] whitespace-nowrap">{item[0]}</td>
            <td className="pl-2 w-[10%] whitespace-nowrap">
                <Intent intent = {item[2]} length="1" />
            </td>
            <td className="pl-2 w-[10%] whitespace-nowrap">{item[1]}</td>
            <td className="pl-2 w-[10%] whitespace-nowrap">
              {item[7]}
              <CircleIcon style={{color : `${getKdInfo(item[7]).color}`, fontSize : 14, paddingLeft: "4px"}} />
            </td>
            <td className="pl-2 w-[10%] whitespace-nowrap">{item[3]}</td>
            <td className="pl-2 w-[8%] whitespace-nowrap">{item[4]}</td>
            <td className="pl-2 w-[10%] whitespace-nowrap">
              {item[5]/1000000}M
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;