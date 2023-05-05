import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WebIcon from '@mui/icons-material/Web';
import ExtensionIcon from '@mui/icons-material/Extension';
import LayersIcon from '@mui/icons-material/Layers';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapIcon from '@mui/icons-material/Map';
import SensorsIcon from '@mui/icons-material/Sensors';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import Logo from '../../data/logo.svg';

function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-screen w-44 bg-white border border-gray-300">
        {/* Upper Sidebar */}
        <div>
            <img src={Logo} alt="Longshot AI logo" className="p-2" />
            <div className="flex flex-col justify-center p-2 bg-gray-100">
                <span className="text-xs text-gray-500 mx-2">Project</span>
                <span className="text-sm mx-2">My First Project</span>
            </div>
            <div className='text-slate-500 flex items-center mx-1'>
                <DashboardIcon className="m-2" style={{ fontSize: 20 }} />
                <span className="text-xs">Dashboard</span>
            </div>
            <div className='text-slate-500 flex items-center mx-1'>
                <RestaurantIcon className="m-2" style={{ fontSize: 20 }} />
                <span className="text-xs">Recipes</span>
            </div>
            <hr className="border-gray-300 my-1 mx-4" />
            <div className='text-slate-500 flex items-center mx-1'>
                <WebIcon className="m-2" style={{ fontSize: 20 }} />
                <span className="text-xs">Blog</span>
            </div>
            <div className='text-slate-500 flex items-center mx-1'>
                <ExtensionIcon className="m-2" style={{ fontSize: 20 }} />
                <span className="text-xs">Templates</span>
            </div>
            <div className="flex items-center mx-4">
                <FavoriteIcon className="inline m-2 text-red-600" style={{ fontSize: 12 }} />
                <span className="text-xs text-black">Favorites</span>
            </div>
            <div className="flex items-center mx-4">
                <CircleIcon className="inline m-2 text-gray-400" style={{ fontSize: 12 }} />
                <span className="text-xs text-black">Custom Template</span>
            </div>
            <div className='text-slate-500 flex items-center mx-4'>
                <LayersIcon className="m-2" style={{ fontSize: 20 }} />
                <span className="text-xs">Integrations</span>
            </div>
            <div className="flex items-center mx-4">
                <img src="https://asset.brandfetch.io/idt3n8W3ef/idTv-rh9Ur.svg" alt="semrush logo" className="h-7 w-7 mx-1" />
                <span className="text-xs text-black">Semrush</span>
            </div>
        </div>
        {/* Lower Sidebar */}
        <div>
            <div className="bg-cyan-100 p-3 flex flex-col rounded-t-md border border-cyan-200">
                <div className="flex items-center">
                    <span className="bg-purple-800 text-white text-xs px-2 py-1.5 m-2 rounded-full">ks</span>
                    <div className='flex flex-col'>
                    <span className="text-xs text-slate-800">kritikalpa.saha</span>
                    <span className="text-gray-500" style={{fontSize: 11}}>Credits used:313.2</span>
                    </div>
                </div>
                <button className="my-2 py-2 text-xs bg-green-500 text-white rounded hover:bg-green-600">
                    <ShoppingCartIcon className="mx-1" style={{ fontSize: 18 }} />
                    Change Plan
                </button>
                <div className='text-slate-500 flex items-center mx-1'>
                    <MapIcon className="m-2" style={{ fontSize: 20 }} />
                    <span className="text-xs">Product Roadmap</span>
                </div>
                <div className='text-slate-500 flex items-center mx-1'>
                    <SensorsIcon className="m-2" style={{ fontSize: 20 }} />
                    <span className="text-xs">What's New?</span>
                </div>
            </div>
            <div className='text-slate-500 flex items-center mx-1'>
                <KeyboardTabIcon className="m-2 rotate-180" style={{ fontSize: 20 }} />
                <span className="text-xs">Collapse</span>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
