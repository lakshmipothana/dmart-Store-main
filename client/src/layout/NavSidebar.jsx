/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { createMemoryHistory } from "history";


export const NavSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navigation
        // you can use your own router's api to get pathname
        onSelect={({itemId}) => {
          if(itemId === '/0'){  
            navigate(`/`);
          }else{
            let redirectUrl = "../productsByCategory/Nav"+ itemId;
           navigate(redirectUrl, { replace: true});
           navigate(0)
          }
        }}
        items={[
          {
            title: 'All Items',
            itemId: '/0',
          },
          {
            title: 'Bakery',
            itemId: '/1'
          },
          {
            title: 'Instant Food',
            itemId: '/2'
          },
          {
            title: 'Meat & Sea Food',
            itemId: '/3'
          },
          {
            title: 'Personal Care',
            itemId: '/4'
          },
          {
            title: 'House Hold',
            itemId: '/5'
          },
          {
            title: 'Frozen Food',
            itemId: '/6'
          },
          {
            title: 'Fruit & Vegetables',
            itemId: '/7'
          },
          {
            title: 'Dairy , Bread & Eggs',
            itemId: '/8'
          },
          {
            title: 'Beverages',
            itemId: '/9'
          },
          {
            title: 'Baby Supplies',
            itemId: '/10'
          }
        ]}
      />
    </>
  );
};
