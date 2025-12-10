import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer font-google border-red-700 ${
        selectedId?._id === addressInfo?._id
          ? "border-red-900 border-[4px]"
          : "border-black"
      }`}
    >
      <CardContent className="grid p-4 gap-4">
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>pincode: {addressInfo?.pincode}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
        <Label>Notes: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <button className="bg-black hover:bg-white hover:text-black border-2 border-black duration-200 text-white px-5 rounded-full py-2" onClick={() => handleEditAddress(addressInfo)}>Edit</button>
        <button className="bg-black text-white px-5 border-2 duration-200 hover:text-black border-black hover:bg-red-700 rounded-full py-2" onClick={() => handleDeleteAddress(addressInfo)}>Delete</button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
