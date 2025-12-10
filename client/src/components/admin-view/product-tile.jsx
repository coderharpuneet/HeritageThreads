import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <div className="w-full rounded-[40px] bg-black font-henri text-white  mx-auto">
      <div className="rounded-[0px]">
        <div className="relative rounded-[50px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[400px] rounded-[0px] object-cover rounded-t-lg"
          /> 
        </div>
        <CardContent>
          <h2 className="text-xl  text-white font-bold mb-1 mt-2">{product?.title}</h2>
          <div className="flex tetx-white justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-white" : ""
              } text-lg font-semibold text-white text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">${product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <button
            className="bg-white border-2 border-white hover:text-black hover:bg-green-600 rounded-full text-black px-3 py-2"
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </button>
          <button className="bg-white border-2 border-white duration-150 hover:bg-[#ee7070ad] hover:text-white rounded-full text-black px-3 py-2" onClick={() => handleDelete(product?._id)}>Delete</button>
        </CardFooter>
      </div>
    </div>
  );
}

export default AdminProductTile;
