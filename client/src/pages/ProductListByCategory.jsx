import { Card, Pagination } from "@windmill/react-ui";
import Product from "components/Product";
import Spinner from "components/Spinner";
import { useProduct } from "context/ProductContext";
import Layout from "layout/Layout";
import { SearchBar } from "layout/SearchBar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "services/product.service";

const ProductListByCategory = () => {
//  const { products, setPage} = useProduct();
  const { prodCate,  reqFrom} = useParams();
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("inside do ProductListByCategory effect............."+reqFrom+ "       "+prodCate);
    async function fetchProducts() {
      if(reqFrom === 'Nav' && prodCate != null){
        setIsLoading(true);
        productService.getProductByCategory( prodCate).then((response) => {
          setProductsList(response.data);
          setIsLoading(false);
        });
      }
    }
    fetchProducts();
  }, [setProductsList]);

  const doSearch = (page, searchStr) => {
    console.log("inside do Search............."+ searchStr);
    if(searchStr !== null && searchStr !== ''){
      productService.getProductBySearchStr( searchStr).then((response) => {
        setProductsList(response.data);
      // setIsLoading(false);
      });
     // setPage(1);
    }
  };

  const handleChange = (page) => {
    console.log("inside handle change.............");
    setProductsList(productsList);
   // setPage(1);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  if (!productsList) {
    return (
      <>
        <Layout>
          <Spinner size={100} loading />
        </Layout>
      </>
    );
  }

  return (
    <Layout loading={isLoading}>
    <div  className="text-gray-700 mt-10  me-100"> 
        <SearchBar doSearch={doSearch}/>
    </div>
    <div className="container py-20 mx-auto">
      <Card className="flex flex-wrap h-full mx-2">
        {productsList?.map((prod) => (
          <div
            className="w-full flex flex-col justify-between sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2 box-border"
            key={prod.product_id}
          >
            <Product product={prod} />
          </div>
        ))}
      </Card>
      <Pagination
        totalResults={20}
        resultsPerPage={12}
        onChange={handleChange}
        label="Page navigation"
      />
    </div>
  </Layout>
  );
};

export default ProductListByCategory;
