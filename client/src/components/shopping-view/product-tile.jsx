import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";


function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <div className="w-full flex rounded-t-[20px] flex-col gap-1 max-w-sm mx-auto">
      <motion.div drag className="bg-black rounded-b-[20px] rounded-t-[20px] text-white" onClick={() => handleGetProductDetails(product?._id)}> 
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[470px] object-cover rounded-t-[20px]"
          />
          {product?.totalStock === 0 ? (
            <div className="absolute top-2 left-2  text-white bg-red-500 hover:bg-red-600">
              Out Of Stock
            </div>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <div className="p-4 text-white">
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[16px] text-white">
              {categoryOptionsMap[product?.category]}
            </span>
            <span className="text-[16px] text-white">
              {brandOptionsMap[product?.brand]}
            </span>
          </div>
          <div className="flex justify-between text-white items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-white" : ""
              } text-lg text-white font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg text-white font-semibold text-primary">
                ${product?.salePrice}
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>
      <div>
        {product?.totalStock === 0 ? (
          <button className="w-full border-2 border-black text-white bg-black hover:bg-white hover:text-black
          duration-200  opacity-60 cursor-not-allowed">
            Out Of Stock
          </button>
        ) : (
          <button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full bg-black border-2 border-black hover:text-black rounded-full hover:bg-white duration-150  text-white py-3"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ShoppingProductTile;
