const womenClothing = [
    "https://www.libasco.com/product_images/uploaded_images/3l.jpg",
    "https://www.inddus.in/cdn/shop/products/floral-embroidered-fit-flare-maxi-ethnic-dress-with-dupatta-308735.jpg?v=1696663063",
    "https://asianpartywear.com/cdn/shop/products/13912570_1827567694141430_2323820803583705994_n.jpg?v=1612931624"
]


const Women = () => {
    return (
        <div className="bg-black mb-10 px-10 py-8">
            <div style={{fontFamily : 'Open Sans'}} className="mt-1  text-center text-6xl text-white mb-10">
                WOMEN&#39;S COLLECTION
                <div style={{fontFamily : 'Open Sans'}} className="mt-3 text-xl tracking-widest">Witness our Beautful and Graceful Masterpiece</div>
            </div>

        <div className="grid  grid-cols-3 w-auto h-auto gap-10 bg-black">
          {womenClothing.map((item, index) => (
              <div className="w-fit h-fit border-2 overflow-hidden border-white" key={index}>
                  <img className="w-[450px] hover:scale-105 duration-500 h-[660px]" src={item} alt="" />
              </div>
          ))}
        </div>
    </div>
  )
}

export default Women
