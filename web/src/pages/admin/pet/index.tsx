import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { SideMenu } from '../doctor/side-menu'
import PetDetails from './pet-management/pet-detail'
import PetManagement from './pet-management/list-pet'
import { useLocation } from 'react-router-dom'

const PetsPage = () => {

  const location = useLocation();
  const path = location.pathname;
  return (
    <AnimatePresence initial={false}>
      <div className="h-screen bg-blue-400">
        <div className="flex h-full">
          <SideMenu />
          <div className="relative z-20 w-full pb-2 pe-4 pt-4">
            <div className="flex h-full flex-1 flex-col rounded-lg border-2 border-black bg-white">
              {
                path === '/pet' ? <PetManagement /> : <PetDetails/>
              }
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default PetsPage
