import React from "react";
import BannerCarousel from '../Components/BannerCarousel';
import BannerAdSection from '../Components/BannerAdSection';

import Category from '../Components/Category';
import CategoryCart from '../Components/CategoryCart' ;
import BannerZoro from '../Components/BannerZoro';
import BannerUnder from '../Components/BannerUnder';
import BannerNewCollection from '../Components/BannerNewCollection';
import AllProductCarts from '../Components/AllProductCarts';
import AllCategoryCarts from '../Components/AllCategoryCarts';
import Products from "../Context/product";
import BannerFooter from '../Components/BannerFooter';

export default function  () {
    return (
        <div>
        <BannerCarousel/>
      <Category mode="shrink"/>
      <BannerAdSection/>
      <AllCategoryCarts />
      <BannerZoro/>
      <BannerUnder/>
      <BannerNewCollection/>
      <AllProductCarts SectionName={"Women's Fashion"} ProductData = {Products.women}/>
       <AllProductCarts SectionName={"Men's Fashion"} ProductData = {Products.men}/>

        <AllProductCarts SectionName={"Kid's Fashion"} ProductData = {Products.kids}/>

        <AllProductCarts SectionName={"Beauty & Skincare"} ProductData = {Products.beauty}/>

        <AllProductCarts SectionName={"Furnishing & Home Decore"} ProductData = {Products.home}/>

        <AllProductCarts SectionName={"Bag & Accessories"} ProductData = {Products.bags}/>

        <AllProductCarts SectionName={"Footwear"} ProductData = {Products.footwear}/>

        <BannerFooter/>
        </div>
    )
}