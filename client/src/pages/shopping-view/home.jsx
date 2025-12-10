import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import { motion , useScroll } from "framer-motion";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import Footer from "@/components/shopping-view/Footer";
import Women from "@/components/shopping-view/Women";

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const collectionImages = ["https://i.pinimg.com/736x/98/1b/80/981b80b039fb4a1f1112ff3b8d46c207.jpg" ,"https://www.libasco.com/product_images/uploaded_images/3l.jpg","https://www.iluvdesigner.com/cdn/shop/files/eid-dress-001_8a02c9ab-ab7e-4470-8a8e-2ee1e43909ae_533x.jpg?v=1712166907", "https://i.pinimg.com/736x/d9/c8/b1/d9c8b191265c1c119ec9c1e3602503a7.jpg","https://www.inddus.in/cdn/shop/products/floral-embroidered-fit-flare-maxi-ethnic-dress-with-dupatta-308735.jpg?v=1696663063"]

  const brands = [
    "https://i.pinimg.com/originals/7a/d1/b4/7ad1b4ee996e8647ea15b36883da9e91.jpg",
    "https://i.pinimg.com/736x/bb/13/83/bb13836f1b313a125243cc9210800004.jpg", "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18981588/2024/10/3/78daf87b-e09b-4842-8157-417a80ed03ce1727947601392-Puma-Men-Black-Slim-Fit-Zippered-Sporty-Jacket-6711727947600-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Vsr71nMrCcOc9dWZU-2h5Z9S5eMumnmXzQ&s",
    "https://maanfashion.co.in/wp-content/uploads/2018/07/Volono-trendz-Zara--Wholesalers-Salwar-Suit-Market-Surat-cheap-rate.jpg",
    "https://assets.vogue.in/photos/5ddf81766ffadb00085fae67/2:3/w_2560%2Cc_limit/Rental-Clothes-H&M.jpg"]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section
        className="py-12 text-white bg-black font-google">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-google font-bold text-center mb-8">
            Heritage Collection
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem, index) => (
                <Card
                  key={categoryItem.id} 
                  onClick={() =>
                    handleNavigateToListingPage(categoryItem, "category")
                  }
                  className="cursor-pointer w-auto h-auto flex items-center justify-center rounded-[0px] shadow-white hover:shadow-lg transition-shadow"
                >
                  <motion.div className="relative" transition={{duration : 0.5}} whileHover={{scale : 1.02}}>
                    <img src={collectionImages[index % collectionImages.length]} className="w-[400px] rounded-sm h-[700px] object-cover" />                  
                    <span className="font-henri  bottom-1 left-[100px] text-3xl absolute z-10 text-white">{categoryItem.label}</span>
                  </motion.div>
                </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-black font-google text-white font-g ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Heritage Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem,index) => (
              <div
                key={brandItem.id} 
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer w-auto h-auto flex items-center justify-center rounded-[0px] shadow-white hover:shadow-lg transition-shadow"              >
                <motion.div
                  drag
                  className="flex flex-col items-center justify-center">
                  <motion.img whileHover={{scale : 1.1}} transition={{duration : 1.03}} src={brands[index % collectionImages.length]} className="w-[300px] rounded-full h-[300px] object-cover" /> 

                  <span className="font-bold mt-4 font-henri tracking-wider">{brandItem.label}</span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 font-google ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem.id} 
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
      <Women/>
      <Footer/>
    </div>
  );
}

export default ShoppingHome;
