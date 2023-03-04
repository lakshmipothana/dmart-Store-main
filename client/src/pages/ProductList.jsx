import { Card, Pagination } from "@windmill/react-ui";
import Product from "components/Product";
import Spinner from "components/Spinner";
import { useProduct } from "context/ProductContext";
import Layout from "layout/Layout";
import { SearchBar } from "layout/SearchBar";
import { useState } from "react";

import productService from "services/product.service";

const ProductList = () => {
  const { products, setProducts, setPage} = useProduct();
  //const [prodList, setProdList] = useState(products); 

  const handleChange = (page) => {
    console.log("inside handle change............."+ page);
    setProducts(products);
    setPage(page);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const doSearch = (page, searchStr) => {
    console.log("inside do Search............."+ searchStr);
    if(searchStr !== null && searchStr !== ''){
      productService.getProductBySearchStr( searchStr).then((response) => {
        setProducts(response.data);
      // setIsLoading(false);
      });
      setPage(page);
    }
  };

  if (!products) {
    return (
      <>
        <Layout>
          <Spinner size={100} loading />
        </Layout>
      </>
    );
  }

  return (
    <Layout>
      <div  className="text-gray-700 mt-10  me-100"> 
          <SearchBar doSearch={doSearch}/>
      </div>
      <div className="container py-20 mx-auto">
        <Card className="flex flex-wrap h-full mx-2">
          {products?.map((prod) => (
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
          onChange={(e) => handleChange(e)}
          label="Page navigation"
        />
      </div>
    </Layout>
  );
};

export default ProductList;
