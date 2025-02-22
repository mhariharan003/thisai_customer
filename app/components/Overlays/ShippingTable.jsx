const ShippingTable = () => {
    const items = [
      { carrier: 'Blue Dart', package: 'Box', estCost: '$20', estDelivery: '02-11-24' },
      { carrier: 'UPS', package: 'Box', estCost: '$20', estDelivery: '02-11-24' },
      { carrier: 'UPS', package: 'Box', estCost: '$20', estDelivery: '02-11-24' },
    ];
  
    return (
      <div className="container mx-auto">
            <div className="overflow-x-auto">
              <table className="lg-w-full bg-white h-[422px] w-[600px] flex flex-col">
              <thead>
                   <tr className="tTitle">
                    <th className="">Carrier</th>
                    <th className="">Package</th>
                    <th className="">Est.Cost</th>
                    <th className="">Est.Delivery Date</th>
                   </tr>
                 </thead>
                 <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="itemText">
                      <td className="itemList">{item.carrier}</td>
                      <td className="itemList">{item.package}</td>
                      <td className="itemList">{item.estCost}</td>
                      <td className="itemList">{item.estDelivery}</td>
                    </tr>
                     ))}
                 </tbody>
              </table>
            </div>
          </div>
    );
  };

  export default ShippingTable;