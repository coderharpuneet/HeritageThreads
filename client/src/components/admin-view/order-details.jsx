import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "@/store/admin/order-slice";
import { useToast } from "../ui/use-toast";

const initialFormData = {
  status: "",
};

function AdminOrderDetailsView({ orderDetails }) {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  console.log(orderDetails, "orderDetailsorderDetails");

  function handleUpdateStatus(event) {
    event.preventDefault();
    const { status } = formData;

    dispatch(
      updateOrderStatus({ id: orderDetails?._id, orderStatus: status })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(getOrderDetailsForAdmin(orderDetails?._id));
        dispatch(getAllOrdersForAdmin());
        setFormData(initialFormData);
        toast({
          title: data?.payload?.message,
        });
      }
    });
  }

  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-bold font-lovelyn">Order ID</p>
            <div className="font-google text-lg">{orderDetails?._id}</div>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-bold font-lovelyn">Order Date</p>
            <div className="font-google text-lg">{orderDetails?.orderDate.split("T")[0]}</div>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-bold font-lovelyn">Order Price</p>
            <div className="font-google text-lg">${orderDetails?.totalAmount}</div>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-bold font-lovelyn">Payment method</p>
            <div className="font-google text-lg">{orderDetails?.paymentMethod}</div>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-bold font-lovelyn">Payment Status</p>
            <div className="font-google text-lg">{orderDetails?.paymentStatus}</div>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-bold font-lovelyn">Order Status</p>
            <Label>
              <Badge
                className={`py-1 px-3 ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : "bg-black"
                }`}    
              >
                {orderDetails?.orderStatus}
              </Badge>  
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            {/* <div className="font-medium">Ord</div> */}
            <ul className="grid gap-3">
              {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item, index) => (
                    <li key={index} className="flex font-google items-center justify-between">
                      <span>Title: {item.title}</span>
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ${item.price}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 font-google ">
          <div className="grid gap-2">
            <div className="font-medium ">Shipping Info</div>
            <div className="grid gap-0.5 bg-[#1C332D] p-2 rounded-2xl text-muted-foreground">
              <span className="text-white">{user.userName}</span>
              <span className="text-white">{orderDetails?.addressInfo?.address}</span>
              <span className="text-white">{orderDetails?.addressInfo?.pincode}</span>
              <span className="text-white">{orderDetails?.addressInfo?.phone}</span>
            </div>
          </div>
        </div>

        <div>
          <CommonForm
            formControls={[
              {
                label: "Order Status",
                name: "status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "inProcess", label: "In Process" },
                  { id: "inShipping", label: "In Shipping" },
                  { id: "delivered", label: "Delivered" },
                  { id: "rejected", label: "Rejected" },
                ],
              },
            ]}
            className = "text-black"
            formData={formData}
            setFormData={setFormData}
            buttonText={"Update Order Status"}
            onSubmit={handleUpdateStatus}
          />
        </div>
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetailsView;
